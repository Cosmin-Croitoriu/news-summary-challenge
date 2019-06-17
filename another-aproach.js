var url = `https://content.guardianapis.com/search?api-key=e78c9d0d-f723-499a-8c15-4c7625cd2ff6`;

function setup() {
  noCanvad();
  loadJSON(url, gotData);
}

function gotData(data){
console.log(data);
}