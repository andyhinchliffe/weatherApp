
import axios from "axios";

export class ApiClient {

responseStatusCheck(responseObject) {
    if (responseObject.status >= 200 && responseObject.status < 300) {
      return Promise.resolve(responseObject);
    } else {
      return Promise.reject(new Error(responseObject.statusText));
    }
  }

  getRequest(url) {
    return axios
      .get(url)
      .then()

      .catch(() => {
        console.error(err);
      });
  }

  // this gets a weather details

  getWeather() {
    const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
    
    const weatherAPIURL = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${weatherAPIKey}&units=metric`;

    return this.getRequest(weatherAPIURL);
}
}
 
