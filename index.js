// 1. Scrieți o funcție care returnează pătratul numărului primit ca date de intrare - este transmis ca argument în apelul funcției

const square = (num) => {
  return Math.pow(num, 2);
};

console.log(square(5));

// 2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă "start" și strict mai mic decât o variabilă "end". Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end]

const random = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};
console.log(random(5, 10));

// 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere trimise ca parametru dintr-un șir dat.

const letterCount = (str, letter) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
};

console.log(letterCount("string", "i"));
console.log(letterCount("Îmi place programarea", "a"));
console.log(letterCount("Vreau să lucrez în IT", "r"));

// 4. Scrieți o funcție pentru a adăuga numere nelimitate

const addNumber = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5));
console.log(addNumber(1, 2, 3));
