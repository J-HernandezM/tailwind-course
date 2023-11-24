import { flights } from "./flights.js"

const recommendedBox = document.querySelector('.recommended')
let scrollBox = document.createElement('div')
scrollBox.classList.add('scroll')

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
console.log(scrollBox)
recommendedBox.append(scrollBox)

