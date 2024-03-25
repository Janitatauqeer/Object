//Define a simple object;
var person = {
    name: "Sidra",
    age: "27",
    gender: "Female",
};
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Gender:", person.gender);
//Define a nested object;
var personWithAddress = {
    name: "Hafsa",
    age: "26",
    gender: "Female",
    address: {
        street: "Preedy st",
        area: "Saddar",
        city: "Karachi",
    },
};
console.log(personWithAddress);
//Accessing properties of the nested object;
console.log("Name :", personWithAddress.name);
console.log("Age :", personWithAddress.age);
console.log("Gender :", personWithAddress.gender);
console.log("Street :", personWithAddress.address.street);
console.log("Area :", personWithAddress.address.area);
console.log("City :", personWithAddress.address.city);
//Define an Array of object representing Vegetables;
var vegetables_ = [
    { name: "Potato", color: "Brown", price: "80" },
    { name: "Tomato", color: "Red", price: "100" },
    { name: "Onion", color: "Purple", price: "200" },
];
console.log(vegetables_);
export {};
