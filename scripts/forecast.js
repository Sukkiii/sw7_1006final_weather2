const key = 'TiKwlv8vftwAQrdzrsOwJkvb0dtXBryF'
// query 명령어의 일종
// database에 저장된 정보를 찾거나 저장된 글 목록을 삭제, 입력 명령어
const getWeather = async(id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`

  const response = await fetch(base + query);
  const data = await response.json();
  
  // console.log(data[0]);
  return data[0];
}

const getCity = async(city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  // query parameters에서 apikey, q(required)로 되어있으므로 통신을 할 때 집어넣어줘야하는 값들이다.
  
  const response = await fetch(base + query);
  // base, query에 해당하는 영역을 합쳐서 통신을 보내보겠다.
  const data = await response.json();

  // console.log(data);
  return data[0];
}

// getCity('seoul')
//   .then(data => {
//     return getWeather(data.key);
//   }).catch(err => console.log(err));



//https://trends.google.co.kr/trends/explore?q=ipone&date=now%201-d&geo=KR&hl=ko

// {
//   "Code": "400",
//   "Message": "Invalid location key: locationKey",
//   "Reference": "/currentconditions/v1/locationKey"
// }