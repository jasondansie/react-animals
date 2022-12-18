import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img
                src={`https://source.unsplash.com/500x400/?${props.name}`}
                alt={props.name}
            />
            <button className='remove' onClick={props.removeCard}>X</button>
            <h2>{props.name}</h2>
            <div className='likes_container'>
                <p className='likes'>likes: {props.likes}</p>
                <button className='addLikes' onClick={props.addLikes}>Add Like</button>
            </div>
        </div>
    );
}

export default Card;