$(document).ready(function(){
  $("form#triangle-tracker").submit(function(event){
    // $("#triangle").hide();
    // $("#fail").hide();
    $(".result").children().hide();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    event.preventDefault();

    //var isTriangle = checkLengths(side1, side2, side3);
    var sum12 = side1 + side2;
    var sum23 = side2 + side3;
    var sum13 = side1 + side3;

    if(!((sum12 <= side3) || (sum23 <= side1) || (sum13 <= side2))){
      if ((side1 === side2) && (side2 === side3)) {
        $("#triangle-type").text("Equilateral Triangle!");
        $("#triangle").show();
      }
      else if ((side1 === side2) || (side2 === side3) || (side3 === side1)){
        $("#triangle-type").text("Isosceles Triangle!");
        $("#triangle").show();
      }
      else{
        $("#triangle-type").text("Scalene Triangle!");
        $("#triangle").show();
      }
    } else {
      $("#fail").show();
    }
  });

});

// // backend logic
//
// function checkLengths(sideA, sideB, sideC){
//   var sum12 = sideA + sideB;
//   var sum23 = sideB + sideC;
//   var sum13 = sideA + sideC;
//
// // Is this a triangle?
// // Is NOT trigangle if sum of 2 sides >= 3rd side
//   if((sum12 <= sideC) || (sum23 <= sideA) || (sum13 <= sideB){
//     return false;
//   }
//
//   return true;
// }
