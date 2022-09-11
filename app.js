// Make a GET request to the fruityvice api to retrieve some fruit data
const apiRequest = async () => {
  const BASE_URL = 'https://www.fruityvice.com/api/'

  // This endpoint (https://www.fruityvice.com/doc/index.html#api-GET-getAll) returns a list of all the fruits and their info, feel free to play around with different endpoints!
  const resourcePath = 'fruit/all'

  // Making a fetch request to an API endpoint
  // Note: a fetch request is an asynchronous operation, and `await` tells the program to wait until the request has been completed before continuing
  const endpoint = BASE_URL + resourcePath;
  const response = await fetch(buildProxyEndpoint(endpoint), {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // console.log(response);

  // Return the response in JSON format
  return response.json();
}

const updatePage = async () => {
  const gallery = document.getElementById('cs1300-gallery');

  // Make API request and get an array of fruit objects
  const fruitsArray = await apiRequest();
  console.log(fruitsArray);

  // TODO: Use either `map` and/or `filter` to extract some data from the array of fruit objects
  // For example, find "name of all fruits whose sugar > 15",
  var fruits=fruitsArray.filter(fruit=>{
    
    console.log(fruit.name)
    if (fruit.name.length>6){
      // console.log(fruit.name)
      return true;
    }
  })

  // TODO: Create a new HTML element to display your data
  
  // TODO: Append your new element to the page
  fruits.forEach(function(item, index, array) {
    console.log(item.name)
    exampleAddElement(item.name)
  })
  

}

// SAMPLE CODE of how to create and append a new HTML element to the page
const exampleAddElement = (fruit) => {
  // Create a new HTML element and set its properties
  const newElement = document.createElement('div');
  newElement.innerHTML = fruit;

  // Append the new element to an existing part of the webpage
  const existingElement = document.getElementById('cs1300-gallery');
  existingElement.append(newElement);
}

/**
 * To access information in this API, we need to send our requests through a proxy due to CORS restrictions.
 * This will be used as our proxy to avoid CORS issues.
 */
// do not touch - stencil code to add the proxy to avoid CORS
const PROXY_URL = 'https://cs1300-cors-anywhere.herokuapp.com/'
const buildProxyEndpoint = (endpoint) => `${PROXY_URL}${endpoint}`;
