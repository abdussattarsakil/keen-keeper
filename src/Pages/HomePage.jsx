
import { Suspense } from "react";
import BannerStatic from "../Components/BannerStatic";
import AllCard from "../Components/AllCard";

const HomePage = () => {
    return (
        <div>
            <BannerStatic />
            <Suspense
                fallback={
                    <div className="container mx-auto mt-10 px-4">
                        {/* Title Skeleton */}
                        <div className="flex justify-center mb-10">
                            <div className="skeleton h-12 w-64"></div>
                        </div>

                        {/* Cards Skeleton */}
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                            {[...Array(6)].map((_, index) => (
                                <div
                                    key={index}
                                    className="border border-base-300 rounded-2xl p-5 shadow-sm space-y-4"
                                >
                                    {/* Image */}
                                    <div className="skeleton h-56 w-full rounded-xl"></div>

                                    {/* Title */}
                                    <div className="skeleton h-6 w-3/4"></div>

                                    {/* Author */}
                                    <div className="skeleton h-4 w-1/2"></div>

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <div className="skeleton h-4 w-full"></div>
                                        <div className="skeleton h-4 w-full"></div>
                                        <div className="skeleton h-4 w-2/3"></div>
                                    </div>

                                    {/* Button */}
                                    <div className="pt-3">
                                        <div className="skeleton h-10 w-32 rounded-lg"></div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                }
            >
                <AllCard />
            </Suspense>
        </div>

    );
};

export default HomePage;