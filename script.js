let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-input')
let result = document.getElementById('result');
searchBtn.addEventListener('click', ()=>{
    let inputValue = countryInp.value;
    let finalUrl = `https://restcountries.com/v2/name/${inputValue}?fullText=true`;
    console.log(finalUrl);
    fetch(finalUrl)
    .then((res) => res.json())
    .then((data)=>{
        result.innerHTML = `
        <img src="${data[0].flag}" class="flag-img">
        <h2>${data[0].name}</h2>
        <div class="content">
            <h4>Capital: </h4>
            <span>${data[0].capital}</span>
        </div>
        <div class="content">
            <h4>Continent: </h4>
            <span>${data[0].region}</span>
        </div>
        <div class="content">
            <h4>Population: </h4>
            <span>${data[0].population}</span>
        </div>
        <div class="content">
            <h4>Currency: </h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${data[0].currencies[Object.keys(data[0].currencies)].code}</span>
        </div>
        <div class="content">
            <h4>Common Languages: </h4>
            <span>${data[0].languages.map((lang)=>{
                return(lang.name)
            }).map((item)=>item)}</span>
        </div>
        `;
    })
})