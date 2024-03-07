var slider = document.getElementById("slider");
var output = document.getElementById("display");

const character_lower = 'abcdefghijklmnopqrstuvwxyz';
const character_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbol  = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
output.innerHTML = slider.value;

var dis =  document.getElementById("dis");

var array = [];
var type = 0;

slider.addEventListener('input',function() {  
    output.innerHTML = this.value;
  }) 
var generate = document.getElementById('gb');
var upper = document.getElementById('uppercase');
var uppertf = false;
var lower = document.getElementById('lowercase');
var lowertf = false;
var numbers = document.getElementById('numbers');
var numberstf = false;
var symbols = document.getElementById('symbols');
var symbolstf = false;
var count = 0;

// initialstate();
backgroundcolor();

// this is the new thing u are learning 
// function initialstate()
// {

//     slider.value = 10;
//     slider.innerHTML = slider.value;
//     upper.checked = true;



    
// }

function backgroundcolor()
{
    var ele = document.querySelector("[data-indicator]");

    if(type > 2)
    {
        ele.backgroundcolor = 'green';
    } 

    else{
        ele.backgroundcolor = 'red';
    }

}


 upper.addEventListener('input',function(){
  
    if(this.checked == true)
    {
        count++;
        uppertf = true;
        type++;
    }
    else
    {
        count--;
        uppertf  = false;
   
        type--;
    }
    if(slider.value < count )
    {
        slider.value = count;
        output.innerHTML = count;

    }
});

lower.addEventListener('input',function(){
    if(this.checked == true)
    {
        count++;
        lowertf = true;
        type++;

    }
    else{
        count--;
        lowertf = false;
        type--;
    }
    if(slider.value < count )
    {
        slider.value = count;
        output.innerHTML = count;

    }
});

numbers.addEventListener('input',function(){
    if(this.checked == true)
    {
        count++;
        numberstf = true;
        type++;

    }
    else{
        count--;
        numberstf = false;
        type--;
    }

    if(slider.value < count )
    {
        slider.value = count;
        output.innerHTML = count;

    }
});

symbols.addEventListener('input',function(){
    if(this.checked == true)
    {
        count++;
        symbolstf = true;
        type++;






    }
    else{
        count--;
type--;
        symbolstf = false;
    }
    if(slider.value < count )
    {
        slider.value = count;
        output.innerHTML = count;

    }
});
// var slidervalue = parseFloat(slider.value);
// console.log(slidervalue);
// console.log(type);
//  var numberOfElemetsForEachType = slidervalue / type;
//  console.log(type)
//  console.log(numberOfElemetsForEachType);



generate.addEventListener('click' ,function(){
    array =[];
    slider.innerHTML ='';
    var slidervalue = parseFloat(slider.value);
    console.log(slidervalue);


    var numberOfElemetsForEachType = slidervalue / type;
    console.log(numberOfElemetsForEachType)

    console.log(uppertf)

    if(uppertf)
    {
     
        for(var i = 0; i < numberOfElemetsForEachType ;i++)
    {
     
        let g = character_upper.charAt(Math.floor(Math.random() * character_upper.length));
        array.push(g);

    }

    }
    
    if(lowertf )
    
    {
        for(var i = 0; i < numberOfElemetsForEachType ;i++)
    {
        let c = character_lower.charAt(Math.floor(Math.random() * character_lower.length));
        array.push(c);

    }

    }

    
    if(numberstf)
    {
        for(var i = 0; i < numberOfElemetsForEachType ;i++)
    {
        let num = Math.floor(Math.random() * 10);
        array.push(num);


    }

    }
    

    if(symbolstf)
    {
        for(var i = 0; i < numberOfElemetsForEachType ;i++)
    {
        let u = symbol.charAt(Math.floor(Math.random() * symbol.length));
        array.push(u);

    }

    }

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    console.log(array);

dis.value = array.join("");
dis.innerHTML =dis.value;

}



);

var copy  = document.getElementById("copy");

copy.addEventListener('click',()=>{

    dis.select();
    dis.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(dis.value);
    alert("Copied the text: " + dis.value);





});





