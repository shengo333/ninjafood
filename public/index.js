const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')

burger.addEventListener('click', () =>  {
    console.log('you clicked')
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    }else {
        menu.classList.add('hidden')
    }
})