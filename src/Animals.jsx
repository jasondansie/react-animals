import './Animals.css';
import Card from './Card';

const Animals = (props) => {

    const removeCardHandler = (name) => {
        console.log("remove card clicked", name);
        const updateArray = props.animals.filter(
            (animal) => animal.name !== name
        )
        return updateArray;
    }

    const addLikeHandler = (name) => {
        console.log("add like clicked");
        this.state((state) => {
            const updateArray = props.animals.map((animal) => {
                if (animal.name === name) {
                    return { ...animal, likes: animal.likes + 1 };
                } else {
                    return animal;
                }
            });
            return updateArray;
        });
    }

    const searchHandler = (event) => {
        this.setState({ search: event.target.value })
        console.log(event.target.value);
    }

    const animalFilter = (animals) => {
        props.animals.filter((animal) => {
            return animal.name.includes(this.state.search);
        });
    }

    const animalsList = props.animals.map((animal) => {
        return (
            <Card
                key={animal.name}
                name={animal.name}
                likes={animal.likes}
                removeCard={() => removeCardHandler(animal.name)}
                addLikes={() => this.addlikeHandler(animal.likes)}
            />
        );
    });
    return (

        <div>
            <h1>Animals</h1>
            <div className='search'>
                <label htmlFor="search">search</label>
                <input type="text" name="search" onChange={props.searchHandler}></input>
            </div>
            <div className='cards'>{animalsList}</div>
        </div>
    );
}

export default Animals;