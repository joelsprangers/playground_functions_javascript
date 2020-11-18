

const favMovie = {
    title: 'Mean girls',
    duration: 53,
    stars: ['Kim K', 'Janice', 'Living Sneezes']
};


const printMovie = function(movie) {

    console.log(movie.title +' lasts for '+ movie.duration + ' minutes.'); 
    
    let starString = 'Stars: ';
    let starLength = movie.stars.length - 1;

        for(let i= 0; i < (movie.stars.length -1); i++) {
            starString = starString + movie.stars[i] + ', ';
        }
    
    starString += 'and '+ movie.stars[starLength] + '.';

    console.log(starString);
};

printMovie(favMovie);