const birthDate =document.querySelector("#date");
const number =document.querySelector("#number");
const checkBtn =document.querySelector("#checkBtn");

const dsiplay=document.querySelector("#display")


function prepareNumber(){
    var date=birthDate.value;
    date=date.replaceAll("-","0");

    let sum=0;

    for( let i=0;i<date.length;i++){
        
        sum=sum +Number(date[i]);
    }
   
    checkIfLucky(sum);
}

function checkIfLucky(sum){
    
    let luckyNumber=number.value;
    if(sum%luckyNumber===0){
      
        dsiplay.innerHTML="Woohooo!   Your Birthday is Lucky!!!!";
    }
    else{

        dsiplay.innerHTML="Birthday is not lucky";
    }
}

checkBtn.addEventListener("click", prepareNumber);

