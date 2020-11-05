const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
rl.question('What is your name? ', (name) => {
  // TODO: Log the answer in a database
  
  console.log(`It is nice to meet you ${name}`);
  

rl.question('What is an activity you enjoy? ', (activity) => {
  // TODO: Log the answer in a database
  
  console.log(`Thanks! ${activity} sounds awesome!`);

rl.question('What do you listen to while doing that? ', (music) => {
  
   console.log(`${music} sounds perfect for that.`);

rl.question('Which meal of the day is your favortie? ', (meal) => {

   console.log(`Mmm, ${meal} is my favorite too!`);

rl.question('What is your favorite thing to eat for that meal? ', (food) => {

   console.log(`${food} is always a good choice, right?`);

rl.question('Which sport is your favorite? ', (sport) => {

   console.log(`${sport} is very exciting!`);

rl.question('What is your favorite superpower? ', (power) => {

   console.log(`Wow, that would be amazing!`)


   
   console.log("Here is your profile!");
   console.log(`${name} loves listening to ${music} while ${activity}, eating ${food} for ${meal}, 
   enjoys watching ${sport}, and would love to have the power of ${power}.`);

   rl.close();
})   
})   
})   
}) 
   
  })})
});
