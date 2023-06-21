function showalert() {
       alert('Hola, esta es una alerta desde Java Script')
}

document.querySelector("button.button-menu-toggle") .addEventListener("click", function() {
       document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
})