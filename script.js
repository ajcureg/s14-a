printUserInfo("starks", "tony", "ironman@gmail.com", "09171111111")

let lname = prompt('Enter your Last Name')
let fname = prompt('Enter your First Name')
let email = prompt('Enter your E-mail Address')
let mobile = prompt('Enter your Mobile Number')

function printUserInfo(lname, fname, email, mobile){
	console.log('Name: ' + fname + ' ' + lname);
	console.log('Email: ' + email);
	console.log('Number: ' + mobile);
}
