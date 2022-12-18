import './Birds.css';

const Birds = (props) => {
    return (
        <div>
            <h1>The Birds Page</h1>
            <div className='search'>
                <label htmlFor="search">search</label>
                <input type="text" name="search" onChange={props.searchHandler}></input>
            </div>
            <div className='cards'>{props.birds}</div>
        </div>
    );
}

export default Birds;
