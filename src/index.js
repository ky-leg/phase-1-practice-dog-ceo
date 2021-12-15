
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
.then((resp) => resp.json())
.then((json) => addToDOM(json))

fetch(breedUrl)
.then((resp) => resp.json())
.then((json) => addBreedToDOM(json))




function addToDOM(resp) {
    const array = resp.message  
    const imgDiv = document.getElementById('dog-image-container')
    array.forEach(array => {
        const img = document.createElement('img')
        img.src = array
        imgDiv.appendChild(img)
    })
    organizeBreedToDOM()
}

function addBreedToDOM(breed) {
    const breeds = Object.keys(breed.message)
    const ul = document.getElementById('dog-breeds')
    breeds.forEach(breeds => {
        const li = document.createElement('li')
        li.addEventListener('click', e => {
            e.target.style.color = "red"
        })
        li.append(breeds)
        ul.appendChild(li)
    })
}

function organizeBreedToDOM (){
const something = document.getElementById('breed-dropdown')
    something.addEventListener("change", (e) => {
        console.log(e)
        //   const option = e.target
    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((json) => filter(json))
    const ul = document.getElementById('dog-breeds')
    ul.innerText = ""
    function filter(breed){
        const breeds = Object.keys(breed.message)
        const breedArr = breeds.filter(breeds => {
            return breeds.startsWith(e.target.value)})
        breedArr.forEach(breedArr => {
            const li = document.createElement('li')
            li.addEventListener('click', e => {
                e.target.style.color = "red"
        })
        li.append(breedArr)
            ul.appendChild(li)
        })
    }})}
// const dogSelect = document.getElementById('breed-dropdown')
// dogSelect.addEventListener('change', e => {
//     console.log(e)
// })
// asdf
// .addEventListener("onchange", e => {
//     console.log(e)
// })
