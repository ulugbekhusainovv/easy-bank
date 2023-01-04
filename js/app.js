const headerTogglerBtn =document.querySelector('.header__toggle-btn')
const headerTogglerBtnImg =document.querySelector('.header__toggler-image')
console.log(headerTogglerBtnImg)
const hiddenNav = document.querySelector('.sitenav-hidden')
const overlay = document.querySelector('.overlay')

headerTogglerBtn.addEventListener('click', () => {
    hiddenNav.classList.toggle('show-nav')
    overlay.classList.toggle('show-nav')

    if (hiddenNav.classList.contains('show-nav')) {
        headerTogglerBtnImg.src = '../images/svg/toggle-close-btn.svg'
    } else {
        headerTogglerBtnImg.src = '../images/svg/toggler-open-btn.svg'
    }

    
})