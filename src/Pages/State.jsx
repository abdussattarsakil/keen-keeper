import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "../Components/context/TimelineContext";

const State = () => {
    const {call,text,video} =useContext(TimelineContext);
    const data = [
        { name: 'Call', value: call, fill: '#0088FE' },
        { name: 'Text', value: text, fill: '#00C49F' },
        { name: 'Video', value: video, fill: '#FFBB28' },
    ];
    return (
        <div className="flex justify-center items-center my-10">
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
            </PieChart>

        </div>
    );
};

export default State;