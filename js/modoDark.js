const darkMode = document.querySelector('#chk')

darkMode.addEventListener('click', () => {
    console.log(1)
    const imgIcon = document.querySelector('#modoDark')

    imgIcon.classList.toggle('fa-moon')
    imgIcon.classList.toggle('fa-sun')

})