let count = 10;
let randnum = Math.round(Math.random()*99)+1
var input;
let x= document.getElementById("hid");
let text0 = '';

console.log(randnum)
    console.log(count)
    //document.querySelector('.button').addEventListener('click',)

//let clk = document.getElementById("int_clk")
     x.style.display="none";
    
    //My tool
    //document.querySelector('h4').setAttribute('style','background-color:red;')
    //x.style.display="block";
    //document.querySelector('.tex').setAttribute('disabled',true)
    //document.querySelector('.button').setAttribute('disabled',true)
// function abc(){
//    // document.querySelector('h2').textContent=input
//    n = document.getElementById('tex').value;
//     console.log(n);
// }
    
function sol(){
    input = document.getElementById('tex').value;
    text0 += input +' ';
    if(input<0||input>100){
        document.querySelector('h1').textContent='Previous Num is '+text0 
        document.querySelector('h2').textContent='Wrong input!!!'
        document.querySelector('h2').setAttribute('style','background-color:red;')
        document.querySelector('h5').textContent='You have '+count+' left'
    }
    else if(input<randnum){
        document.querySelector('h1').textContent='Previous Num is '+text0
        document.querySelector('h2').textContent='Wrong!!!'
        document.querySelector('h2').setAttribute('style','background-color:red;')
        document.querySelector('h3').textContent='Num is higher'
        
        count--
        document.querySelector('h5').textContent='You have '+count+' left'
        console.log(count)
    }else if(input>randnum){
        document.querySelector('h1').textContent='Previous Num is '+text0 

        document.querySelector('h2').textContent='Wrong!!!'
        document.querySelector('h2').setAttribute('style','background-color:red;')
        document.querySelector('h3').textContent='Num is lower'
        
        count--
        document.querySelector('h5').textContent='You have '+count+' left'
        console.log(count)
    }else if(input==randnum){
        document.querySelector('.int_tex').setAttribute('disabled',true)
        document.querySelector('.button').setAttribute('disabled',true)
        document.querySelector('h2').setAttribute('style','background-color:green;')
        document.querySelector('h2').textContent='Winnner'
        document.querySelector('h5').textContent='You have '+count+' left'
        x.style.display="block";
        count=10
        console.log(count)

}
if(count<=0){
    document.querySelector('h1').textContent='Previous Num is '+text0
    document.querySelector('h2').textContent='GAMEOVER!!! NOOB FUK'
    document.querySelector('h2').setAttribute('style','background-color:red;')
    document.querySelector('.int_tex').setAttribute('disabled',true)
    document.querySelector('.button').setAttribute('disabled',true)
    document.querySelector('h5').textContent='You have '+count+' left'
    x.style.display="block";
    count=10
}
}

