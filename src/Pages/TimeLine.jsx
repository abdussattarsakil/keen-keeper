import { useContext, useState } from "react";
import { TimelineContext } from "../Components/context/TimelineContext";

import callImg from "/assets/call.png"
import videoImg from "/assets/video.png"
import textImg from "/assets/text.png"
import { RxDropdownMenu } from "react-icons/rx";
import { Link } from "react-router";


const actionImages = {
    Call: callImg,
    Video: videoImg,
    Text: textImg
};


const TimeLine = () => {

    const { TimelineUpdate, text, call, video } = useContext(TimelineContext);
    // console.log(text);



    // filter state
    const [filter, setFilter] = useState("All");

    // filtered data
    const filteredTimeline =
        filter === "All" ? TimelineUpdate : TimelineUpdate.filter(
            data => data.action === filter
        );


    return (<>
        <h1 className="text-3xl font-bold my-10 container mx-auto">Timeline</h1>
        <div className={`container mx-auto my-10 ${call === 0 && text === 0 && video === 0 && "hidden"}`}>

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



        <div className={`flex justify-center items-center my-10 border border-dashed container mx-auto p-20 border-gray-300  ${call > 0 || text > 0 || video > 0 ? "hidden" : ""}`}>
            <div className="text-center max-w-md">

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Oops! No data here
                </h2>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    It looks like there is nothing here.
                </h2>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
                >
                    Go Back Home
                </Link>

            </div>
        </div>
    </>
    );
};

export default TimeLine;