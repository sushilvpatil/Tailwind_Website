const humburgr = document.querySelector("#humburgur"); // Hamburger icon
const menu = document.querySelector("#menu"); // The menu
const fasolid = document.querySelector(".fa-solid"); // Font Awesome icon
const menuitems=document.querySelector("#menu-items");
// Add event listener to the hamburger icon
humburgr.addEventListener('click', () => {
    menu.classList.toggle('hidden'); // Toggle the visibility of the menu
    fasolid.classList.toggle('fa-bars'); // Toggle the hamburger icon
    fasolid.classList.toggle('fa-xmark'); // Toggle the cross icon
});
menuitems.array.forEach(element => {
    element.addEventListener("click",()=>{
        fasolid.classList.toggle('fa-bars')// Toggle the hamburger icon
        fasolid.classList.toggle('fa-xmark') // Toggle the cross icon  
    })
});
