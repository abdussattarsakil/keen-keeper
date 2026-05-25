import { useContext, useState } from "react";
import { TimelineContext } from "../Components/context/TimelineContext";

import callImg from "/assets/call.png"
import videoImg from "/assets/video.png"
import textImg from "/assets/text.png"
import { RxDropdownMenu } from "react-icons/rx";


const actionImages = {
    Call: callImg,
    Video: videoImg,
    Text: textImg
};


const TimeLine = () => {

    const { TimelineUpdate } = useContext(TimelineContext);
    console.log(TimelineUpdate);



    // filter state
    const [filter, setFilter] = useState("All");

    // filtered data
    const filteredTimeline =
        filter === "All" ? TimelineUpdate : TimelineUpdate.filter(
            data => data.action === filter
        );

        
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-3xl font-bold my-10">Timeline</h1>

            <div class="dropdown dropdown-start">
                <div tabIndex="0" role="button" class="btn w-full m-1 p-5 flex justify-between">Filter timeline <RxDropdownMenu /></div>
                <ul tabIndex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>
                        <button onClick={() => setFilter("All")}>
                            All
                        </button>
                    </li>

                    <li>
                        <button onClick={() => setFilter("Text")}>
                            Text
                        </button>
                    </li>

                    <li>
                        <button onClick={() => setFilter("Call")}>
                            Call
                        </button>
                    </li>

                    <li>
                        <button onClick={() => setFilter("Video")}>
                            Video
                        </button>
                    </li>
                </ul>
            </div>

            {
                filteredTimeline.map(data => (
                    <div className="p-5 shadow-xl flex gap-5 rounded-2xl my-4">
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