const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector(".details");

const updateUI = (data) => {
  const cityInfo = data.cityInfo;
  const weather = data.weather;
  // const { cityInfo, weatehr } = data;

  console.log(cityInfo);
  console.log(weather);

  // boolean 데이터를 제공해 주세요.
  if (weather.IsDayTime) {
    details.innerHTML = `
    <img class = "card-img-top" src="./image/dayimage.png">
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>`;
  } else {
    details.innerHTML = `
    <img class = "card-img-top" src="./image/nightimage.png">
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>`;

  }
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none')
  }
}

const updateCity = async (city) => {
  const cityInfo = await getCity(city);
  //getWeather 함수가 async함수이기때문에 받아줄 때 await를 통해서 받아와야 함 (일종의 rule)
  const weather = await getWeather(cityInfo.Key);
  // 대문자로 받아와야 하는 이유가 데이터의 값을 가져오는 것이기때문에 Key를 가져와야 하는 것

  return {
    cityInfo: cityInfo,
    weather: weather,
  }
  // return { cityInfo, weather}
  // 이렇게 축약해서 작성도 가능하지만, 그럴 때에는 양쪽 값이 동일해야 함.
  // 헷갈릴 수 있으니 풀어서 쓰는 경우도 많음
}

cityForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const city = cityForm.city.value;

  // console.log(city);
  // updateCity(city)
  //   .then(data => console.log(data));
  // updateCity에서 나온 데이터를 updateUI까지 진행시키려면 어떻게 해야할까?
  updateCity(city)
    .then(data => updateUI(data))
});