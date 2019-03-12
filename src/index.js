/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let number = 0;  
  for (let i = 0; i<preferences.length; i++) { 
      let first = preferences[i] - 1;
      if (first == i) continue;
      let second = preferences[first] - 1;
      if (first == second) continue;
      let fird = preferences[second] - 1;
      if (fird == second) continue;
      if (fird == i) {
          number++;
      }
   }
   return Math.round(number) / 3;
}
