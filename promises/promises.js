// PROMISES

// The point of promises is to handle ASYNC things
// Promises can be in three states
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// The built in function fetch returns a promise.
// let promise = fetch(url)

// Using .then().catch() to handle the promise
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

//Using async await to handle the promise
async function getDataAsyncAwait() {
  try {
    const response = await fetch('https://catfact.ninja/fact')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getDataThenCatch()
getDataAsyncAwait()
