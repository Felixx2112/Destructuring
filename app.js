// array

const array = ["Javascript", "Python", "Ruby"];

//thong thuong

// const a = array[0];
// const b = array[1];
// const c = array[2];

// console.log(a, b, c);

// su dung Destructuring

// const [a, , c] = array;

// console.log(a, c);

// co the su dung toan tu Rest(Rest parameter)

// const [a, ...b] = array;

// console.log(a, b);

// object

const course = {
  name: "Javascript",
  price: 1000,
  image: "image",
  children: {
    name: "ReactJS",
  },
};

//thong thuong

// const c = course.name;

// console.log(c);

// su dung Destructuring

// const { name, price } = course;

// console.log(name, price);

// co the su dung toan tu Rest(Rest parameter)

// const { name, ...price } = course;

// console.log(name, price);

// lay ra object con

//const {
//  name: parentName, // vi 2 ten trung nhau nen minh se doi ten
//   children: { name }, // lay ra children con
// } = course;

// console.log(parentName);
// console.log(name);

// lay ra value khong duowc dinh nghia

const course2 = {
  name: "Javascript",
  price: 1000,
  image: "image",
};

const { name, description = "this is a description" } = course2; // ta se tao ra gia tri mac dinh cua description

console.log(name);
console.log(description); // luc nay se tra ve la undefined vi key chua dc dinh nghia
