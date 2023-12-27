var cardHolderName=document.getElementById("cardHolderName");
var cardNumber=document.getElementById("cardNumber");
var expDate=document.getElementById("expDate");


var holderName=document.getElementById("holder-name");
var holderCardNumber=document.getElementById("holderCardNumber");
var validDate=document.getElementById("validDate");
var maskCard=document.getElementById("maskCard");

function submitted(event){

    event.preventDefault()
    holderName.innerText=cardHolderName.value;
    holderCardNumber.innerText=formattedString(cardNumber.value);
    validDate.innerText=expDate.value;
    console.log(e)
    
}
function formattedString(val){
    if(maskCard.checked==true){
        return val.replace(/\d{4} (?=\d{4})/g,'XXXX ')
    }
    else{
        return val.replace(/(\d{4})/g, '$1 ').trim()
    }
}



cardNumber.addEventListener("keypress",function(){
if(cardNumber.value.length==4 || cardNumber.value.length==8+1 || cardNumber.value.length==12+2){
    // cardNumber.value=cardNumber.value.replace(/(\d{4})/g, '$1 ', '$2 ', '$3 ');
    cardNumber.value=cardNumber.value+" ";
}
})
expDate.addEventListener("keypress",()=>{
    if(expDate.value.length==2){
        expDate.value=expDate.value+'/';
    }
})