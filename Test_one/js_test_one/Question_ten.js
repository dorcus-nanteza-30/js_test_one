function sumWithTripleCheck(num1, num2) {
    const totalSum = num1 + num2;
  
    if (num1 === num2) {
      totalSum *= 3;
    }
  
    console.log(`Sum of ${num1} and ${num2} (similar): ${totalSum}`);
    console.log(`Sum of 5 and 8 (different): ${num1 + num2}`);
  
    return totalSum;
  }
  
  const resultSimilar = sumWithTripleCheck(40, 40);
  console.log(`Result (similar): ${resultSimilar}`);
  
  const resultDifferent = sumWithTripleCheck(5, 8);
  console.log(`Result (different): ${resultDifferent}`);
  