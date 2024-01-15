import axios from 'axios';

export class ApiClient {
  // Your other methods for API interaction can be defined here...

  // Export the DayComponent directly
  static DayComponent = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const response = await axios.get(
            `url`
          );
          setWeatherData(response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };

      fetchWeatherData();
    }, []);

    if (!weatherData) {
      return <div>Loading...</div>;
    }

    // Display your weather data in the component
    return (
      <div>
        <h2>{weatherData.name}</h2>
        {/* Display other weather information as needed */}
      </div>
    );
  };
}
export default ApiClient;

/* import axios from "axios";

export class ApiClient {

responseStatusCheck(responseObject) {
if (responseObject.status >= 200 && responseObject.status < 300) {
    return Promise.resolve(responseObject)
} else {
    return Promise.reject(new Error(responseObject.statusText))
}
}

    getRequest(url) {
        return axios.get(url).then(this.responseStatusCheck).catch((err) => {
            console.error(err);
        })
    }

    //this gets a random quote

    getQuote() {
        return this.getRequest("https://quotable.io/random")
    }

    getAuthors(skip = 0 , limit) {
        return this.getRequest(`https://quotable.io/authors?skip=${skip}0&limit=${limit}`)
    }

    getQuoteByAuthor(authorId) {
        return this.getRequest(`https://quotable.io/quotes?authorId=${authorId}`)
    }
} */

// import axios from 'axios';
//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}



