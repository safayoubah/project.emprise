
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


document.getElementById('search-button').addEventListener('click', function() {
    const destination = document.getElementById('destination-select').value;
    const activity = document.getElementById('activity-select').value;
    const date = document.getElementById('date-input').value;
  
    console.log('Destination:', destination);
    console.log('Activity:', activity);
    console.log('Date:', date);

    

    window.location.href = `results.html?destination=${destination}&activity=${activity}&date=${date}`
  });