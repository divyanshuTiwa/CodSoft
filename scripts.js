let btn= document.querySelectorAll('.button');
let input= document.querySelector('.input');
let str="";

Array.from(btn).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'AC'){
            str="";
            input.value = str;
        }
        else if(e.target.innerHTML == 'CE'){
            str=str.slice(0,str.length-1);
            input.value = str;
        }
        else if(e.target.innerHTML == '%'){
            str=str/100;
            input.value = str;
        }
        else if(e.target.innerHTML == 'X'){
            str+='*';
            input.value = str;
        }
        else if(e.target.innerHTML == '='){
           try{
            input.value=eval(str);
            str=""
           } catch(e){
               input.value = "ERROR";
               str="";
           }
        }
        else{
            str+=e.target.innerHTML;
            input.value=str;
        }
    })
})