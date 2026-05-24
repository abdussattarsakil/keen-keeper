import { useState } from "react"
import { TimelineContext } from "./TimelineContext"
import { toast } from "react-toastify";

const TimelineContextProvider = ({ children }) => {

    const [TimelineUpdate, setTimelineUpdate] = useState([]);

    const handleTimelineData = (type, profileData) => {
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
        TimelineUpdate
    }

    return (
        <TimelineContext.Provider value={timelineData}>
            {children}
        </TimelineContext.Provider>
    )
}
export default TimelineContextProvider;