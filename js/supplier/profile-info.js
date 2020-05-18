// $('#skipBtn').on('click', function (e) {
//     $('.nav-tabs > .active').next('li').find('a').trigger('click');
// });

// $('#skipBtnTwo').on('click', function (e) {
//     $('.nav-tabs > .active').next('li').find('a').trigger('click');
// });

// apply dynamic active to nav tablink

const iconOne = document.getElementById('iconOne');
const iconTwo = document.getElementById('iconTwo');
const iconThree = document.getElementById('iconThree');
const iconFour = document.getElementById('iconFour');
const userDetailsTab = document.getElementById('user-details-tab');
const taxTab = document.getElementById('tax-tab');
const servicesTab = document.getElementById('services-tab');
const usersTab = document.getElementById('users-tab');
const skipBtnOne = document.querySelector('#skipBtn');
const skipBtnTwo = document.querySelector('#skipBtnTwo');
const skipBtnThree = document.querySelector('#skipBtnThree');
const backBtnOne = document.querySelector('#backBtnOne');
const backBtnTwo = document.querySelector('#backBtnTwo');
const backBtnThree = document.querySelector('#backBtnThree');

skipBtnOne.addEventListener('click', (e) => {
    taxTab.click();
    iconOne.classList.remove('active');
    iconOne.classList.add('done');
    iconTwo.classList.add('active');
});
skipBtnTwo.addEventListener('click', (e) => {
    servicesTab.click();
    iconTwo.classList.remove('active');
    iconTwo.classList.add('done');
    iconThree.classList.add('active');
});
skipBtnThree.addEventListener('click', (e) => {
    usersTab.click();
    iconThree.classList.remove('active');
    iconThree.classList.add('done');
    iconFour.classList.add('active');
});

backBtnOne.addEventListener('click', (e) => {
    e.preventDefault();
    userDetailsTab.click();
    iconOne.classList.add('active');
    iconOne.classList.remove('done');
    iconTwo.classList.remove('active');
});
backBtnTwo.addEventListener('click', (e) => {
    e.preventDefault();
    taxTab.click();
    iconTwo.classList.add('active');
    iconTwo.classList.remove('done');
    iconThree.classList.remove('active');
});
backBtnThree.addEventListener('click', (e) => {
    e.preventDefault();
    servicesTab.click();
    iconThree.classList.add('active');
    iconThree.classList.remove('done');
    iconFour.classList.remove('active');
});








// drop div controls
const aluminiumInput = document.querySelector('#aluminium');
const aluminiumDropDiv = document.querySelector('.aluminium-drop-div');

function display() {

    if(aluminiumInput.checked == true) {
        aluminiumDropDiv.style.display = "block";
    }
    else {
        aluminiumDropDiv.style.display = "none"
    }
    
}
