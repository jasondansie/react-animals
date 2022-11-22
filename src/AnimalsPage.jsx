import './AnimalsPage.css';

const Animals_page = (props) => {
    return (
        <div>
            <h1>Animals</h1>
            <div className='search'>
                <label htmlFor="search">search</label>
                <input type="text" name="search" onChange={props.searchHandler}></input>
            </div>
            <div className='cards'>{props.animalsList}</div>
        </div>
    );
}

export default Animals_page;