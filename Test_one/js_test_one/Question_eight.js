////8a////
const starInfo = {
    name: "Peace Diane",
    country: "GERMARY",
    age: "66", 
  };
  
  const movieInfo = {
    title: "SPORTS BENEFITS",
    duration: 143,  
    star: starInfo,
  };
  
  console.log(movieInfo);


  ////8b///
  function logMovieInfo(movie) {
    const { title, duration, star } = movie;
  
    const { name, age, country } = star;
  
    console.log(`${title} lasts for ${duration} minutes. Star: ${name} is ${age} years old and born in ${country}`);
  }
  

  const movie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    star: {
      name: "Puff",
      country: "Uganda",
      age: 45,
    },
  };
  
  logMovieInfo(movie);
  
  