// EXERCISE 2
const imgContainer = document.querySelector(".images");

const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = (imgPath) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Image not found"));
    });
  });
};

let currentImage;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImage = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img2) => {
    currentImage = img2;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((err) => console.error(err));

// Short Javascript Promise Question
//   const wait = (seconds) => {
//     return new Promise(resol => {
//         setTimeout(resol, seconds * 1000)
//     })
// }

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
