"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const renderError = (msg) => {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.computedStyleMap.opacity = 1;
};

const renderCountry = (data, className = "") => {
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
              +data.population / 1000000
            }</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1
};



const res = fetch("https://restcountries.com/v2/name/portugal");

//EXTRA - .then((res) => res.json(), err => console.log(err)) - here inside then we can paa 2 arguments first is for resolve() and 2nd is for reject()
// reject(new Error("You lose")) - it's better to create a Error() object inside reject() method

const getJSON = (url, errorMessage = "Country not found") => {
  return fetch(url).then((response) => {
    // it will check if we are getting any 404 error
    if (!response.ok) {
      throw new Error(`${errorMessage} (${response.status})`);
    }

    //   to read the data from the response used json() method
    return response.json();
  });
};

const getCountryData = (country) => {
  // country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      // it will check if we are getting any 404 error
      if (!response.ok) {
        // throwing anything in the promise will reject directly if condition satisfies
        throw new Error(`Country not found (${response.status})`);
      }

      //   to read the data from the response used json() method
      return response.json();
    })
    // whatever we return from the promise will be come as fulfilled value after promise
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0]?.borders[0];
      if (!neighbour) {
        throw new Error("No neighbour found");
      }

      // country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
      // return 23;
    })
    .then((res) => {
      // console.log(res);
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return res.json();
    })
    .then((data) => renderCountry(data))
    // catch will call if any promise got rejected
    .catch((err) => renderError(`Something went wrong ${err.message}`))
    // finally will call irrespective of promise resolve or reject
    // finally only works in promises
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", () => {
  getCountryData("portugal");
});

// getCountryData("asdjhaj");

// ------------------------------------------------------------------------------------

// EVENT LOOP
// console.log("Test Start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promise 1").then(res => console.log(res));
// console.log("Test End");

// ------------------------------------------------------------------------------------

// PROMISE

// Promise is an object which has executor function and that executor function has 2 parameter which has resolve() and reject() method
//  if Promise got resolved then will go to .then() method
//  if Promise got rejected then will go to .catch() method

const lotteryPromise = new Promise((resolve, reject) => {
  console.log("Lottery draw is happening");

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("Win the Lottery");
    } else {
      reject(new Error("Loss the lottery"));
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// Promise with Golocation
// navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.log(err))

const getPosition = () => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

// getPosition().then((pos) => console.log(pos));

// -------------------------------------------------------------------------------------------------------
// ASYNC AWAIT
// async and await is all about consume promises
const whereAmI = async (country) => {
  try {
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    if (!res.ok) {
      throw new Error("Error");
    }
    const data = await res.json();
    renderCountry(data[0]);
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};

whereAmI("portugal");
console.log("FIRST");

// TRy CATCH
// catch will work when we will get some error in try block
// try {
//   let y = 1;
//   const x = 12;
//   x = 32;
// } catch (err) {
//   alert(err.message);
// }

// --------------------------------------------------------------------------
// Promise.all()
const get3Countries = async (c1, c2, c3) => {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.capital], [data2.capital], [data3.capital]);

    // Promise.all() takes array of promises and it will return a new promise which will then run all the promises in the array at the same time
    // Promise.all() receives an array and returnan array
    // Whenever there is a situation in which you need to do multiple asynchronous operations at the same time and operations that don't depedent on one another then you should always run them in parallel like using Promise.all()
    // It is also called as combinator functions bcz it allow us to combine multiple promises
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    // console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  } finally {
    console.log("inside finally");
  }
};

get3Countries("portugal", "canada", "tanza");

// Promise.race()
/*
- It receives an array of promises and it also return a promise
- This promise return by Promise.race() is settled as soon as one of the input promises settles
- Settled simply means that a value is available, but it doesn't matter a promise got rejected or fullfilled
*/

(async () => {
  const res = await Promise.race([
    getJSON("https://restcountries.com/v2/name/italy"),
    getJSON("https://restcountries.com/v2/name/egypt"),
    getJSON("https://restcountries.com/v2/name/mexico"),
  ]);
  console.log("res", res[0]);
})();

const timeout = (sec) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON("https://restcountries.com/v2/name/tanzania"),
  timeout(1),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// Promise.allSettled()
// It simply results all the promises either resolve or rejected

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Reject"),
  Promise.resolve("Another Success"),
]).then((res) => console.log("das", res));

// Promise.any()
// It will take the first fulfilled promise not the rejected promise
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Reject"),
  Promise.resolve("Another Success"),
]).then((res) => console.log("san", res));
