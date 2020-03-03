

$(document).ready(function () {
  const recentsDiv = $("#recentStories");
  for (let i = 0; i < Movements.length; i++) {
    recentsDiv.append(`
        <div class="card" style="width: 18rem;">
          <img src="${Movements[i].image}" class="card-img-top" alt="${Movements[i].title}">
          <div class="card-body">
            <h5 class="card-title">${Movements[i].title}</h5>
            <p class="card-text">${Movements[i].description}</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
    `);
  }
});
