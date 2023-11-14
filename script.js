1.
let numbers = [5, 15, 20, 38, 7];
console.log (numbers[0]+ numbers[1] + numbers[2] + numbers[3] + numbers[4]);
2.
let users= [
    {
        userName: "lea",
        age: 23,
        adress: "tbilsi"    
    },
    {
        userName: "nika",
        age: 32,
        adress: "qutaisi"
    },
    {
        userName: "ana",
        age: 30,
        adress: "batumi"    
    },
];
3.
console.log("my name is " + users[0].userName  + "," + " " + "my age is " + users[0].age  + "," + " " + "my adress is " + users[0].adress + ".");
4.
if( users[1].age < 19 ){
console.log("I am a teenager");
}else {
console.log( "I am an adult");
};
5.
// let numbersArray = [1, 2, 3, 4, 5]; {
//     for (let i = 0; i < 6; i++ ) {
//         console.log(i);
//     }
// };

let numb = '';
for (let i = 0; i < 6; i++) {
    numb = numb + i; 
}
console.log(numb);
6.
const currentdDay = new Date().getDay();
switch (currentdDay) {
	case 0:
		console.log("კვირა");
		break;
	case 1:
		console.log("ორშაბათი");
		break;
	case 2:
		console.log("სამშაბათი");
		break;
	case 3:
		console.log("ოთხშაბათი");
		break;
	case 4:
		console.log("ხუთშაბათი");
		break;
	case 5:
		console.log("პარასკევი");
		break;
	case 6:
		console.log("შაბათი");
		break;
    default:
        console.log("შვებულება");
};