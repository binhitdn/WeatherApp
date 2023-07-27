import {
  ImageBackground,
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchInput from '../components/SearchInput';
import getDataWeather from '../api/getDataWeather';
import convertWeatherToBackgroundImage from '../utils/convertWeatherToBackgroundImage';
import ExtraWeather from '../components/ExtraWeather';

const WeatherScreen = () => {
  const [locationInput, setLocationInput] = React.useState('');
  const [weather, setWeather] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchWeather('Sapporo');
  }, []);

  const fetchWeather = async location => {
    setLoading(true);
    try {
      const getWeather = await getDataWeather(location);
      console.log(getWeather);
      setWeather(getWeather);
    } catch (err) {
      Alert.alert('City Not Found');
    } finally {
      setLoading(false);
    }
  };

  const checkLocation = () => {
    if (locationInput === '') {
      Alert.alert('Please enter city name');
      return;
    }
    fetchWeather(locationInput);
  };

  const handleInputChange = text => {
    if (!/^[A-Za-z0-9\s]*$/.test(text)) {
      Alert.alert('エラー', '半角英数で入力してください');
      return;
    }
    setLocationInput(text);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={convertWeatherToBackgroundImage(weather.weather?.[0].main)}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.container}>
        <SearchInput
          placeholder="Enter city name"
          value={locationInput}
          onChangeText={handleInputChange}
          onSubmitEditing={checkLocation}
        />
        <View style={styles.weatherContainer}>
          <View style={styles.weather}>
            <Image
              source={{
                uri: `https://openweathermap.org/img/w/${weather.weather?.[0].icon}.png`,
              }}
              style={styles.weatherIcon}
            />
            <Text style={styles.weatherDescription}>
              {weather.weather?.[0].description}
            </Text>
          </View>
          <View style={styles.temperatureAndLocationContainer}>
            <View style={styles.temperatureContainer}>
              <View style={styles.temperatureInfo}>
                <Text style={styles.temperature}>
                  {weather.main?.temp.toFixed(0)}
                </Text>
                <Icon
                  name="temperature-celsius"
                  size={24}
                  color="#fff"
                  style={styles.temperatureIcon}
                />
              </View>
            </View>
            <View style={styles.locationContainer}>
              <View style={styles.locationInfo}>
                <Icon name="map-marker" size={24} color="#fff" />
                <Text style={styles.location}>{weather.name}</Text>
              </View>
            </View>
          </View>
        </View>
        <ExtraWeather weather={weather} />
      </View>
    </ImageBackground>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  weatherContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  weather: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },

  temperatureAndLocationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    flex: 1,
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  temperature: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  temperatureInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  temperatureIcon: {
    marginLeft: 5,
    fontSize: 30,
    elevation: 5,
    marginTop: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'auto',
  },
  location: {
    fontSize: 20,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
    elevation: 5,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  searchButton: {
    padding: 10,
    backgroundColor: 'transparent',
  },
});
