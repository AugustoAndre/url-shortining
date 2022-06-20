function addAndRemoveNav(){
    nav = document.getElementById('nav')
    nav.classList.toggle('active')
    if(nav.classList.value == 'active'){
      document.body.style.overflow = 'hidden'
    } else{
      document.body.style.overflow = 'initial'
    }
}

