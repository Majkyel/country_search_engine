'use strict';

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) {countryName = 'Poland';}

    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {

    if (!Array.isArray(resp)) {alert('WE NOT FOUND THIS COUNTRY');}
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liElement = document.createElement('li');
        liElement.innerHTML = '<h3>' + item.name + '</h3>' + '</br>' + 'Capital: ' + item.capital + '</br>' + 'Subregion: ' + item.subregion + '</br>' + 'Languages: ' + item.languages + '</br>' + 'Population: ' + item.population;
        countriesList.appendChild(liElement);
    });
}
