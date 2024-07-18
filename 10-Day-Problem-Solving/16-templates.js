function sides(literals, ...expressions) {
  let a = expressions[0];  // area
  let p = expressions[1];  // perimeter
  
  // Calculate the side lengths using the quadratic formula
  let s1 = (p + Math.sqrt((p * p) - (16 * a))) / 4;
  let s2 = (p - Math.sqrt((p * p) - (16 * a))) / 4;
  
  // Create an array of the side lengths
  let array = [s1, s2];
  
  // Sort the array in ascending order
  array.sort((x, y) => x - y);
  
  return array;
}

