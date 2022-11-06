// Async JavaScript

//Governs how we pperform tasks which take some time to complete
//e.g Getting data from a database
//Start something now and finish it later

//Synchronous Javascript
//Javascript can run ONE statement at a time
//It is a single threaded language

//HTTP Requests
//Make HTTP requests to get data from another server
//We make these requests to the API endpoints

// The point of promises is to handle async things
// Promises can be in three states
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// the built in function fetch returns a promise.
// let promise = fetch(url)

//.then()
//.then() takes in a function that runs if the promise is fufilled
//.catch() takes in a function that runs if the promise is rejected

function getDataThenCatch() {
  fetch('https://catfact.ninja/fact')
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

//Using async await
async function getData() {
  try {
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getDataThenCatch()
getData()
