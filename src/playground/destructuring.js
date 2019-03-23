/* const person ={
    name: "Andrew",
    age: 26,
    location: {
        city: 'London',
        temp: 20
    }
};

const {name, age: bigmanage} = person;

console.log(name + ' is ' + bigmanage);
console.log(`${name} is ${bigmanage}`)

 */

//  const book = {
//      title: 'The richest man in Babylon',
//      author: 'George Samuel Clason',
//      publisher:{
//          name: 'Penguin'
//      }
//  }

//  const {title, author} = book;
//  const {name: PublisherName= 'Self-published'} = book.publisher;

//  console.log(`The name of the publisher who wrote ${title} by ${author}, is ${PublisherName}`);

// const address =['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [ street, City, Town, zip] = address

// console.log(`You are in ${street}, ${City}, ${Town}, ${zip}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffeeName, small, medium, large] = item

console.log(`A medium ${coffeeName} costs ${medium}`);