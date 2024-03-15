function splitString(str) {
    const wordsArray = str.split(" ");
    return wordsArray;
  }
  
  const sentence = "Rugby is a fun sport.";
  const words = splitString(sentence);
  console.log(words);
  