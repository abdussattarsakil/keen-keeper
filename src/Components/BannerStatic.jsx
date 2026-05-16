import { FaPlus } from "react-icons/fa";

const BannerStatic = () => {
    return (
        <div className="m-10">
            <div className="text-center space-y-5 container mx-auto">
                <h1 className="text-5xl font-bold">
                    Friends to keep close in your life
                </h1>
                <p className="text-gray-500">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.
                </p>
                <button className="flex items-center mx-auto gap-1 btn bg-green-800 text-white font-semibold">
                    <FaPlus />
                    Add A Friend
                </button>
            </div>

            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                <div className="text-center shadow-2xl p-10">
                    <h2 className="text-3xl font-semibold text-gray-600">10</h2>
                    <h1 className="text-gray-500 text-lg">Total Friends</h1>
                </div>
                <div className="text-center shadow-2xl p-10">
                    <h2 className="text-3xl font-semibold text-gray-600">10</h2>
                    <h1 className="text-gray-500 text-lg">Total Friends</h1>
                </div>
                <div className="text-center shadow-2xl p-10">
                    <h2 className="text-3xl font-semibold text-gray-600">10</h2>
                    <h1 className="text-gray-500 text-lg">Total Friends</h1>
                </div>
                <div className="text-center shadow-2xl p-10">
                    <h2 className="text-3xl font-semibold text-gray-600">10</h2>
                    <h1 className="text-gray-500 text-lg">Total Friends</h1>
                </div>
            </div>

            <div className="h-[px] border-t bg-gray-200 m-10 container mx-auto"></div>
        </div>
        
    );
};

export default BannerStatic;