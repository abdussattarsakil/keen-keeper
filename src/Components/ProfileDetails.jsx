import { useLoaderData, useParams } from "react-router";

const ProfileDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const {id} =useParams();
    console.log(Number(id));
    return (
        <div>
            
        </div>
    );
};

export default ProfileDetails;