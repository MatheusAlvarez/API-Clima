let lat
let lon

function verificar(){
    let nomeCidade = document.getElementById('cidade').value
    let nomeEstado = document.getElementById('estado').value
    let codigoPais = document.getElementById('codigo').value

    let informacoes = `http://api.openweathermap.org/geo/1.0/direct?q=${nomeCidade},${nomeEstado},${codigoPais}&limit=5&appid=5440d69ac72ed3e5f5b22064aac479fc`

    console.log(informacoes)

    fetch(informacoes)
    .then((Response) =>{
        Response.json()
        .then((ResponseJson) =>{
            console.log(ResponseJson)
            lon = ResponseJson[0]['lon']
            lat = ResponseJson[0]['lat']
        })
    })
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=5440d69ac72ed3e5f5b22064aac479fc`;
    fetchApi(url);
}


function fetchApi(url) {
    let city = document.querySelector('.city');
    let temp = document.querySelector('span');
    fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
      city.innerText = `Hoje a temperatura em ${data.name} é:`;
      temp.innerText = tempInCelsius;
    })
    .catch((err) => {
      city.innerText = `Não foi possível localizar, tente novamente`;
      temp.innerText = `-`;
    })
}
  
