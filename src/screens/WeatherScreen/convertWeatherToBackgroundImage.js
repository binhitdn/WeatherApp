let convertWeatherToBackgroundImage = weather => {
  if (weather === 'Clear') {
    return require('../../assets/images/clear.jpg');
  } else if (weather === 'Clouds') {
    return require('../../assets/images/cloudy.jpg');
  } else if (weather === 'Rain') {
    return require('../../assets/images/rainy.jpg');
  } else if (weather === 'Snow') {
    return require('../../assets/images/snowy.jpg');
  } else if (weather === 'Thunderstorm') {
    return require('../../assets/images/thunderstorm.jpg');
  } else if (weather === 'Haze') {
    return require('../../assets/images/haze.jpg');
  }
  return require('../../assets/images/clear.jpg');
};
export default convertWeatherToBackgroundImage;
