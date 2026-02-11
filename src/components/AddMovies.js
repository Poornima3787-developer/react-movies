import {useRef} from 'react';

function AddMovies(props){
    const titleRef=useRef('');
    const openingTextRef=useRef('');
    const releaseDateRef=useRef('');

    const submitHandler=(e)=>{
      e.preventDefault();
      const movie={
        title:titleRef.current.value,
        openingText:openingTextRef.current.value,
        releaseDate:releaseDateRef.current.value
      }
      props.onAddMovie(movie);
      titleRef.current.value = '';
    openingTextRef.current.value = '';
    releaseDateRef.current.value = '';
    }
    return (<form onSubmit={submitHandler}>
        <div>
            <label htmlFor='title'>Title</label>
            <input type="text" id="title" ref={titleRef}/>
        </div>
        <div>
            <label htmlFor='opening-text'>Opening Text</label>
            <input type="text" id="opening-text" ref={openingTextRef}/>
        </div>
        <div>
            <label htmlFor='date'>Release Date</label>
            <input type="date" id="date" ref={releaseDateRef}/>
        </div>
        <button>Add Movie</button>
    </form>)
}

export default AddMovies;