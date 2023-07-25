import {
  ImageBackground,
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import SearchInput from '../../components/SearchInput';
import getDataWeather from '../../api/getDataWeather';
import convertWeatherToBackgroundImage from './convertWeatherToBackgroundImage';
import ExtraWeather from './components/ExtraWeather';

const WeatherScreen = () => {
  const [cityInput, setCityInput] = React.useState('');
  const [weather, setWeather] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchWeather('Hokkaido');
  }, []);

  const fetchWeather = async cityData => {
    setLoading(true);
    try {
      const getWeather = await getDataWeather(cityData);
      console.log(getWeather);
      setWeather(getWeather);
    } catch (err) {
      Alert.alert('City not found');
    } finally {
      setLoading(false);
    }
  };

  const checkCity = () => {
    if (cityInput === '') {
      Alert.alert('Please enter city name');
      return;
    }
    fetchWeather(cityInput);
  };
  if (loading) {
    <ActivityIndicator size="large" color="#fff" />;
  }

  const handleInputChange = text => {
    if (!/^[A-Za-z0-9]*$/.test(text)) {
      Alert.alert('エラー', '半角英数で入力してください');
      return;
    }
    setCityInput(text);
  };

  return (
    <ImageBackground
      source={convertWeatherToBackgroundImage(weather.weather?.[0].main)}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.container}>
        <SearchInput
          placeholder="Enter city name"
          value={cityInput}
          onChangeText={handleInputChange}
          onSubmitEditing={checkCity}
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
