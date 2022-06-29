const lightsBtn = document.querySelector('#darkMode')
const loginBody = document.querySelector('#login-body')
const h1 = document.querySelector('h1')
const label = document.querySelector('label')
const r = document.querySelector(':root')

lightsBtn.addEventListener('click', ()=> { 
    loginBody.classList.toggle('on')

   if(loginBody.classList.contains('on')){
    h1.style.color = 'white'
    label.style.color = 'white'
    r.style.setProperty('--light', 'grey');
    r.style.setProperty('--of', '#ffbb00');
   } else { 
    h1.style.color = 'black'
    label.style.color = 'black'
    r.style.setProperty('--light', '#ffbb00');
    r.style.setProperty('--of', 'grey');
   }
})