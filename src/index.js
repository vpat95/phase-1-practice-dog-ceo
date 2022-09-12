console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(`${imgUrl}`)
        .then(response => response.json())
        .then(image => image.message.forEach((url) => {
            const newImg = document.createElement("img")
            newImg.src = url
            document.querySelector('#dog-image-container').appendChild(newImg)
        }))

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(`${breedUrl}`)
        .then(response => response.json())
        .then(breed => {
            Object.keys(breed.message).forEach(dog => {
                const newBreed = document.createElement('li')
                newBreed.innerText = `${dog}`
                document.querySelector('#dog-breeds').appendChild(newBreed)
            })
        })

    setTimeout(() => {
        changeBreedColor(),
            dropDown()
    }, 1000)

    function changeBreedColor() {
        const dogBreed = document.querySelectorAll('li')
        dogBreed.forEach(element => element.addEventListener('click', () => element.style.color = 'green'))
    }

    function dropDown() {
        const dogBreed = document.querySelectorAll('li')
        const drop = document.querySelector('#breed-dropdown')

        drop.addEventListener('change', () => {
            dogBreed.forEach((breed) => {
                breed.setAttribute('class', `${breed.innerText.charAt(0)}`)
                if (breed.className === drop.value) {
                    breed.style.display = ''
                }
                else {
                    breed.style.display = 'none'
                }
            })
        })
    }
})