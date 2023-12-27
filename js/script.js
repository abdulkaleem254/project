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

function handleFormat(event){
    let element = event.target;
    console.log(element.value)
    // Remove non-numeric characters using a regular expression
    let numericValue = element.value.replace(/[^0-9/\b ]/g, '');

    // Update the input field with the numeric value
    element.value = numericValue;
}
// validity date function
function handleFormatValid(event) {
    let element = event.target;
    console.log(element.value);
    console.log(event)

    // Check if the event type is "input"
    if (event.type === 'input') {
        // Remove non-numeric characters
        let numericValue = element.value.replace(/[^0-9/]/g, '');

        if (element.value.length === 2) {
            alert(numericValue);
            numericValue = numericValue + '/';
        }
        element.value=numericValue;

        // Further processing with numericValue...
    } 
}

function formattedString(val){
    if(maskCard.checked==true){
        return val.replace(/\d{4} (?=\d{4})/g,'XXXX ')
    }
    else{
        return val.replace(/(\d{4})/g, '$1 ').trim()
    }
}



// cardNumber.addEventListener("keyup",function(){
//     if(cardNumber.value.length==4 || cardNumber.value.length==8+1 || cardNumber.value.length==12+2){
//     // alert("")
//     // cardNumber.value=cardNumber.value.replace(/(\d{4})/g, '$1 ', '$2 ', '$3 ');
//     cardNumber.value=cardNumber.value+" ";
// }
// })
// expDate.addEventListener("keyup",()=>{
//     if(expDate.value.length==2){
//         expDate.value=expDate.value+'/';
//     }
// })