const imgDog = document.querySelector('#img-dog')
const btnDog = document.querySelector('#btn-dog')
const breedSelect = document.querySelector('#breed')
const breedsURL = 'https://dog.ceo/api/breeds/list/all'

window.addEventListener('load', getBreeds)
btnDog.addEventListener('click', getDogImage)
breedSelect.addEventListener('change', getDogImage)

async function getBreeds() {
  try {
    const response = await fetch(breedsURL)
    const data = await response.json()
    Object.keys(data.message).forEach(function (key) {
      let option = document.createElement('option')
      option.value = key
      option.innerHTML = key
      breedSelect.appendChild(option)
    })
  } catch (error) {
    imgDog.innerHTML = '<p>Az API nem érhető el!<br>' + error + '</p>'
  }
}

async function getDogImage() {
  try {
    const API_URL = `https://dog.ceo/api/breed/${breedSelect.value}/images/random`
    const response = await fetch(API_URL)
    const data = await response.json()
    imgDog.innerHTML = `<img src="${data.message}">`
    console.log(breedSelect.value)
  } catch (error) {
    imgDog.innerHTML = '<p>Az API nem érhető el!<br>' + error + '</p>'
  }
}

//2. megoldás:
// function getBreeds() {
//   fetch(breedsURL)
//     .then((response) => response.json())
//     .then((data) => {
//       Object.keys(data.message).forEach(function (key) {
//         let option = document.createElement('option')
//         option.value = key
//         option.innerHTML = key
//         breedSelect.appendChild(option)
//       })
//     })
//     .catch(
//       (error) =>
//         (imgDog.innerHTML = '<p>Az API nem elérhető<br>' + error + '</p>')
//     )
// }

// function getDogImage() {
//   fetch(`https://dog.ceo/api/breed/${breedSelect.value}/images/random`)
//     .then((response) => response.json())
//     .then((data) => {
//       imgDog.innerHTML = `<img src="${data.message}">`
//       console.log(breedSelect.value)
//     })
//     .catch(
//       (error) =>
//         (imgDog.innerHTML = '<p>Az API nem elérhető<br>' + error + '</p>')
//     )
// }
