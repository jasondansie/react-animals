import './Birds.css';
import Card from './Card';

const Birds = (props) => {

    const removeCardHandler = (name) => {
        console.log("remove card clicked", name);
        const updateArray = props.birds.filter(
            (bird) => bird.name !== name
        )
        return updateArray;
    }

    const birdsList = props.birds.map((bird) => {
        return (
            <Card
                key={bird.name}
                name={bird.name}
                likes={bird.likes}
                removeCard={() => removeCardHandler(bird.name)}
                addLikes={() => this.addlikeHandler(bird.likes)}
            />
        );
    });
    return (
        <div>
            <h1>The Birds Page</h1>
            <div className='search'>
                <label htmlFor="search">search</label>
                <input type="text" name="search" onChange={props.searchHandler}></input>
            </div>
            <div className='cards'>{birdsList}</div>
        </div>
    );
}

export default Birds;
