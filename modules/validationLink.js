export default function validationLink() {
  const inputShorten = document.getElementById('inputShorten')

  inputShorten.addEventListener(
    'invalid',
    function () {
      event.preventDefault()
      const inputShorten = document.getElementById('inputShorten')
      const error = document.getElementById('error')
      const divCards = document.getElementById('cards-link')

      inputShorten.style.borderColor = 'var(--atencion)'
      error.style.display = 'initial'
      divCards.classList.add('hide')
    },
    false
  )

  inputShorten.addEventListener(
    'change',
    function () {
      const inputShorten = document.getElementById('inputShorten')
      const error = document.getElementById('error')
      inputShorten.style.borderColor = 'initial'
      error.style.display = 'none'
    },
    false
  )
}
