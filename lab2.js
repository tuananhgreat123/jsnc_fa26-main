
//array
const students1 = "Tuấn Anh";
const students2 = "Bình";
const students3 = "Hải";

const students = ["Tuấn Anh", "Bình", "Hải"];

const ids = [1, 2, 3, 4, 6];

const actives = [true, false, 42, "hello"];

console.log("Ban đầu:", students);

students[0] = "hello";

console.log("Sau khi thay đổi:", students);
//Bài 1 – Array cơ bản Tạo Array:
const names = ["Tuấn Anh", "Bình", "Hải","Phong","Hung"];
console.log("array:", names);
console.log("phan tu dau tien:", names[0]);
console.log("phan tu cuoi cung:", names[names.length - 1]);
console.log("so luong phan tu:", names.length);
names.push("Tuấn Anh");
console.log("sau khi them:", names);
names.pop();
console.log("sau khi xoa phan tu cuoi:", names);
// Bai 2
const names2 = ["Tuấn Anh", "Bình", "Hải","Phong","Hung"];
for (let i = 0; i < names2.length; i++){
    console.log(names2[i]);
}
// bai 3 
// object
const student = {
    id: 1,
    name: "Tuấn Anh",
    age: 19,
    email: "tuan@gamil.com",
    major: "CNTT",
}
console.log("Student", student);
console.log("Ten sinh vien:", student.name);
console.log("Tuoi sinh vien:", student.age);
console.log("Email sinh vien:", student.email);

student.age = 20;

console.log("Tuoi sinh vien sau khi thay doi:", student.age);
student.phone ="02144261112";
console.log("Student sau khi them phone:", student);
// Bài 4 - Array Object

const studentsList = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        age: 20,
    },
    {
        id: 2,
        name: "Trần Văn Bình",
        age: 21,
    },
    {
        id: 3,
        name: "Lê Văn Nam",
        age: 20,
    }
];
// truy cập dam id = students
// Hiển thị danh sách sinh viên lên HTML

let html = document.getElementById("students");

let content = "";

for (let i = 0; i < studentsList.length; i++) {
    content = content +
    `<div>
        <h3>Tên Sinh Viên: ${studentsList[i].name}</h3>
        <p>Tuổi: ${studentsList[i].age}</p>
    </div>`;
}

html.innerHTML = "<h1>Danh sách sinh viên</h1>" + content;

console.log(html);
// bai tap tong hop
 const products = [
    { 
        id: 1,
        name: "Iphon 14",
        price: 20000000,
    },
    { 
        id: 2,
        name: "Iphon 15",
        price: 12300000,
    },
    { 
        id: 3,
        name: "Iphon 16",
        price: 24500000,
    }
 ];//in danh sach
 console.log("Danh sach san pham:", products);
 for(let i = 0; i < products.length; i ++){
    console.log(products[i]);
 }
 for (let i = 0; i < products.length; i++){
    console.log(
        products[i].name + " - " + products[i].price 
    );
 }
 let total = 0; 
 for(let i = 0; i < products.length; i++){
    total = total + products[i].price;
    }
    console.log("Tong hop gia tri san pham:", total);
    let productHTML = document.getElementById("products");
    let productContent = "";
    for (let i = 0; i < products.length; i++){
        productContent = productContent +
        `<div>
        <h3> Ten San pham: ${products[i].name}</h3>
        <P> Gia: ${products[i].price}</p>
        </div>
        `;
    };
    productHTML.innerHTML = "<h1>Danh sach san pham</h1>" + [productContent];
