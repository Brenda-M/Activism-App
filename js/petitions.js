// Render mock petitions
$(document).ready(function () {
    const container = $("#petitions-container");

    for (let i = 0; i < mockPetitions.length; i++) {
        container.append(`
        <div class="card petition-card">
          <img src="${mockPetitions[i].image}" class="card-img-top" alt="${mockPetitions[i].title}">

          <div class="card-body">
            <h5 class="card-title">${mockPetitions[i].title}</h5>
            <p class="card-text">${mockPetitions[i].summary}</p>
            <a href="./petition-details.html?petition=${mockPetitions[i].title}" class="btn btn-primary">Learn More</a>
          </div>
        </div>
    `);
    }

    // Check if there are any petitions in local storage and append them as well
    const petitions = localStorage.getItem('petitions');

    if (petitions) {
        const petitionArray = JSON.parse(petitions);

        for (let i = 0; i < petitionArray.length; i++) {
            container.append(`
        <div class="card petition-card">
          <img src="${petitionArray[i].image}" class="card-img-top" alt="${petitionArray[i].title}">

          <div class="card-body">
            <h5 class="card-title">${petitionArray[i].title}</h5>
            <p class="card-text">${petitionArray[i].description}</p>
            <a href="./petition-details.html?petition=${petitionArray[i].title}" class="btn btn-primary">Learn More</a>
          </div>
        </div>
    `);
        }
    }
});
