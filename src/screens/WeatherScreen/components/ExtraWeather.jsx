import {Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ExtraWeather = weather => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Icon
            name="weather-windy"
            size={30}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.text}>
            Wind Speed: {weather.weather.wind?.speed} m/s
          </Text>
        </View>
        <View style={styles.column}>
          <Icon name="water" size={30} color="#fff" style={styles.icon} />
          <Text style={styles.text}>
            Humidity: {weather.weather.main?.humidity} %
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Icon
            name="weather-cloudy"
            size={30}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.text}>
            Cloud: {weather.weather.clouds?.all} %
          </Text>
        </View>
        <View style={styles.column}>
          <Icon name="thermometer" size={30} color="#fff" style={styles.icon} />
          <Text style={styles.text}>
            Feels Like: {weather.weather.main?.feels_like} °C
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ExtraWeather;
