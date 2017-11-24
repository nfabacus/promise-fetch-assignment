
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');
var output2 = document.querySelector('#output2');

button.addEventListener('click', function() {
  console.log("Clicked!")
  // Create a new Promise here and use setTimeout inside the function you pass to the constructor
  // var promise = new Promise((resolve, reject)=>{
  //   setTimeout(()=>{
  //     resolve('https://swapi.co/api/people/1')
  //   }, 3000)
  // })

  // promise
  //   .then((url)=>{
  //     fetch(url)
  //     .then((response)=>response.json())
  //     .then((data)=>{
  //       output.innerHTML=data.name
  //     })
  //   })
  //   .catch((err)=>{
  //     output.innerHTML=err
  //   })

  var promise2 = new Promise(function(resolve, reject){
    setTimeout(function(url){
      resolve('https://httpbin.org/put')
    })
  })

  promise2.then(function(url){
    fetch(url,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({person: {name: "Noby", age: "anonymous"}})
    })
      .then(function(response){return response.json()})
      .then(function(data){
        console.log(data)
        var resultStr = "Name: "+data.json.person.name+" Age: "+data.json.person.age
        output2.innerHTML=resultStr
      })
      .catch(function(err){
        
        output.innerHTML=err
      })
  })

  // Handle the Promise "response" (=> the value you resolved) and return a fetch()
  // call to the value (= URL) you resolved (use a GET request)

  // Handle the response of the fetch() call and extract the JSON data, return that
  // and handle it in yet another then() block

  // Finally, output the "name" property of the data you got back (e.g. data.name) inside
  // the "output" element (see variables at top of the file)

  // Repeat the exercise with a PUT request you send to https://httpbin.org/put
  // Make sure to set the appropriate headers (as shown in the lecture)
  // Send any data of your choice, make sure to access it correctly when outputting it
  // Example: If you send {person: {name: 'Max', age: 28}}, you access data.json.person.name
  // to output the name (assuming your parsed JSON is stored in "data")

  // To finish the assignment, add an error to URL and add handle the error both as
  // a second argument to then() as well as via the alternative taught in the module
});