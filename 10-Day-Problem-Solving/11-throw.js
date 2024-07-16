function isPositive(n) {
  if (n > 0) {
      return "YES";
  } else if (n === 0) {
      throw new Error("Zero Error");
  } else {
      throw new Error("Negative Error");
  }
}