const lotteryPromise = new Promise((resolve, reject) => {
    console.log("Lottery draw is happening");
    
    setTimeout(() => {
        if(Math.random() >= 0.5) {
            resolve("You won")
        } else {
            reject(new Error("You lose"))
        }
    }, 2000)
})

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)).finally(data => console.log("Promise Executed"))

const wait = (seconds) => {
    return new Promise(resol => {
        setTimeout(resol, seconds * 1000)
    })
}

// wait(1).then(() => {
//     console.log("1 sec passed");
//     return wait(2)
// }).then(() => {
//     console.log("2 sec passed");
//     return wait(3)
// }).then(() => {
//     console.log("3 sec passed");
//     return wait(4)
// }).then(() => {
//     console.log("4 sec passed");
//     return wait(5)
// }).then(() => {
//     console.log("5 sec passed");
// })

const whereIAm = async() => {
    const res = await fetch("https://restcountries.com/v2/name/portugal");
    const data = await res.json();
    return data;
}
(async () => {
    try {

        const res = await whereIAm()
        console.log(res);
    } catch(err) {
        console.log(err);
        
    } finally((er) => console.log(er))
})()


