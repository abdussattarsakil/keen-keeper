import { useContext } from "react";
import { TimelineContext } from "../Components/context/TimelineContext";

const TimeLine = () => {

    const {name, type}=useContext(TimelineContext);
    console.log(name, type);
    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default TimeLine;