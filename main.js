import JSConfetti from 'js-confetti'

import DonutsURL from "./assets/donuts.png" ;
import IceCreamURL from "./assets/ice-cream.png" ;


const jsConfetti = new JSConfetti()
const btnDonut =document.getElementById("btn-donut");
const btnIceCream =document.getElementById("btn-ice-cream");
const displayItem = document.getElementById("display-item");

const min = Math.ceil(300);
const max = Math.floor(1500);
const targetPoints = Math.floor(Math.random() * (max - min) + min);
console.log(targetPoints)

btnDonut.addEventListener("click", function(){
  //console.log("Donut")
  let iconDonutHTML = `<img src="${DonutsURL}" />`;
  displayItem.insertAdjacentHTML('beforeend',iconDonutHTML)

  updateSavivgPoints(10)
});
btnIceCream.addEventListener("click", function(){
  //console.log("Ice");
  let iconIceCreamHTML =  `<img src="${IceCreamURL}" />`;
  displayItem.insertAdjacentHTML('beforeend',iconIceCreamHTML)

  updateSavivgPoints(100)
});

function  updateSavivgPoints(value){
  const savivgPointsElement = document.getElementById('points');
  const currentValue = parseInt(savivgPointsElement.textContent);

  let newValue = currentValue + value;
  savivgPointsElement.textContent = newValue;

  if (newValue > targetPoints){
    jsConfetti.addConfetti();
  }
}