$(document).ready(function () {
    // Get movement name from url
    const urlParams = new URLSearchParams(window.location.search);
    const movementTitle = urlParams.get("movement");

    // Get the object that matches the movement title from the movement array
    const movement = Movements.find(function (m) {
        return m.title === movementTitle;
    });

    // Render the movement specific data on the html page
    $("#movement-title").html(movement.title);
    $("#movement-description").html(movement.detailedDescription);
    $("#movement-image").html(`
    <img src="${movement.image}" alt="${movement.title}" class="movement-img"/>
  `);
});