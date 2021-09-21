## Destructuring

`Khái niệm được hiểu như là phân rã`

### Destructuring với array

```bash
const array = ["Javascript", "Python", "Ruby"];

const [a, b, c] = array;

console.log(a, b, c);
```

### Destructuring với object

```bash
const course = {
  name: "Javascript",
  price: 1000,
};

const { name, price } = course;

console.log(name, price);
```

`Nếu trong object có 1 object con thì sao ?`

```bash
const course = {
  name: "Javascript",
  price: 1000,
  image: "image",
  children: {
    name: "ReactJS",
  },
};
```

`Lấy ra 2 name từ object con và object cha`

```bash
const {name, children: {name}}= course;

console.log(name);
```

`Đã lấy ra đươc 2 name nhưng sẽ sinh ra lỗi vì 2 key trùng nhau or sẽ bị ghi đè `

`Đổi tên key`

```bash
const {
    name: parentName,
    children: {name: childrenName}
 }= course;

console.log(parentName);
console.log(childrenName);
```

`Lấy ra value không được định nghĩa`

```bash
const course = {
  name: "Javascript",
  price: 1000,
  image: "image",
};
```

`Lấy ra description`

```bash
const {name , description} = course;

console.log(name);
console.log(description);
```

`Lúc này description chưa được định nghĩa nên sẽ trả về là undefined`

`Tạo ra giá trị mặc định của description khi không được định nghĩa`

```bash
const {name , description= 'Description default'} = course;

console.log(name);
console.log(description);
```

`Và giá trị mặc đinh của description khi được định nghĩa`

```bash
const course = {
  name: "Javascript",
  price: 1000,
  image: "image",
  description: 'Description value',
};
```
