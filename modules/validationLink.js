export default function validationLink() {
  let inputShorten = document.getElementById('inputShorten')

  inputShorten.addEventListener(
    'invalid',
    function () {
      event.preventDefault()
      let inputShorten = document.getElementById('inputShorten')
      let error = document.getElementById('error')
      inputShorten.style.borderColor = 'red'
      error.style.display = 'initial'
    },
    false
  )

  inputShorten.addEventListener(
    'change',
    function () {
      let inputShorten = document.getElementById('inputShorten')
      let error = document.getElementById('error')
      inputShorten.style.borderColor = 'initial'
      error.style.display = 'none'
    },
    false
  )
}
