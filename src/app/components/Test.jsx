// // Add a click event listener to close the menu when clicking outside of it
// const closeMenuOnClickOutside = (event) => {
//     if (isMenuOpen && !event.target.closest(".navCont")) {
//         setIsMenuOpen(false);
//     }
// };


// // Attach the event listener when the component mounts
// document.addEventListener("click", closeMenuOnClickOutside);

// // Detach the event listener when the component unmounts
// return () => {
//     document.removeEventListener("click", closeMenuOnClickOutside);
// };