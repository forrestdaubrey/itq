First, I wrote the code 

for (let i = 1; i <=100; i++)
  console.log(i)
  
to get JavaScript to print the integers from 1 to 100.

Next, I put in the code

if (i % 3 === 0 && i % 5 === 0) {
  console.log("FizzBuzz")
  }
  
after the first line and with the console.log(i) line after the console.log("FizzBuzz") and before the }.
This added in the word FizzBuzz after each integer that is a multiple of 15, but each of these integers stayed in what JavaScript printed.

I was struggling to figure out how to get Javascript to not print the integers, and George showed me that "else" will stop JavaScript from printing the integers if you put it after the console.log("FizzBuzz") and before the console.log(i).
Doing this, JavaScript printed the integers 1-100 without each multiple of 15 and with "FizzBuzz" in its place.

I figured out that using else if with i % 5 === 0 and adding console.log("Buzz"), and using else if with i % 3 === 0 and adding console.log("Fizz") would replace multiples of 5 with Buzz and multiples of 3 with Fizz.

I made sure to add the right number of squiggly brackets and ran the code in the Eloquent JavaScript page, which printed the integers 1-100 with multiples of 3 replaced by Fizz, multiples of Buzz replaced by 5, and multiples of 15 replaced by FizzBuzz