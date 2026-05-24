import { Link } from "react-router";

const Card = ({ data }) => {
    // console.log(data);
    return (
        <div class="hover-3d shadow-sm rounded-2xl">

            <figure class="max-w-100">
                <Link to={`profileDetails/${data.id}`}>
                    <div className=" text-center py-7">
                        <img className="w-25 rounded-full mx-auto" src={data.picture} alt={data.name} />
                        <h1>{data.name}</h1>
                        <p>{data.days_since_contact}</p>
                        <h2>{data.tags}</h2>
                        <h2>{data.status}</h2>
                    </div>
                </Link>
            </figure>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Card;