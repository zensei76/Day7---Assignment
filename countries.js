/*Solving problems using array functions on the rest countries' data.
Get all the countries from the Asia continent /region using the Filter function
Get all the countries with a population of less than 2 lakhs using Filter function
Print the following details name, capital, flag using forEach function
Print the total population of countries using reduce function
Print the country which uses US Dollars as currency.*/


var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload  = function(){
  const data = JSON.parse(request.response);
  
  //a. To get all the countries from the Asia continent /region using the Filter function
  console.log(data.filter ((countries) => countries.region =="Asia"));
  
  //b. To get all the countries with a population of less than 2 lakhs using Filter function
  console.log(data.filter ((countries) => countries.population < 200000));
  
  //c. To print the following details name, capital, flag using forEach function
  data.forEach ((countries)=> {
    console.log(countries.name);
    console.log(`Capital : ${countries.capital}`);
  console.log(`Flag : ${countries.flag}`+"\n"+"\n");
  });

  //d. To Print the total population of countries using reduce function
  const totalPopulation = data.reduce((total , countries) => total + countries.population,0);
  console.log(`Total population of countries is ${totalPopulation}`);

  //e. To Print the country which uses US Dollars as currency
  var usdCurrency = data.filter((countries) => countries["currencies"][0].code == "USD" ).map ((countries) => {return countries.name} );
  console.log(usdCurrency)
  
}

