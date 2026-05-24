import { Link } from "react-router";

const Card = ({ data }) => {
    // console.log(data);
    return (
        <div className="transition-transform duration-3000 ease-in-out hover:scale-120">
            <Link to={`profileDetails/${data.id}`}>
                <div className="shadow-2xl rounded-2xl text-center py-7 cursor-pointer">
                    <img className="w-25 rounded-full mx-auto" src={data.picture} alt={data.name} />

                    <h1 className="text-xl font-semibold">{data.name}</h1>

                    <p className="text-sm text-gray-400">{data.days_since_contact}d ago</p>


                    {
                        data.tags.map(tag => (
                            <div className="mt-2">
                                <span className={`bg-green-100 text-xs px-3 py-1 rounded-full`}>
                                    {tag}
                                </span>
                            </div>
                        ))
                    }


                    <h2 className={`
                        ${data.status == "on-track" && "text-green-500"}
                        ${data.status == "overdue" && "text-red-500"}
                        ${data.status == "almost due" && "text-yellow-500"}                        
                        `}>{data.status}</h2>
                </div>
            </Link>
        </div>

    );
};

export default Card;