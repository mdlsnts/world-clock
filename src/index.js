function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  losAngelesDateElement = losAngelesElement.querySelector(".date");
  losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Seoul
  let seoulElement = document.querySelector("#seoul");
  seoulDateElement = seoulElement.querySelector(".date");
  seoulTimeElement = seoulElement.querySelector(".time");
  seoulTime = moment().tz("Asia/Seoul");
  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  sydneyDateElement = sydneyElement.querySelector(".date");
  sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Manila
  let manilaElement = document.querySelector("#manila");
  manilaDateElement = manilaElement.querySelector(".date");
  manilaTimeElement = manilaElement.querySelector(".time");
  manilaTime = moment().tz("Asia/Manila");
  manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
  manilaTimeElement.innerHTML = manilaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

let cityInterval;
function updateCity(event) {
  clearInterval(cityInterval);
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  updateCityTime(cityTimeZone);
  cityInterval = setInterval(() => updateCityTime(cityTimeZone), 1000);
}
function updateCityTime(cityTimeZone) {
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" >
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
      </div>
  <div>
    <a href="/" class="home">
      return home
    </a>
  </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
