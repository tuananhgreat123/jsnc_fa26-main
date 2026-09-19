
//array
const students1 = "Tuấn Anh";
const students2 = "Bình";
const students3 = "Hải";

const students = ["Tuấn Anh", "Bình", "Hải"];

const ids = [1, 2, 3, 4, 6];

const actives = [true, false, 42, "hello"];

// Danh sách index: 0, 1, 2

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