// Question: Solving problems using array functions on rest countries data 
// (https://restcountries.com/v3.1/all).

// A) Get all the countries from Asia continent /region using Filter function

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    const countries = JSON.parse(xhr.responseText);

    const asiaCountries = countries.filter(country => {
        return country.region === 'Asia';
    });

    console.log(asiaCountries);
}


// B) Get all the countries with a population of less than 2 lakhs using Filter function

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    const countries = JSON.parse(xhr.responseText);

    const countriesWithLowPopulation = countries.filter(country => {
        const population = country.population;
        return population && population < 200000;
    });

    console.log(countriesWithLowPopulation);
}

// C) Print the following details name, capital, flag using forEach function

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    const countries = JSON.parse(xhr.responseText);

    countries.forEach(country => {
        const name = country.name.common;
        const capital = country.capital[0];
        const flag = country.flags.png;

        console.log(`Country: ${name}`);
        console.log(`Capital: ${capital}`);
        console.log(`Flag: ${flag}`);
        console.log('---------------------------------------');
    });
}

// D) Print the total population of countries using reduce function

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    const countries = JSON.parse(xhr.responseText);

    const totalPopulation = countries.reduce((acc, country) => {
        const population = country.population;
        return acc + (population ? population : 0);
    }, 0);

    console.log(`Total Population of All Countries: ${totalPopulation}`);

}

// E) Print the country which uses US Dollars as currency

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    const countries = JSON.parse(xhr.responseText);
    console.log(countries.filter((country) => Object.keys(country.currencies || {}).includes('USD')))
}

xhr.send();


