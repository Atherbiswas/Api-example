const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country)
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Country Name:${country.name.common}</h3> 
        <p>Capital :${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv)
    })
}
const loadCountryDetail = (code) =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country deatail',code)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country =>{
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h4>Country Name: ${country.name.common}</h4>
    <img src="${}"
    `
}
loadCountries();