const currentDay = new Date().getDay();
switch(currentDay){
	case 0: console.log(`კვირა`);
		break;
	case 1: console.log(`ორშაბათი`);
		break;
	case 2: console.log(`სამშაბათი`);
		break;
	case 3: console.log(`ოთხშაბათი`);
		break;
	case 4: console.log(`ხუთშაბათი`);
		break;
	case 5: console.log(`პარასკევი`);
		break;
	case 6: console.log(`შაბათი`);
		break;
}

for(let i=0;i<100;i++){
	console.log(i);
}
let i = 0;
while(i<50){
	console.log(i)
	i++
}
i = 0;
do{
	console.log(i)
	i++;
}while(i<150)


let emptyArray = [];
for(let i=0;i<10000;i++){
    emptyArray.push(i*i)
}

let unsortedArray = [2, 3, 6, 6,5];
//O(n^2)
let biggestNum1 = unsortedArray[0];
let secondBiggest1 = 0;
for(let j=0;j<unsortedArray.length;j++){
	for(let k = 0; k<unsortedArray.length;k++){
		if(biggestNum1 < unsortedArray[k]){
			biggestNum1 = unsortedArray[k]
		}
	}
	if(unsortedArray[j]===biggestNum1){
		continue;
	}else if(secondBiggest1<unsortedArray[j]){
		secondBiggest1 = unsortedArray[j]
	}
}
console.log(`second biggest = ${secondBiggest1}`)

//O(n)
let secondBiggest2=0;
let biggestNum2 = 0;
for(let i = 0; i<unsortedArray.length;i++){
		if(biggestNum2 < unsortedArray[i]){
			biggestNum2 = unsortedArray[i]
		}
}
for(let j=0;j<unsortedArray.length;j++){
	if(unsortedArray[j]===biggestNum2){
		continue;
	}else if(secondBiggest2<unsortedArray[j]){
		secondBiggest2 = unsortedArray[j]
	}
}
console.log(`second biggest = ${secondBiggest2}`)