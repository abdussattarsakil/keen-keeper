import { Link } from "react-router";

const Card = ({ data }) => {
    // console.log(data);
    return (
        <div className="">
            <Link to={`profileDetails/${data.id}`}>
                <div className="shadow-sm rounded-2xl text-center py-7">
                    <img className="w-25 rounded-full mx-auto" src={data.picture} alt={data.name} />
                    <h1>{data.name}</h1>
                    <p>{data.days_since_contact}</p>
                    <h2>{data.tags}</h2>
                    <h2>{data.status}</h2>
                </div>
            </Link>
        </div>

    );
};

export default Card;