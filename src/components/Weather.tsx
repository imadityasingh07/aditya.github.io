import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Thermometer, Droplets, Wind, Eye, Sun, Cloud, CloudRain, Search } from 'lucide-react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  uvIndex: number;
  forecast: {
    day: string;
    high: number;
    low: number;
    condition: string;
  }[];
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchCity, setSearchCity] = useState('');
  const [currentCity, setCurrentCity] = useState('New Delhi');

  // Mock weather data (in a real app, this would come from an API)
  const mockWeatherData: { [key: string]: WeatherData } = {
    'new delhi': {
      location: 'New Delhi, India',
      temperature: 28,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      visibility: 8,
      uvIndex: 6,
      forecast: [
        { day: 'Today', high: 32, low: 22, condition: 'Sunny' },
        { day: 'Tomorrow', high: 30, low: 20, condition: 'Partly Cloudy' },
        { day: 'Wednesday', high: 28, low: 18, condition: 'Cloudy' },
        { day: 'Thursday', high: 26, low: 16, condition: 'Rainy' },
        { day: 'Friday', high: 29, low: 19, condition: 'Sunny' },
      ]
    },
    'mumbai': {
      location: 'Mumbai, India',
      temperature: 32,
      condition: 'Humid',
      humidity: 78,
      windSpeed: 8,
      visibility: 6,
      uvIndex: 8,
      forecast: [
        { day: 'Today', high: 34, low: 26, condition: 'Humid' },
        { day: 'Tomorrow', high: 33, low: 25, condition: 'Partly Cloudy' },
        { day: 'Wednesday', high: 31, low: 24, condition: 'Rainy' },
        { day: 'Thursday', high: 29, low: 23, condition: 'Rainy' },
        { day: 'Friday', high: 32, low: 25, condition: 'Sunny' },
      ]
    },
    'bangalore': {
      location: 'Bangalore, India',
      temperature: 24,
      condition: 'Pleasant',
      humidity: 55,
      windSpeed: 15,
      visibility: 10,
      uvIndex: 5,
      forecast: [
        { day: 'Today', high: 26, low: 18, condition: 'Pleasant' },
        { day: 'Tomorrow', high: 25, low: 17, condition: 'Cloudy' },
        { day: 'Wednesday', high: 23, low: 16, condition: 'Rainy' },
        { day: 'Thursday', high: 22, low: 15, condition: 'Rainy' },
        { day: 'Friday', high: 25, low: 17, condition: 'Sunny' },
      ]
    }
  };

  useEffect(() => {
    fetchWeatherData(currentCity);
  }, [currentCity]);

  const fetchWeatherData = async (city: string) => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const data = mockWeatherData[city.toLowerCase()] || mockWeatherData['new delhi'];
      setWeatherData(data);
      setLoading(false);
    }, 1000);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchCity.trim()) {
      setCurrentCity(searchCity);
      setSearchCity('');
    }
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
      case 'partly cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return 'from-yellow-400 to-orange-500';
      case 'cloudy':
      case 'partly cloudy':
        return 'from-gray-400 to-gray-600';
      case 'rainy':
        return 'from-blue-400 to-blue-600';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-white hover:text-blue-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </button>
          <h1 className="text-2xl font-bold text-white">Weather App</h1>
          <div className="w-20"></div>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder="Search for a city..."
              className="w-full px-4 py-3 pl-12 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-white/70" />
            <button
              type="submit"
              className="absolute right-2 top-2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>
        </form>

        {loading ? (
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Loading weather data...</p>
          </div>
        ) : weatherData ? (
          <div className="max-w-4xl mx-auto">
            {/* Current Weather */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{weatherData.location}</span>
                  </div>
                  <div className="text-6xl font-light mb-2">{weatherData.temperature}°</div>
                  <div className="text-xl opacity-90">{weatherData.condition}</div>
                </div>
                <div className="text-right">
                  {getWeatherIcon(weatherData.condition)}
                </div>
              </div>

              {/* Weather Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Droplets className="w-6 h-6 mx-auto mb-2 text-blue-300" />
                  <div className="text-sm opacity-75">Humidity</div>
                  <div className="text-xl font-semibold">{weatherData.humidity}%</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Wind className="w-6 h-6 mx-auto mb-2 text-gray-300" />
                  <div className="text-sm opacity-75">Wind Speed</div>
                  <div className="text-xl font-semibold">{weatherData.windSpeed} km/h</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Eye className="w-6 h-6 mx-auto mb-2 text-green-300" />
                  <div className="text-sm opacity-75">Visibility</div>
                  <div className="text-xl font-semibold">{weatherData.visibility} km</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Sun className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                  <div className="text-sm opacity-75">UV Index</div>
                  <div className="text-xl font-semibold">{weatherData.uvIndex}</div>
                </div>
              </div>
            </div>

            {/* 5-Day Forecast */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">5-Day Forecast</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-4 text-center text-white">
                    <div className="font-semibold mb-2">{day.day}</div>
                    <div className="mb-3">
                      {getWeatherIcon(day.condition)}
                    </div>
                    <div className="text-sm opacity-75 mb-1">{day.condition}</div>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">{day.high}°</span>
                      <span className="opacity-75">{day.low}°</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Cities */}
            <div className="mt-8 text-center">
              <h4 className="text-white text-lg mb-4">Popular Cities</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['New Delhi', 'Mumbai', 'Bangalore'].map((city) => (
                  <button
                    key={city}
                    onClick={() => setCurrentCity(city)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      currentCity.toLowerCase() === city.toLowerCase()
                        ? 'bg-white text-blue-600'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Weather;