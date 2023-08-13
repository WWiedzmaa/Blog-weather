import axios from 'axios'

class ApiUtil {
    static baseUrl = "https://api.openweathermap.org/";
    static apiKey = "dc764d0c8677091b99369eb3445dad62";
    static async getCityCord(name) {
        try {
            const response = await axios.get(`${this.baseUrl}geo/1.0/direct`, {
                params: {
                    q: name,
                    appid: this.apiKey,
                }
            })
            return response.data;
        } catch (error) {
        }
    }
    static async getWeather(lat, lon) {
        try {
            const response = await axios.get(`${this.baseUrl}data/2.5/weather`, {
                params: {
                    lat: lat,
                    lon: lon,
                    appid: this.apiKey,
                    units: "metric",
                    lang: "pl",
                }
            })
            return response.data;
        } catch (error) {
        }
    }
    static async getPollution(lat, lon) {
        try {
            const response = await axios.get(`${this.baseUrl}data/2.5/air_pollution`, {
                params: {
                    lat: lat,
                    lon: lon,
                    appid: this.apiKey,
                }
            })
            return response.data;
        } catch (error) {
        }
    }
    static async get5DaysWeather(lat, lon) {
        try {
            const response = await axios.get(`${this.baseUrl}data/2.5/forecast`, {
                params: {
                    lat: lat,
                    lon: lon,
                    appid: this.apiKey,
                    units: "metric",
                    lang: "pl",
                }
            })
            return response.data;
        } catch (error) {
        }
    }
}

export default ApiUtil