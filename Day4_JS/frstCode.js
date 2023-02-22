function compare(x,y){
    return x >y;
}
console.log(compare(8,7));
// function 
 function makeCoffee(suger,milk){
    var instrct= "boile water,";
    instrct+=" pour into mug";
    instrct+=" add "+suger+" spoons of suger";
    instrct+=" add "+milk+" %mik";
    return instrct;

 }
 console.log(makeCoffee(3,40));
 var car={
    color:"Orange",
    speed:230,
    drive: function(){
        return "this object data type{}"+"drive nice";
    }
 }
 var shoopinglist=[
    "this is  arrays data type[]",
    "Apple",
    "Orange",
    "Gavava"

 ];
//  let cofyBtn =document.querySelector('button');
//  cofyBtn.addEventListener('click',showMsg);
//  function showMsg(){
//     alert("Enjoy your coffee,Thank you ")
//  }
 let inptBtn= document.querySelector('button');
 inptBtn.addEventListener('click',inptMsg);
 function inptMsg(){
    let name=prompt('Enter your name');
    inptBtn.textContent='emp No. 1:'+name;
 }
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 document.getElementById("demo").innerHTML = fruits.toString();

 const vegii=["carrot","patato","raddish"];
 document.getElementById("vgs").innerHTML=vegii;
 vegii.pop();
 document.getElementById("vgs2").innerHTML=vegii;

 const cars=["bmw","I20","KIA"];
 document.getElementById("cars").innerHTML=cars;
 cars.push("Jaguar");
 document.getElementById("cars2").innerHTML=cars;
 
 cars[1]="Farari"
 document.getElementById("cars3").innerHTML=cars;

 delete cars[2];
 document.getElementById("cars4").innerHTML=cars;

 cars.splice(2,0,"m800","swiftdzr");
 document.getElementById("cars5").innerHTML=cars;

 const honda = cars.slice(2);
 document.getElementById("cars6").innerHTML=cars + "<br><br>" + honda;

 const time=new Date().getHours();
 let greetings;
 if (time<11) {
    greetings="Good morning bro";
 } else if (time<20){
    greetings="Good day";
    
 }else{
    greetings="Good evening";
 }
document.getElementById("grt").innerHTML=greetings;