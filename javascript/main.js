const lightsBtn = document.querySelector('#darkMode')
const loginBody = document.querySelector('#login-body')
const h1 = document.querySelector('h1')
const label = document.querySelector('label')
const root = document.querySelector(':root')
const body = document.querySelector('body')

lightsBtn.addEventListener('click', ()=> { 
    loginBody.classList.toggle('on')

   if(loginBody.classList.contains('on')){
    h1.style.color = 'white'
    label.style.color = 'white'
    root.style.setProperty('--light', 'grey');
    root.style.setProperty('--of', '#ffbb00');
   } else { 
    h1.style.color = 'black'
    label.style.color = 'black'
    root.style.setProperty('--light', '#ffbb00');
    root.style.setProperty('--of', 'grey');
   }
})


closeBtn.addEventListener('click', ()=>  {
     modal.classList.add('of')
})

submit.addEventListener('click', () => { 
    modal.classList.remove('of')
})

const bgs = [
    '../images/valorant.jpg',
    '../images/lor.jpg',
    '../images/lol.jpg'
]

function change(){ 
   const rand =  Math.floor(Math.random() * 3 + 0)
   console.log(rand);
   background.style.backgroundImage = `url(${bgs[rand]})`
   background.style.backgroundSize = 'cover'
}

setInterval(change, 5000)