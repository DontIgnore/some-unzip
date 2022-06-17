import Unzip from "isomorphic-unzip"

const form = document.querySelector("#file-form")
const fileInput = document.querySelector("#file-input")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const file = fileInput.files[0]

  if (!file) return

  const zip = new Unzip(file)

  zip.getEntries((error, entries) => {
    if (error) return console.error(error)

    const fileNames = entries.map((entry) => entry.filename)

    zip.getBuffer(fileNames, {}, (error, buffers) => {
      if (error) return console.error(error)

      Object.keys(buffers).forEach((key) => {
        const buffer = buffers[key]
        console.log(key, buffer.toString())
      })
    })
  })
})
