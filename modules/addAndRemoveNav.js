export default function addAndRemoveNav(){
  const nav = document.getElementById('nav')
  const menuToggle = document.querySelector('.menu-toggle')
  
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active')
    if(nav.classList.value == 'active'){
      document.body.style.overflow = 'hidden'
    } else{
      document.body.style.overflow = 'initial'
    }
  })
}