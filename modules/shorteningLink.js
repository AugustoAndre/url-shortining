export default function shorteningLink(){

  const inputSubmit = document.getElementById('inputSubmit')
  const btnCopy = document.getElementById('btnCopy')

  inputSubmit.addEventListener('click', () =>{
    const btnCopy = document.getElementById('btnCopy')

    function resetProgressBar(){
      const progressBar = document.getElementById('progressBar')
      const linkShorted = document.getElementById('linkShorted')
        
        progressBar.style.display = 'initial'  
        linkShorted.innerHTML = '';
    }

    function showEncurtedLink(){
      const divCards = document.getElementById('cards-link')
      const mainLink = document.getElementById('mainLink')
      const inputShortenValue = document.getElementById('inputShorten').value
      mainLink.innerHTML = inputShortenValue  
      divCards.classList.remove('hide')
    }

    function apiEncurted(){
      const inputShortenValue = document.getElementById('inputShorten').value
      let headers = {
        "Content-Type": "application/json",
        "apiKey": "e23e16fcbec34dcd8a7d963c8b5b27ab"
       }
  
       let linkRequest = {
        destination: inputShortenValue,
        domain: { fullName: "rebrand.ly" }
      }

     fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
     }) .then(response => response.json())
        .then(json => {
          const linkShorted = document.getElementById('linkShorted')
          const progressBar = document.getElementById('progressBar')
          progressBar.style.display = 'none'
          linkShorted.innerHTML = json.shortUrl;
     })

    
    }

    function resetBtnCopy() {
      if(btnCopy.innerHTML == 'Copied'){
        const btnCopy = document.getElementById('btnCopy')
        btnCopy.style.backgroundColor = 'var(--second-color)'
        btnCopy.innerHTML = 'Copy'
       }
    }

    resetProgressBar()
    showEncurtedLink()
    apiEncurted()
    resetBtnCopy()
           
  })

  btnCopy.addEventListener('click', () => {
    const linkShorted = document.getElementById('linkShorted').innerHTML
    const btnCopy = document.getElementById('btnCopy')
    navigator.clipboard.writeText(linkShorted)
    btnCopy.style.backgroundColor = 'var(--primary-color)'
    btnCopy.innerHTML = 'Copied'
  })
  
}

