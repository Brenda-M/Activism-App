function createPetition() {
  // Get input values
  const category = $("#category").val();
  const title = $("#title").val();
  const image = $("#image").val();
  const contact = $("#contact").val();
  const description = $("#description").val();

  // Get the existing petitions array from localstorage
  const petitions = localStorage.getItem('petitions');

  // Create an object with the petition details
  const petitionToCreate = {
    category: category,
    title: title,
    image: image,
    contact: contact,
    description: description
  };

  // Check if the array exists
  if (!petitions) {
    // Create our array of petitions and add the newly created petition
    const petitionArray = [];
    petitionArray.push(petitionToCreate);

    localStorage.setItem('petitions', JSON.stringify(petitionArray));
  } else {
    const petitionArray = JSON.parse(petitions);
    petitionArray.push(petitionToCreate);

    localStorage.setItem('petitions', JSON.stringify(petitionArray));
  }

  alert('Petition created successfully');

  // Redirect to the login page
  return window.location.href = 'petitions.html';
}
