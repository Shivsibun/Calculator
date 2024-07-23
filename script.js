let display=document.querySelector('.display');
let buttons=document.querySelectorAll('.ab');
let buttonsArray=Array.from(buttons);
let string='';

buttonsArray.forEach(function(btn){
    btn.addEventListener('click',function(event){

        if(event.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1)
            display.value=string;
        }
        else if(event.target.innerHTML=='AC'){
            string='';
            display.value=string;
        }
        else if(event.target.innerHTML=='='){
            string=eval(string) //evaluate the code
            display.value=string
        }
        else{
        string += event.target.innerHTML;
        display.value=string;
        }
        
    })
});
gsap.timeline({ repeat: -1, yoyo: true })
.to(".container", { backgroundColor: "#1b4f8a", duration: 0.2, ease: "linear" })
.to(".container", { backgroundColor: "#398699",color:"black", duration: 0.2, ease: "linear" })
.to(".container", { backgroundColor: "#65caf2",color:"black", duration: 0.2, ease: "linear" })
.to(".container", { backgroundColor: "#6ae9ff",color:"black",  duration: 0.2, ease: "linear" })
.to(".container", { backgroundColor: "#0a2c54", duration:0.2, ease: "linear" });