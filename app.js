
var food = ["mango,", "banana,", "soup,", "chicken,","salad"];
var wellnessStatus = {hunger: 5, happy: 0};

function feeding(){
    let choice = document.getElementById("itemChoice").value;
    if (choice=="feed"){
        wellnessStatus.hunger--;
        food.pop();
        document.getElementById("items").innerHTML=food;
        document.getElementById("bar").innerHTML= "hunger:" + wellnessStatus.hunger +
         "<br>" + "Happy: " + wellnessStatus.happy;
         if(wellnessStatus.hunger==0){
            window.alert("your pet is full");
         }
    }
    if (choice=="play"){
        wellnessStatus.happy ++;
        document.getElementById("bar").innerHTML= "hunger:" + wellnessStatus.hunger +
         "<br>" + "Happy: " + wellnessStatus.happy;
         if(wellnessStatus.happy==5){
            window.alert("your pet is happy!");
        }
    }
}
