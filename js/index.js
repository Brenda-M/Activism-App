
const Movements = [
  {
    title: "Power to the period",
    description: "Collect and donate period products for people experience poverty.",
    detailedDescription: "",
    image:  "assets/recents1.jpg" 
  },
  {
    title: "My mental health",
    description: "On trauma and depression, resilience and strength...",
    image: "assets/recents2.jpeg"
  },
  {
    title: "Tackel Hunger",
    description: "Collect food items for your local food bank",
    image: "assets/recents3.jpeg"
  },
  {
    title: "No to ha",
    description: "Collect and donate period products for people experience poverty.",
    detailedDescription: "",
    image: "assets/recents1.jpg"
  },
  {
    title: "My mental health",
    description: "On trauma and depression, resilience and strength...",
    image: "assets/recents2.jpeg"
  },
  {
    title: "Tackel Hunger",
    description: "Collect food items for your local food bank",
    image: "assets/recents3.jpeg"
  },
  {
    title: "Power to the period",
    description: "Collect and donate period products for people experience poverty.",
    detailedDescription: "",
    image: "assets/recents1.jpg"
  },
  {
    title: "My mental health",
    description: "On trauma and depression, resilience and strength...",
    image: "assets/recents2.jpeg"
  },
  {
    title: "Tackel Hunger",
    description: "Collect food items for your local food bank",
    image: "assets/recents3.jpeg"
  },
];

$(document).ready(function () {
  const recentsDiv = $("#recentStories");
  for (let i = 0; i < Movements.length; i++) {
    recentsDiv.append(`
        <div class="card" style="width: 18rem;">
          <img src="${Movements[i].image}" class="card-img-top" alt="${Movements[i].title}">
          <div class="card-body">
            <h5 class="card-title">${Movements[i].title}</h5>
            <p class="card-text">${Movements[i].description}</p>
            <a href="#" class="btn btn-primary">See More</a>
          </div>
        </div>
    `);
  }
});
