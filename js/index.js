const nav = document.querySelector(".nav-bar")
const btnToggle = document.querySelector(".toggle")

// btnToggle.addEventListener("click", () =>{
//     const visibleNav = nav.getAttribute("data-visible")
//     console.log(visibleNav)
//     if(visibleNav === "false"){
//         nav.setAttribute("data-visible", true)
//     }
//     else if(visibleNav === "true"){
//         nav.setAttribute("data-visible", false)
//     }
// })

btnToggle.addEventListener("click", () =>{
    nav.classList.toggle('nav-active')

    // btnToggle.classList.toggle('cross')

})
