//1.array joining and splitting
const cars= ["ferrari", "porsche"];
let text = cars.join(" and ");
console.log(text);

let word = "Javascript";
console.log(word.split(""));

//2.map an array
let letter=["car","bike","ferrari"];
let letters=letter.map((x)=>x.toUpperCase());
console.log(letters);

//3.array manipulation with slice()
function func() {
    let arr = [23, 56, 87, 32, 75, 13];
    let new_arr = arr.slice(2, 4);
    console.log(new_arr);
}
func();

//4.array flattening
const Arr = [[1,2],[3,4],[5,6]];
const newArr = Arr.flat();
console.log(newArr);

//5.Array destructing
let num= [29, 10 , 67, 500];
console.log(num[2]); 
console.log(num[3]);