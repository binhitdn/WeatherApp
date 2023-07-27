const weatherImageMapping = {
  Clear: require('../assets/images/clear.jpg'),
  Clouds: require('../assets/images/cloudy.jpg'),
  Rain: require('../assets/images/rainy.jpg'),
  Snow: require('../assets/images/snowy.jpg'),
  Thunderstorm: require('../assets/images/thunderstorm.jpg'),
  Haze: require('../assets/images/haze.jpg'),
};

const convertWeatherToBackgroundImage = weather => {
  return weatherImageMapping[weather] || weatherImageMapping.Clear;
};

export default convertWeatherToBackgroundImage;
