
const Card = ({data}) => {
    console.log(data);
    return (
        <div>
            <h1>{data.name}</h1>
            <h1>{data.id}</h1>
        </div>
    );
};

export default Card;