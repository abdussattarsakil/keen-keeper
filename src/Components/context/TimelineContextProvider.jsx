import { useState } from "react"
import { TimelineContext } from "./TimelineContext"
import { toast } from "react-toastify";

const TimelineContextProvider = ({ children }) => {

    const [TimelineUpdate, setTimelineUpdate] = useState([]);
    let [text, setText] = useState(0);
    let [call, setCall] = useState(0);
    let [video, setVideo] = useState(0);

    const handleTimelineData = (type, profileData) => {
        if (type === "Text") {
            setText(text + 1)
        }
        if (type === "Call") {
            setCall(call + 1)
        }
        if (type === "Video") {
            setVideo(video + 1)
        }
        const newData = {
            action: type,
            ...profileData,
            time: new Date().toISOString(),
        }

        setTimelineUpdate([...TimelineUpdate, newData])
        toast.success(`Congratulations you make a ${type}`)
    }




    const timelineData = {
        handleTimelineData,
        TimelineUpdate,
        text,
        call,
        video
    }

    return (
        <TimelineContext.Provider value={timelineData}>
            {children}
        </TimelineContext.Provider>
    )
}
export default TimelineContextProvider;