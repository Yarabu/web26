const a = 10;
const b = 5;
console.log("Сума:", a + b);
console.log("Різниця:", a - b);
console.log("Множення:", a * b);
console.log("Ділення:", a / b);

const firstName = "Іван";
const lastName = "Іванов";
const fullName = `${firstName} ${lastName}`;
console.log(`Привіт, ${fullName}!`);

let age = 19;
if (age >= 18) {
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}

for(let i = 1; i <= 10; ++i) {
    console.log(i);
}

function square(number) {
    return number * number;
}
const result = square(5);
console.log("Результат:", result);

let fruits = ["Яблуко", "Груша", "Мандарин"];
fruits.push("Апельсин");
console.log(fruits);