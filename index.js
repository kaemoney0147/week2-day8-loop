/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers 
*/
let firstArraryContains = [1, 2, 3, 4, 5, 6]
console.log('Array are:', firstArraryContains)

const myName = {
    firstName: "Abiodun",
    secondName: "Akinlotan",
    emailAddress: "Kakinlotan@yahoo.com",
    age: 33
}
console.log('My details are:', myName)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
myName.haveDrivingLicense = true
console.log(myName)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete myName.age
console.log(myName)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
const myName1 = {
    fName: 'sandra',
    Sname: 'Akinlotan',
    email: 'sandrabery800@gmail.com'
}
console.log(myName1)
const emailVerification = myName.emailAddress !== myName1.email ? 'email verfied' : 'cant verify email';
console.log('Sorry your email dont match:', emailVerification)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
let shoppingCart = 30
let shippingCost = 10
let totalShoppingCart

if (shoppingCart >= 50) {
    totalShoppingCart = shoppingCart
    console.log('congratulation you are eligile for free shipping')
} else {
    totalShoppingCart = shoppingCart + shippingCost
}
console.log('/n You totalShoppingCart is' + totalShoppingCart + '. how would like to pay today')
/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.*/
const blackFriday = shoppingCart / 100 * 0.8
console.log(' Congratulation you have 20% off:', blackFriday)




/*Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate
Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
const car = {
    brand: 'yaris',
    model: 'toyota',
    licensePlate: 'Dv07ycb'
}
console.log(car)
const car1 = Object.assign({}, car)
car1.licensePlate = 'dsjjjd',
    console.log(car1)
const car2 = Object.assign({}, car)
car2.licensePlate = 'Hycesd',
    console.log(car2)
const car3 = Object.assign({}, car)
car3.licensePlate = 'jjwyss',
    console.log(car3)
const car4 = Object.assign({}, car)
car4.licensePlate = 'Wycsjj'
console.log(car4)
const car5 = Object.assign({}, car)
car5.licensePlate = 'Dcuwdd'
console.log(car5)

/* EXERCISE 9
Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.*/

const carsForRent = [car, car1, car2, car3, car4, car5]
console.log(carsForRent)
/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
carsForRent.shift()
carsForRent.pop()
console.log(carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(car, car1, car2, car3, car4, car5)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
let carsForSale = []
carsForSale.push(car)
carsForSale.push(car1)
carsForSale.push(car2)
console.log('This empty array is now filled car:', carsForSale)
let totalCars = [carsForSale.length + carsForSale.length]
console.log(totalCars)

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i].model);
    console.log(carsForSale[i].licensePlate);
    console.log(carsForSale[i].brand);

}