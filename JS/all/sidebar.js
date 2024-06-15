/* Start Slidbar  */
const body= document.querySelector("body"),
    sidebar   = document.querySelector(".sidebar"),
    toogle    = document.querySelector(".toogle"),
    serchBtn  = document.querySelector(".search-box"),
    modSwitch = document.querySelector(".toogle-switch"),
    modeText  = document.querySelector(".mode-text")


    toogle.addEventListener("click",() =>{
        sidebar.classList.toggle("close");
    })

    modSwitch.addEventListener("click",() =>{
        body.classList.toggle("dark");
    })
/*End Slidbar */
