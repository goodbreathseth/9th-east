document.getElementById("changeColor").addEventListener("click", function(event) {
    event.preventDefault()

    let navbar = document.getElementById("navbar");

    if ( navbar.classList.contains('bg-dark') ) {
        navbar.classList.remove('bg-dark')
        navbar.classList.add('bg-success')
    }
    else {
        navbar.classList.remove('bg-success')
        navbar.classList.add('bg-dark')
    }
})