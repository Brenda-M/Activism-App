
const Movements = [
  {
    title: "Power to the period",
    description: "Collect and donate sanitary products for people experience poverty.",
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
    title: "No to hate",
    description: "Respond to tribal hate with action and love.",
    detailedDescription: "",
    image: "assets/recents4.jpeg"
  },
  {
    title: "Elephant Tusk Force",
    description: "Flag ivory items on the blackmarket to stop elephant poaching...",
    image: "assets/recents5.jpeg"
  },
  {
    title: "Ending the climate crisis",
    description: "We are in a climate crisis emergency and the oil, gas, and coal indutry is to blame..",
    image: "assets/recents6.jpeg"
  },
  {
    title: "Protecting the oceans",
    description: "Our oceans are in more trouble than ever before.",
    detailedDescription: "",
    image: "assets/recents7.jpeg"
  },
  {
    title: "Defending Democracy",
    description: "We believe that a healthy democracy is the precondition to a healthy environment...",
    image: "assets/recents8.jpeg"
  },
  {
    title: "Kick corporate money out of politics",
    description: "It may seem like corporations have had a firm grip on Kenyan politics for generations",
    image: "assets/recents9.jpeg"
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
