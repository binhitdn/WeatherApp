const API_KEY = 'e6d0791f5cc3a50feaaa57f151c9f71a';

export default async city => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );
    const data = await response.json();
    if (data.cod === 200) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error(error);
  }
};
