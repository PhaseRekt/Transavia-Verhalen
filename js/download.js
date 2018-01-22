var img = document.querySelector('article div')

img.addEventListener('click', download)

function download() {
    img.classList.add('download')
}
