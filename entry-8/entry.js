document.addEventListener("DOMContentLoaded", function () {
    // Define an array of colors
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"];
  
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Set the body background color to the random color
    document.body.style.backgroundColor = randomColor;
  });



// Get all the <li> elements
const liElements = document.querySelectorAll("li");

// Iterate over each <li> element
liElements.forEach(function (li) {
  // Generate random RGB values
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  // Set the background color of the <li> element to the random RGB value
  li.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
});