import Movies from './Movies';

function MoviesList(props){
 return (<div>
    <ul>
      {props.movies.map(movie => (
        <Movies id={movie.id} title={movie.title} openingText={movie.openingText} realseDate={movie.realseDate}></Movies>
      ))}
    </ul>
 </div>)
}

export default MoviesList;