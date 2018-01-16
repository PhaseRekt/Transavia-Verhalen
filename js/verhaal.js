var imgOne = document.querySelector('div img')
var imgTwo = document.querySelector('div img + img')

imgOne.addEventListener('click', thumbUp)

function thumbUp() {
    imgOne.classList.add('full')
    imgTwo.classList.remove('thumbdown')
}

imgTwo.addEventListener('click', thumbDown)

function thumbDown() {
    imgTwo.classList.add('full')
    imgOne.classList.remove('thumbup')
}
