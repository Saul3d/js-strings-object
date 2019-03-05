const iAmThirsty = (num) => {
    if(num < 21){
       return 'drink some water';

    } else if (num >21 && num <65){
        return'have a beer';
    } else {
        return'take a nap';
    }

};

const printToDom = (note) => {
    displayMessage = document.getElementById('message');
    displayMessage.innerHTML += `${note} <br>`;
}
// console.log(iAmThrirsty(55));
// console.log(iAmThrirsty(11));
// console.log(iAmThrirsty(67));

printToDom(iAmThirsty(55));
printToDom(iAmThirsty(11));
printToDom(iAmThirsty(67));