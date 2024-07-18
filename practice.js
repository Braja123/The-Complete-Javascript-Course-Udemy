const jonas = [
  'gopal',
  'das',
  26,
  'sanu',
  [1,2,3,4],
  true
]
// continue is to exit the current iteration of the loop and continue to the next one
// for(let i=0; i<jonas.length; i++) {
//   if(typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// break is used to completely terminate the whole loop 
for(let i=0; i<jonas.length; i++) {
  if(typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}