const guest = document.getElementById("guest");
const home = document.getElementById("home");

const homeOne = document.getElementById("homeOne");
const homeTwo = document.getElementById("homeTwo");
const homeThree = document.getElementById("homeThree");

const guestOne = document.getElementById("guestOne");
const guestTwo = document.getElementById("guestTwo");
const guestThree = document.getElementById("guestThree");


homeOne.addEventListener("click", e =>{
    home.textContent = parseInt(home.textContent) + 1;
});
homeTwo.addEventListener("click", e =>{
    home.textContent = parseInt(home.textContent) + 2;
});
homeThree.addEventListener("click", e =>{
    home.textContent = parseInt(home.textContent) + 3;
});

guestOne.addEventListener("click", e =>{
    guest.textContent = parseInt(guest.textContent) + 1;
});
guestTwo.addEventListener("click", e =>{
    guest.textContent = parseInt(guest.textContent) + 2;
});
guestThree.addEventListener("click", e =>{
    guest.textContent = parseInt(guest.textContent) + 3;
});


