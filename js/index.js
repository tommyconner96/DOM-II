//navigation
let nav = document.querySelector('.nav')

nav.addEventListener('mouseover', () => {
  nav.style.backgroundColor= 'lightblue'
})

nav.addEventListener('mouseleave', () => {
    nav.style.backgroundColor= 'white'
  })

let navEach = document.querySelectorAll('a')

navEach.forEach((variable) => {
    variable.addEventListener('mouseover', () => {
        variable.style.transform= 'scale(1.25)'
        variable.style.transition= 'all 0.5s'
    variable.addEventListener('mouseleave', () => {
        variable.style.transform= 'scale(1)'
        variable.style.transition= 'all 0.5s'
    })
    variable.addEventListener('click', (event) => {
        event.preventDefault()
    })
    })
})

//logo
let logo = document.querySelector('.logo-heading')

logo.addEventListener('mouseover', () => {
    logo.style.transform= 'scale(1.5)'
    logo.style.transition= 'all 0.5s'
  })

  logo.addEventListener('mouseleave', () => {
    logo.style.transform= 'scale(1)'
    logo.style.transition= 'all 0.5s'
  })
//buttons
let button = document.querySelectorAll('.btn')

button.forEach((variable) => {
    variable.addEventListener('mouseover', () => {
    variable.style.backgroundColor= '#FFEBCD'
    variable.addEventListener('mouseleave', () => {
        variable.style.backgroundColor= '#17A2B8'
    })
    })
})
//sections
let sectionStyle = document.querySelectorAll('section')

sectionStyle.forEach((variable) => {
    variable.addEventListener('mouseover', () => {
    variable.style.backgroundColor= '#FFEBCD'
    variable.addEventListener('mouseleave', () => {
    variable.style.backgroundColor= 'white'
    })
    })    
})
//images
let imgStyle = document.querySelectorAll('img')

imgStyle.forEach((variable) => {
    variable.addEventListener('mouseover', () => {
    variable.style.transform= 'scale(1.05)'
    variable.style.transition= 'all 0.5s'
    variable.addEventListener('mouseleave', () => {
    variable.style.transform= 'scale(1)'
    variable.style.transition= 'all 0.5s'
    })
    })
})

let destinationStyle = document.querySelectorAll('.destination')

destinationStyle.forEach((variable) => {
    variable.addEventListener('mouseover', () => {
    variable.style.transform= 'scale(1.05)'
    variable.style.transition= 'all 0.5s'
    variable.addEventListener('mouseleave', () => {
    variable.style.transform= 'scale(1)'
    variable.style.transition= 'all 0.5s'
    })
    })
})

let body = document.querySelector('body')
body.addEventListener('click', (event) => {
  console.log('Clicked body')
})
let containerHome = document.querySelector('.home')
containerHome.addEventListener('click', (event) => {
  console.log('Clicked container home')
  event.stopPropagation()
})
let textContent = document.querySelector('.text-content')
textContent.addEventListener('click', (event) => {
  console.log('Clicked text-content')
  event.stopPropagation()
})