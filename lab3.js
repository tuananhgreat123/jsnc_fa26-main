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
    // Bai Tap
    const student1 = {
        name: "tuancode",
        age:20,
        major:"IT",
    };
    const studentInfo1 = ` - Ten: ${student1.name}
                        - Tuoi: ${student1.age}
                        - Nganh: ${student1.major}`;
        console.log(studentInfo1);