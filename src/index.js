import Unzip from "isomorphic-unzip"

const form = document.querySelector("#file-form")
const fileInput = document.querySelector("#file-input")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const file = fileInput.files[0]

  if (!file) return

  const zip = new Unzip(file)

  zip.getBuffer(["test.html"], {}, (err, buffers) => {
    if (err) console.error(err)

    Object.keys(buffers).forEach((key) => {
      const buffer = buffers[key]
      console.log(key, buffer.toString())
    })
  })
})
