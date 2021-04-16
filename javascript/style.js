var animation_bell = document.getElementById('bell-icon')
var animation_circle = document.getElementById('circle-icon')
var alert = document.getElementById('alert')

animation_bell.addEventListener("click", function() {
    alert.classList.remove("hidden");
    alert.classList.add("show");
    animation_circle.classList.add("hidden")
    animation_bell.classList.add('hidden')
});




