const sedansAnimation = document.querySelector(".js-sedan-animation");
const suvAnimation = document.querySelector(".js-suv-animation");
const luxuryAnimation = document.querySelector(".js-luxury-animation");
const carImg = document.querySelectorAll(".js-card__img");
const sedansImg = carImg[0];
const suvImg = carImg[1];
const luxuryImg = carImg[2];

sedansImg.addEventListener("mouseover", () => {
  carAnimation(sedansImg, sedansAnimation);
});

suvImg.addEventListener("mouseover", () => {
  carAnimation(suvImg, suvAnimation);
});

luxuryImg.addEventListener("mouseover", () => {
  carAnimation(luxuryImg, luxuryAnimation);
});

/**
 * It takes two parameters, a car image and a car animation. It hides the car image, displays the car
 * animation, adds a class to the car animation to make it move from left to right, adds a class to the
 * car image to make it fade out, displays the car image, and then after one second, hides the car
 * animation, removes the class that makes it move from left to right, and removes the class that makes
 * it fade out
 * @param carImage - The image of the car that will be animated.
 * @param carAnimation - The animation of the car.
 */

function carAnimation(carImage, carAnimation) {
  carImage.style.display = "none";
  carAnimation.style.display = "block";

  carAnimation.classList.add("car-left-to-right");
  carImage.classList.add("opacity-img");
  carImage.style.display = "block";

  setTimeout(() => {
    carAnimation.style.display = "none";
    carAnimation.classList.remove("car-left-to-right");
    carImage.classList.remove("opacity-img");
  }, 1000);
}
