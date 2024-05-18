const $ = document
const wrapperElem = $.querySelector('.wrapper')
const selectBtn = $.querySelector('.select-btn')
const options = $.querySelector('.options')
const searchInputElem = $.querySelector('input')

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

function addCountries() {
    let li = null

    countries.forEach(country => {
        li = `<li onclick="updateName(this)">${country}</li>`
        options.insertAdjacentHTML('beforeend', li)
    })
}

function updateName (el) {

    wrapperElem.classList.remove('active') 

    for (let option of options.children) {
        if (option.innerText === el.innerText) {
            option.classList.add('selected')
        }else{
            option.classList.remove('selected')
        }
    }

    selectBtn.firstElementChild.innerText = el.innerText
}

searchInputElem.addEventListener('keyup', () => {
    let searchWord = searchInputElem.value.toLowerCase()
    let usersCountries = countries.filter(country => country.toLowerCase().startsWith(searchWord))
    .map(country => `<li onclick="updateName(this)">${country}</li>`)
    .join('')
    options.innerHTML = usersCountries ? usersCountries : `<p style="margin-top:10px">Oops! country not found :((</p>`
})

selectBtn.addEventListener('click', () => {wrapperElem.classList.toggle('active')})
window.addEventListener('load', addCountries)