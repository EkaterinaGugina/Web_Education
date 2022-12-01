// function sum(a,b) {
//  return a + b;
// }
// const a=Number.parseInt(prompt("Введите число а"));
// const b=Number.parseInt(prompt("Введите число b"));
// console.log(`Pезультат сложения чисел ${a} и ${b} равен ${sum(a,b)}`);

// function sayHello(username){
//     console.log(`Привет, ${username}!`);
// }

// const nameuser=prompt('Введите свой имя');
// sayHello(nameuser);

// const result = confirm('Вам хорошо жить?');
// if (result){
//     alert("Тогда мы идем к вам!");
// } else {
//     alert("Ну вы держитесь!");
// }

// const ageUser = Number.parseInt(prompt("Введите свой возраст"));
// switch (ageUser) {
//  case 18:
//  alert('Вы совершеннолетний, вам все можно!');
//  break;
//  case 10:
//  alert('Пора учить уроки!');
//  break;
//  case 30:
//  alert('Пора спать, завтра на работу!');
//  break;
//  default:
//  alert("Не знаю, что и сказать...");
// }

// int[] array = new int [5, 7, -1, 12, 3, 0];
function getMaxEvenElement(arr){
    let max=arr[0];
    for (let index = 2; index < arr.length; index += 2){
        if (arr[index] > max){
            max = arr[index];
        }
    }
    return max;
}
console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0]));
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50, 12, 3, 0]));
