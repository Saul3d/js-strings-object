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


let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
  }

  console.log(employee.name);
  console.log('Jeff was hired on ' + employee['hire_date']);
  employee.vacation_days = 20;

  let eom = 'employee_of_the_month';
  employee['eom'] = false;
  console.log(employee);


  printToDom(divId, `${employee.name} <br />`);
  printToDom(divId, `Jeff was hired on ${employee['hire_date']} <br />`);
  printToDom(divId, `Jeff has ${employee.vacation_days} vacation days <br />`);
  printToDom(divId, `Jeff is the Employee of the Month : ${employee.eom} <br />`);