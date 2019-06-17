// window.addEventListener('load', () => {
 
//   const api = `https://content.guardianapis.com/search?api-key=e78c9d0d-f723-499a-8c15-4c7625cd2ff6`

//   fetch(api)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       var articles = data.response.results;
//       for (var i = 0; i < articles[i]; i++) {
//         createElement('h1', articles[i].webTitle);
//         createElement('h1', articles[i].webUrl);
//       }  
//       console.log(articles)
  
//     })
// });


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://content.guardianapis.com/search?api-key=e78c9d0d-f723-499a-8c15-4c7625cd2ff6', true)

request.onload = function () {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
  data.forEach(news => {
    console.log(news.title)
  })
} else {
  console.log('error')
}
  }

// Send request
request.send()

const app = document.getElementById('"news-titles"')
