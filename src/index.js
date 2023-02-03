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

updateTime();
setInterval(updateTime, 1000);
