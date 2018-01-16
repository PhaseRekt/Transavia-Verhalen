var div = document.querySelector('header div')
var save = document.querySelector('article button')

save.addEventListener('click', reaction)

function reaction() {
    div.classList.add('dot')
}
