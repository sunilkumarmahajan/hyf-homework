// task 1. bad movies and bad movies since year 2000 
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response=>response.json())
.then(data=>{    
const badMovies = data.filter(movie=>movie.rating<=3);
console.log("count of badmovies are " + badMovies.length);
console.log(badMovies);  
const badMoviesSince2000= badMovies.filter(movie=>movie.year>=2000);
console.log("count of bad movies from year 2000 are " + badMoviesSince2000.length)
console.log(badMoviesSince2000)
}) 