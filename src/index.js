import Unzip from "isomorphic-unzip"

import * as XLSX from "xlsx"

import convert from "xml-js"

const form = document.querySelector("#file-form")
const fileInput = document.querySelector("#file-input")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const file = fileInput.files[0]

  const country = {
    sender: "820",
    uz: "860",
  }

  const coInn = "303360698"

  /* Date init start*/

  let date = new Date()
  let dd = date.getDate()
  if (dd < 10) dd = "0" + dd
  var mm = date.getMonth() + 1
  if (mm < 10) mm = "0" + mm
  var yy = date.getFullYear()
  const now = `${yy}-${mm}-${dd}`

  /* Date init end */

  /* Beauty Passport start */
  const beautyPassport = (str) => {
    let passportStr = str.trim().replace(/\s/g, "")
    let passport
    if (passportStr.length == 9) {
      passport = { ser: passportStr.slice(0, 2), num: passportStr.slice(2) }

      if (
        passport.ser == "АА" ||
        passport.ser == "AА" ||
        passport.ser == "АA"
      ) {
        passport.ser = "AA"
      }
      if (
        passport.ser == "АВ" ||
        passport.ser == "AВ" ||
        passport.ser == "АB"
      ) {
        passport.ser = "AB"
      }
      if (
        passport.ser == "АС" ||
        passport.ser == "AС" ||
        passport.ser == "АC"
      ) {
        passport.ser = "AC"
      }
    } else {
      passport = { ser: "Passport length !== 9", num: "Passport length !== 9" }
    }

    return passport
  }
  /* Beauty Passport end */
  if (!file) return

  const zip = new Unzip(file)

  const declList = {
    main_data,
  }

  zip.getEntries((error, entries) => {
    if (error) return console.error(error)

    const fileNames = entries.map((entry) => entry.filename)

    zip.getBuffer(fileNames, {}, (error, buffers) => {
      if (error) return console.error(error)

      Object.keys(buffers).forEach((key) => {
        const buffer = buffers[key]

        const workbook = XLSX.read(buffer)
        const mySheet = workbook.Sheets["Sheet1"]
        const offsets = {
          declInfo: {
            name: mySheet["A1"].w.trim(),
            sum: mySheet["N10"].w.trim(),
            weight: mySheet["N11"].w.trim(),
          },
          person: {
            secondname: mySheet["E4"].w.trim(),
            firstname: mySheet["E5"].w.trim(),
            address: mySheet["E6"].w.trim(),
            district: mySheet["E7"].w.trim().replace(/[^+\d]/g, ""),
            region: mySheet["E8"].w.trim().replace(/[^+\d]/g, ""),
            telephone: mySheet["E10"].w.trim(),
            passport: beautyPassport(mySheet["E11"].w),
            pnfl: mySheet["E12"].w.trim(),
          },
          declItems: {
            row_name: "G",
            row_quantity: "I",
            row_cost: "J",
            row_start: 4,
            total_rows: 20,
          },
        }

        let getAllInfo = (offset) => {
          if (!offset) return "Check offset"

          let ConsignmentItems = []
          let itemsLength = 0

          for (
            let i = offset.declItems.row_start;
            i < offset.declItems.total_rows + offset.declItems.row_start;
            i++
          ) {
            if (!!mySheet[offset.declItems.row_name + i]) {
              itemsLength++
            }
          }

          for (
            let i = [offset.declItems.row_start, 1];
            i[0] < offset.declItems.total_rows + offset.declItems.row_start;
            i[0]++, i[1]++
          ) {
            let currentItem = {
              name: mySheet[offset.declItems.row_name + i[0]],
              quantity: mySheet[offset.declItems.row_quantity + i[0]],
              cost: mySheet[offset.declItems.row_cost + i[0]],
              weight: (offset.declInfo.weight / itemsLength).toFixed(2),
            }

            if (
              !!currentItem.name &&
              !!currentItem.quantity &&
              !!currentItem.cost
            ) {
              ConsignmentItems.push({
                number: i[1],
                name: currentItem.name.w,
                unit: 796,
                tiftn: {},
                quantity: currentItem.quantity.w,
                netto: currentItem.weight,
                currency: 840,
                cost: currentItem.cost.w,
              })
            }
          }

          let currentDecl = {
            Declaration: [
              {
                decl_type: 1,
                ident_num: offset.declInfo.name,
                ident_data: now,
                sending_country: country.sender,
                receiving_country: country.uz,
                total_cost: offset.declInfo.sum,
                brutto: offset.declInfo.weight,
                company_inn: coInn,
                type_firma: 1,
                nakl_num: {},
                kkdg: {},
                pnfl: offset.person.pnfl,
                last_name: offset.person.secondname,
                first_name: offset.person.firstname,
                father_name: {},
                citizen: "860",
                pass_ser: offset.person.passport.ser,
                pass_num: offset.person.passport.num,
                region: offset.person.region,
                district: offset.person.district,
                address: offset.person.address,
                internet: 0,
                ConsignmentItems,
              },
            ],
          }
          declList.main_data.push(currentDecl)
        }

        getAllInfo(offsets)
      })
      var options = {
        compact: true,
        ignoreComment: true,
        spaces: 2,
        fullTagEmptyElement: true,
      }
      // console.log(declList);
      console.log(convert.js2xml(declList, options))
    })
  })
})
