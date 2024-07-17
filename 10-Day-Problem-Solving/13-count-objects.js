/**
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 */
function getCount(objects) {
  let ans=0;
  for(let i=0; i<objects.length; i++){
      if(objects[i].x==objects[i].y)ans++;
  }
  return ans; 
}