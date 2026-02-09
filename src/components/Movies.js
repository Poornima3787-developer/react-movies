

function Movies(props){
  return (<div>
    <li key={props.id}>
        <h1>{props.title}</h1>
        <h2>{props.openingText}</h2>
        <p>{props.releaseDate}</p>
    </li>
  </div>)
}

export default Movies;