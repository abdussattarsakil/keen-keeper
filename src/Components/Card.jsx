
const Card = ({data}) => {
    console.log(data);
    return (
        <div className="">
             <div className="shadow-2xl rounded-2xl text-center py-7">
            <img className="w-25 rounded-full mx-auto" src={data.picture} alt={data.name}/>
            <h1>{data.name}</h1>
            <p>{data.days_since_contact}</p>
            <h2>{data.tags}</h2>
            <h2>{data.status}</h2>
        </div>
        </div>
       
    );
};

export default Card;