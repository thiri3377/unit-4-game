var crystalValue = 0;
var numRand = 0;
//Get the random number betwwen maximun number and minimum number


function numberRandom ()
{
  number = Math.floor(Math.random() * 100)+1;
  console.log(number);
  $("#numberRandom").html(number);
  return number;

  //$("#numberRand").html(numRand);
}
numberRandom();
var answer = numberRandom();

function getRandomNumber(min, max)
{
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min ;

}

function sumofCrystalValues(value){
  crystalValue = crystalValue + value ;
     $("#crystalValues").html(crystalValue);

}

$("#crystal1").click(function(){
  var num1 = getRandomNumber(1, 25);
  sumofCrystalValues(num1);
  getCondition();
})

$("#crystal2").click(function(){
  var num2 = getRandomNumber(26, 50);
  sumofCrystalValues(num2);
  getCondition();
})

$("#crystal3").click(function(){
  var num3 = getRandomNumber(51, 75);
  sumofCrystalValues(num3);
  getCondition();
})

$("#crystal4").click(function(){
  var num4 = getRandomNumber(76, 100);
  sumofCrystalValues(num4);
  getCondition();

})



function getCondition()
{

  if (crystalValue > answer)
  {
    //document.write("Loser!!");
    alert("Loser");
  }

else if (crystalValue === answer){
//document.write("Winner!!");
alert("Winner"); 
}


}
