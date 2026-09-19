console.log("Day la lab1.js");
// Khai báo biến

let name = "Tuấn Anh";
let age = 19;
let address = "Thanh Hóa";
let isStudent = true;

// các biến ra Console
console.log("Họ tên:", name);
console.log("Tuổi:", age);
console.log("Địa chỉ:", address);
console.log("Sinh viên:", isStudent);
// Bai 2 : Thay đổi giá trị của biến
let age2 = 20;
console.log(age2);
age2 = 21; 
console.log(age2);
// bai 3: Tinh toan voi bien
const a = 10;
const b = 5;
console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);
// bai 4 : Hàm chào hỏi
function sayHello(name){
    console.log("Xin Chào " + name);
}
sayHello("Tuấn Anh");
sayHello("Bình");
sayHello("Hải");
sayHello("Hà");
// bai 5 : hàm tính tổng 
function sum(a, b){
    return a + b;
}
const result = sum(5,10);
console.log("Tổng của 5 và 10 là: " + result);
// function sum(a, b){
//     console.log("Tổng của " + a + " và " + b + " là: " + (a + b));
// }
// sum(5,10);
// bai 6 : Hàm tính tiền
function calculatePrice(price, quantity){
    return price * quantity;
}
const total = calculatePrice(100, 5);
console.log("Tổng tiền là: " + total);
// function calculatePrice(price, quanity){
//     console.log(price * quanity);
// }
// calculatePrice(100, 5);
// bài 7: Hàm tính điểm trung bình
