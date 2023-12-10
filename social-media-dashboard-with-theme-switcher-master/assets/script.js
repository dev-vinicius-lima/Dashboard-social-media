const button = document.querySelector('.circle-container')
const circle = document.querySelector('.circle')
const body = document.querySelector('.body')
const header = document.querySelector('.header')
const texth1 = document.querySelector('.h1')
const cardMedia = document.querySelector('.social-media')
const card = document.querySelector('.card')
const overviewTop = document.querySelector('.overview-top')
const overviewDown = document.querySelector('.overview-down')
const title2 = document.querySelector('.title-2')
let position = true

button.addEventListener('click', () => {
    if(position) {
        circle.style.transform = 'translateX(12px)'
        header.style.backgroundColor = "#F5F7FF"
        texth1.style.color = "hsl(232, 19%, 15%)"
        cardMedia.style.backgroundColor = '#F5F7FF'
        body.style.backgroundColor = "#F5F7FF"
        overviewTop.style.backgroundColor = "#F5F7FF"
        overviewDown.style.backgroundColor = "#F5F7FF"
        title2.style.color = "hsl(232, 19%, 15%)"
    } else {
        circle.style.transform = 'translateX(-12px)'
        header.style.backgroundColor = "hsl(232, 19%, 15%)"
        texth1.style.color = "white"
        cardMedia.style.backgroundColor = 'hsl(232, 19%, 15%)'
        body.style.backgroundColor = "hsl(232, 19%, 15%)"
        overviewTop.style.backgroundColor = "hsl(232, 19%, 15%)"
        overviewDown.style.backgroundColor = "hsl(232, 19%, 15%)"
        title2.style.color = "#F5F7FF"
    }
    position = !position
})