import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "../Components/context/TimelineContext";
import { Link } from "react-router";

const State = () => {
    const { call, text, video } = useContext(TimelineContext);
    const data = [
        { name: 'Call', value: call, fill: '#0088FE' },
        { name: 'Text', value: text, fill: '#00C49F' },
        { name: 'Video', value: video, fill: '#FFBB28' },
    ];
    return (<>
        <div className={`flex justify-center items-center my-10 ${call === 0 && text === 0 && video === 0 && "hidden"}`}>
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
        <div className={`flex justify-center items-center my-10 border border-dashed container mx-auto p-20 border-gray-300  ${call > 0 || text > 0 || video > 0 ? "hidden":""}`}>
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

export default State;