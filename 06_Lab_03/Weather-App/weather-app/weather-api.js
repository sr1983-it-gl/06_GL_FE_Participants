

// Define a constant BASE_URL

// Define a constant API_ID

// Define a constant for UNITS


class WeatherAPI {

  constructURL(userInput){

    this.apiURL = new URL(/*BASE_URL */);
    
    this.apiURL.searchParams.append("q", userInput);

    // appid
    // units

    console.log(this.apiURL.toString());

  }


  invokeURL(){

  }

}

export {WeatherAPI}