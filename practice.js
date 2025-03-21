// fetch("https://restcountries.com/v2/name/portugal")

fetch("https://restcountries.com/v2/name/portugal").then(res => res.json()).then(data => console.log(data));

const das = new Promise((resolve, reject) => {
  resolve("Hello");
})

das.then(res => {
  if(!res.ok) {
    throw new Error("")
  } else {
    console.log(res)
  }
}).catch(err => console.log(err)).finally(() => {})