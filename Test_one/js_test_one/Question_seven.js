function swapCase(str) {
    let newString = "";
    for (let char of str) {
      if (char === char.toLowerCase()) {
        // Convert to uppercase
        newString += char.toUpperCase();
      } else {
        // Convert to lowercase
        newString += char.toLowerCase();
      }
    }
  
    return newString;
  }

  const message = "SoCCer Is WoRlD";
  const swappedMessage = swapCase(message);
  
  console.log(swappedMessage); 
  