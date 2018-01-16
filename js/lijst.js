var div = document.querySelector('header div')
var save = document.querySelector('article button')

save.addEventListener('click', reaction)

function reaction() {
    div.classList.add('dot')
}


var li1 = document.queryselector('section > ul > li')
var li2 = document.querySelector('section > ul > li + li')
var li3 = document.querySelector('section > ul > li + li + li')
var li2 = document.querySelector('section > ul > li + li + li + li')

li1.addEventListener('click', sort1)

function sort1() {
    li1.classList.add('sort')
    li2.classList.remove('sort')
    li3.classList.remove('sort')
    li4.classList.remove('sort')
}

li2.addEventListener('click', sort2)

function sort2() {
    li1.classList.remove('sort')
    li2.classList.add('sort')
    li3.classList.remove('sort')
    li4.classList.remove('sort')
}

li3.addEventListener('click', sort3)

function sort3() {
    li1.classList.remove('sort')
    li2.classList.remove('sort')
    li3.classList.add('sort')
    li4.classList.remove('sort')
}

li4.addEventListener('click', sort4)

function sort4() {
    li1.classList.remove('sort')
    li2.classList.remove('sort')
    li3.classList.remove('sort')
    li4.classList.add('sort')
}
