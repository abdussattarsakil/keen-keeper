import { useContext } from "react";
import { TimelineContext } from "../Components/context/TimelineContext";

import callImg from "/assets/call.png"
import videoImg from "/assets/video.png"
import textImg from "/assets/text.png"


const actionImages = {
    Call: callImg,
    Video: videoImg,
    Text: textImg
};


const TimeLine = () => {

    const { TimelineUpdate } = useContext(TimelineContext);
    console.log(TimelineUpdate);



    return (
        <div>
            {
                TimelineUpdate.map(data => (
                    <div className="container mx-auto m-10 p-10 shadow-2xl flex gap-5">
                        <img src={actionImages[data.action]} alt="" />
                        <div>
                            <h1>{data.action} <span>with {data.name}</span></h1>
                            <small>
                                {new Date(data.time).toLocaleString()}
                            </small>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default TimeLine;