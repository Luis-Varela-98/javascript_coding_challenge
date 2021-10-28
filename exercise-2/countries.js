const countryData = [
    {
        country:"US",
        languages: ["en"]
    },
    {
        country:"BE",
        languages: ["nl","fr","de"]
    },
    {
        country:"NL",
        languages: ["nl","fy"]
    },
    {
        country:"DE",
        languages: ["de"]
    },
    {
        country:"ES",
        languages: ["es"]
    }
];

/**
 * numberOfCountries to get the amount of countries that the array contains.
 * 
 * @returns number of countries that the array contains
 */
const numberOfCountries = () => {
    return countryData.length;
}

/**
 * numberOfLanguagesInCountry to get the amount  of official languages.
 * in a certain country
 * 
 * @param {country} country 
 * @returns number of official languages in a certain country
 */
const numberOfLanguagesInCountry = (country) => {
    //check if country is not null or undefined
    if(country.languages)
        return country.languages.length;
    return 0;
}

/**
 * findCountryWithMostLanguagesConstraint to get the country with the most languages
 * that has the language sent as a parameter.
 * 
 * @param {string} language 
 * @returns the country containg the most number of official languages  with a certain language
 */
const findCountryWithMostLanguagesConstraint = (language) => {
    let country = {};
    for(let i = 0; i < numberOfCountries(); i++) {
        if((numberOfLanguagesInCountry(countryData[i]) > numberOfLanguagesInCountry(country)) && countryData[i].languages.includes(language)) {
            country = countryData[i];
        }
    }
    return country;
}

/**
 * officialLanguages to get all the official languages in the countries array.
 * 
 * @returns the languages with number of times they are used
 */
const officialLanguages = () => {
    let languages = [];
    for(let i = 0; i < numberOfCountries(); i++) {
        for(let j = 0; j < numberOfLanguagesInCountry(countryData[i]); j++) {
            const filtered = languages.findIndex((language => language.name === countryData[i].languages[j]));
            if(filtered == -1) {
                languages.push({name: countryData[i].languages[j], count: 1});
            }else {
                languages[filtered].count++;
            }
        }
    }
    return languages;
}

/**
 * countOfficialLanguages gets the number of languages that the array of countries contains.
 * 
 * @returns the number of languages that the countries array contains
 */
const countOfficialLanguages = () => {
    return officialLanguages().length;
}

/**
 * findCountryWithMostLanguages gets the country with highest amount of official languages.
 * 
 * @returns the country with most official languages in the array
 */
const findCountryWithMostLanguages = () => {
    let country = countryData[0];
    for(let i = 0; i < numberOfCountries(); i++) {
        if(numberOfLanguagesInCountry(countryData[i]) > numberOfLanguagesInCountry(country)) {
            country = countryData[i];
        }
    }
    return country;
}

/**
 * findMostCommonLanguages gets the most used languages.
 * 
 * @returns the most used language(s)
 */
const findMostCommonLanguages = () => {
    let languages = officialLanguages();
    let maxCount = 0;
    for(let i = 0; i < languages.length; i++) {
        if(languages[i].count > maxCount){
            maxCount = languages[i].count;
        }
    }
    return languages.filter((language => language.count == maxCount));
}

/**
 * getData calculates all the data and aglomerates the data into a single object
 * 
 * @returns all the data that has been processed in a single object
 */
const getData = () => {
    const countriesData = {
        numberOfCountries: numberOfCountries(),
        countryWithMostLanguagesDE: findCountryWithMostLanguagesConstraint('de'),
        numberOfOfficialLanguages: countOfficialLanguages(),
        countryWithMostLanguages: findCountryWithMostLanguages(),
        mostCommonLanguages: findMostCommonLanguages()
    }

    return countriesData;
}

/**
 * Appends the data into HTML
 */
const appendData = () => {
    const data = getData();
    document.getElementById('country').innerHTML = JSON.stringify(data);
}

//run the function
appendData();