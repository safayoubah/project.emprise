
document.addEventListener("DOMContentLoaded", function() {
    const destinations = document.querySelectorAll(".vietnam, .old, .greece, .london, .amsterdam, .paris");

    destinations.forEach(destination => {
        destination.addEventListener("click", function() {
            destination.classList.add("move");
            setTimeout(() => {
                destination.classList.remove("move");
            }, 500); // Duration of the animation
        });
    });
});
