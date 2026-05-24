import { useLoaderData, useParams } from "react-router";
import callImg from "/assets/call.png"
import textImg from "/assets/text.png"
import videoImg from "/assets/video.png"
import { MdSnooze } from "react-icons/md";
import { RiArchiveLine, RiDeleteBin6Line } from "react-icons/ri";

const ProfileDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const { id } = useParams();
    // console.log(Number(id));


    const exceptedProfile = data.find(profile => profile.id === Number(id));
    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = exceptedProfile

    // console.log(name,goal);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 bg-gray-50 rounded-xl container mx-auto">

                {/* Left Side */}
                <div className="lg:col-span-3 space-y-3">

                    {/* Profile Card */}
                    <div className="bg-white rounded-xl shadow p-6 text-center">
                        <img
                            src={picture}
                            alt={name}
                            className="w-20 h-20 rounded-full mx-auto mb-3"
                        />

                        <h2 className="text-xl font-bold text-gray-800">
                            {name}
                        </h2>

                        <button className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full mt-2">
                            {status}
                        </button>
                        {
                            tags.map(tag => (
                                <div className="mt-2">
                                    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                </div>
                            ))
                        }


                        <p className="italic text-gray-500 mt-4">
                            {bio}
                        </p>

                        <p className="text-sm text-gray-400 mt-1">
                            Preferred: {email}
                        </p>
                    </div>

                    {/* Buttons */}
                    <button className="w-full py-3 btn">
                        <MdSnooze />
                        Snooze 2 Weeks
                    </button>

                    <button className="w-full py-3 btn">
                        <RiArchiveLine />
                        Archive
                    </button>

                    <button className="w-full py-3 btn text-red-500">
                        <RiDeleteBin6Line />
                        Delete
                    </button>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-9 space-y-4">

                    {/* Top Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="bg-white rounded-xl shadow p-6 text-center">
                            <h2 className="text-4xl font-bold text-green-900">{days_since_contact}</h2>
                            <p className="text-gray-500 mt-2">
                                Days Since Contact
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-6 text-center">
                            <h2 className="text-4xl font-bold text-green-900">{goal}</h2>
                            <p className="text-gray-500 mt-2">
                                Goal (Days)
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-6 text-center">
                            <h2 className="text-4xl font-bold text-green-900">
                                {next_due_date}
                            </h2>
                            <p className="text-gray-500 mt-2">
                                Next Due
                            </p>
                        </div>

                    </div>

                    {/* Relationship Goal */}
                    <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">

                        <div>
                            <h2 className="text-xl font-semibold text-green-900">
                                Relationship Goal
                            </h2>

                            <p className="text-gray-600 mt-2">
                                Connect every <span className="font-bold">{goal} days</span>
                            </p>
                        </div>

                        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
                            Edit
                        </button>
                    </div>

                    {/* Quick Check In */}
                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="text-xl font-semibold text-green-900 mb-4">
                            Quick Check-In
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            <button className="border rounded-xl py-6 hover:bg-gray-100 flex flex-col items-center">
                                <img src={callImg} alt="" />
                                <span className="mt-2">Call</span>
                            </button>

                            <button className="border rounded-xl py-6 hover:bg-gray-100 flex flex-col items-center">
                                <img src={textImg} alt="" />
                                <span className="mt-2">Text</span>
                            </button>

                            <button className="border rounded-xl py-6 hover:bg-gray-100 flex flex-col items-center">
                                <img src={videoImg} alt="" />
                                <span className="mt-2">Video</span>
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;