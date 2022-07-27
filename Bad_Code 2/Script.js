/*
You must create the code that follows the following logic,
if the given number is 100, take this number as special and
show the following message: "This is a special number!", but
if the number is less than 1000, multiple of 10 and different
from 100, you must show the following message: "This number is
almost special". if none of the given conditions are met show the
following message: "Just a regular number". Another developer was
trying to program the logic, but apparently couldn't, you need to
fix the code to work properly
*/

var n = 80;

if (n == 100) {
  console.log('This is a special number!');
}else{
  if (n < 1000 && (n%10 == 0)) {
    console.log('This number is almost special');
  } else {
    console.log('Just a regular number');
  }
}

