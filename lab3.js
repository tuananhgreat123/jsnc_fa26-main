// Template Literal
const name = "tuancode";
const age = 20;
const info = `Ten: ${name}, Tuoi: ${age}`;
console.log(info);
// ``
const myName = `- Ten Toi la: ${name}
                - Tuoi: ${age}`;
                console.log(myName);
    const student = {
        id: 1,
        name: "tuancode",
        age: 20,
    };
    const studentInfo = ` - Id: ${student.id}
                        -Ten: ${student.name}
                        -Tuoi: ${student.age}`;
    console.log(studentInfo);
    //25 - Template Litera
    const name1 = "tuancode";
    const age1 = 20;
    const major1 = "IT";
    const info1 = ` - Ten: ${name1}
                    - Tuoi: ${age1}
                    - Nganh: ${major1}`;
    console.log(info1);

    // Bai Tap 26
    const student1 = {
        name: "tuancode",
        age:20,
        major:"IT",
    };
    const studentInfo1 = ` - Ten: ${student1.name}
                        - Tuoi: ${student1.age}
                        - Nganh: ${student1.major}`;
        console.log(studentInfo1);
// 27
function add(a,b){
    return a + b;
}

const result = add(10,20); 
const resultInfo = `Ket qua cua a va b: ${result}`;
console.log(resultInfo);
// 28 Arrow Function  +Viết các Arrow Function:
// a. Tinh binh phong
const square = (x) => x * x;
console.log(square(5));
// b. tinh tong
const sum = (a,b) => a + b;
console.log(sum(10,20));
// c. Chao nguoi dungs
function sayHello(name){
console.log(name)
}
sayHello("Xin chao tuan");
//  29
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n)=>n*2);
console.log(doubled);
// bai 30
const students = [
    { id: 1, name: "An"},
    { id: 2, name: "Tuan"},
    { id: 3, name: "PhAn"},
];

