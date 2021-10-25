$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    const original = $("#sentence").val();
    const splitSent = original.split(" ");
    
    const greaterThanThreeArr = [];

    splitSent.forEach(function(element){
      if(element.length >= 3){
        greaterThanThreeArr.push(element);
      } 
    });
    greaterThanThreeArr.reverse();
    greaterThanThreeArr.join();

    alert(greaterThanThreeArr);
  });
});