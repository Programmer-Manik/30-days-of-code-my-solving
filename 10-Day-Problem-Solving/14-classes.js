class Polygon{
  constructor(a){
      this.b=a;
  }
  perimeter(){
      let sum=0;
      for(let i=0; i<this.b.length;i++){
          sum+=this.b[i]
      }
      return sum;
  } 
}
