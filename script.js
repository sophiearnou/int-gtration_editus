const dropdownAccueil = document.querySelector('.dropdown--accueil');
const dropdownChild = document.querySelector('.dropdown-child');
const dropdownLangue = document.querySelector('.dropdown--langue');
const dropdownLangueChild = document.querySelector('.dropdown__langue--child');
const toggleButton = document.getElementById('topbar__toggle');
const sideBar = document.getElementById('side-bar');

//ADD class show
dropdownAccueil.addEventListener('click', () => {
    if (window.screen.width <= 1600) {
        // load the script you need

        dropdownChild.classList.toggle("show")
        dropdownAccueil.classList.toggle("show")
    }
})


dropdownLangue.addEventListener('click', () => {
    dropdownLangueChild.classList.toggle("show")
    dropdownLangue.classList.toggle("show")
})

toggleButton.addEventListener('click', show);

function show() {
    sideBar.classList.toggle('active');
}

// REMOVE SIDEBAR
// const content = document.querySelector('.content');

// content.addEventListener('click', () => {
//     sideBar.classList.remove('active');
// });