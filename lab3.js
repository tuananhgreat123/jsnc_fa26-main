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
const sayHello = (name) => {
    console.log(name);
};

sayHello("Xin chao tuan");
//  29
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n)=>n*2);
console.log(doubled);
// bai 30
const students = [
  { id: 1, name: "An", age: 20 },
  { id: 2, name: "Tuan", age: 22 },
  { id: 3, name: "Phan", age: 21 },
];

const studentNames = students.map((student) => student.name);
console.log(studentNames);

const studentRows = students
  .map(
    (student) => `
      <tr class="hover:bg-gray-50">
        <td class="px-4 py-2 border border-gray-300">${student.id}</td>
        <td class="px-4 py-2 border border-gray-300">${student.name}</td>
        <td class="px-4 py-2 border border-gray-300">${student.age}</td>
        <td class="px-4 py-2 border border-gray-300">
          <div class="flex items-center justify-center gap-2">
            <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
              Edit
            </a>
            <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </td>
      </tr>
    `,
  )
  .join("");

const studentsTableBody = document.getElementById("studentsTableBody");
if (studentsTableBody) {
  studentsTableBody.innerHTML = studentRows;
};
//31
const students31 = [
    { id: 1, name:"An"},
    { id: 2, name:"Binh"},
    { id: 3, name:"Cuong"},
];
const studentNames31 = students31.map((student)=>student.name);
console.log(studentNames31);
// Bai 32
const products32 = [
    { id: 1, name: "iPhone 15", price: 20000000 },
    { id: 2, name: "MacBook Air", price: 25000000 },
    { id: 3, name: "AirPods", price: 5000000 },
];

const productRows = products32
    .map(
        (product) => `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
        </tr>
        `
    )
    .join("");

const productsTableBody = document.getElementById("productsTableBody");

if (productsTableBody) {
    productsTableBody.innerHTML = productRows;
}

// 33
const products33 = [
    {id:1,name:"Áo thun",price:150000,category:"Thời trang"},
    {id:2,name:"Quần jean",price:350000,category:"Thời trang"},
    {id:3,name:"Giày Adidas",price:800000,category:"Giày"},
];
const productRows33 = products33.map((product) => `
    <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
    </tr>
`).join("");

const productsTableBody33 = document.getElementById("productsTableBody33");

if (productsTableBody33) {
    productsTableBody33.innerHTML = productRows33;
}