// const iAmThirsty = (num) => {
//     if(num < 21){
//        return 'drink some water';

//     } else if (num >= 21 && num < 65){
//         return'have a beer';
//     } else {
//         return'take a nap';
//     }

// };

// const printToDom = (domElement, note) => {
//     displayMessage = document.getElementById('message',);
//     displayMessage.innerHTML += `<p>${note}</p> <br>`;
// }
// // console.log(iAmThrirsty(55));
// // console.log(iAmThrirsty(11));
// // console.log(iAmThrirsty(67));

// printToDom(iAmThirsty(55));
// printToDom(iAmThirsty(11));
// printToDom(iAmThirsty(67));

// printToDom function
const printToDom = (divId, textToPrint) => {
    const numDiv = document.getElementById('divId');
    numDiv.innerHTML += textToPrint;
};




const getMessage = (age) => {  
    if (age < 21) {
        return `Maybe just drink water <br />`;
    } else if (age >= 21 && age < 65) {
        return 'Have a beer! <br />';
    } else {
        return 'take a nap <br />';
    }
}
 
const arrayAge = [55, 21, 11, 44];
for (var i=0; i <= arrayAge.length; i++){
    printToDom('thirsty', getMessage(arrayAge[i]));
}

