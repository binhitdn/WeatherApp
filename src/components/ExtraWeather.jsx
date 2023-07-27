import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  icon: {
    width: 50,
    height: 50,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
});
