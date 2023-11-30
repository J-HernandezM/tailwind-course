import { flights } from "./flights.js"
import { faqs } from "./faq.js"

const recommendContainer = document.querySelector('.recommended')
const faqContainer = document.querySelector('.faq')
const icons = [...document.querySelectorAll('.icons')]

let scrollBox = document.createElement('div')
let faqBox = document.createElement('div')
scrollBox.classList.add('scroll')

const toggleActive = (e) => {
    const item = e.target
    const filtered = icons.filter(icon=>icon!==item)
    filtered.forEach(icon=>icon.classList.remove('active'))

    if (item.classList.contains('active')) {
        item.classList.remove('active')
    } else {
        item.classList.add('active')
    }
}

flights.forEach( flight => {
    const structure = `
        <div class="shrink-0 w-40 h-48 rounded-lg text-white md:w-72 md:h-80 bg-secondary transform transition-all hover:-translate-y-4 hover:shadow-xl">
            <img class="w-full rounded-t-lg h-3/5" src="${flight.image}" alt="${flight.title} flight"></img>
            <div class="h-2/5 pl-2.5 pt-3 md:pl-[18px] md:pt-5">
                <h3 class="font-bold text-sm md:mb-2 md:text-2xl">${flight.title}</h3>
                <p class="text-xxs font-medium md:text-base">${flight.description}</p>
            </div>
        </div>
    `
    scrollBox.innerHTML += structure
})

faqs.forEach( faq => {
    const structure = `
        <div id=${faq.id} class="mb-3 md:mb-12">
            <h4 class="text-base md:text- text-primary md:text-3xl font-semibold mb-1 md:mb-7">${faq.question}</h4>
            <p class="font-medium text-xs md:text-xl text-black md:max-w-[70%]">${faq.answer}</p>
        </div>
    `
    faqBox.innerHTML += structure
})

icons.forEach( icon => {
    icon.addEventListener('click', toggleActive)
})

recommendContainer.append(scrollBox)
faqContainer.append(faqBox)

