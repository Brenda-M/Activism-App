$(document).ready(function () {
    // Get petition name from url
    const urlParams = new URLSearchParams(window.location.search);
    const petitionTitle = urlParams.get("petition");

    // Get the object that matches the petition title from the petition array
    const petition = mockPetitions.find(function (p) {
        return p.title === petitionTitle;
    });

    // Render the petition specific data on the html page
    $("#petition-title").html(petition.title);
    $("#petition-category").html(petition.category);
    $("#petition-contact").html(petition.contact);
    $("#petition-description").html(petition.description);
    $("#petition-image").html(`
    <img src="${petition.image}" alt="${petition.title}" class="petition-img"/>
  `);
});