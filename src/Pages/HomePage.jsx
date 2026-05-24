
import { Suspense } from "react";
import BannerStatic from "../Components/BannerStatic";
import AllCard from "../Components/AllCard";
import LoadingUi from "../Components/shared/LoadingUi";

const HomePage = () => {
    return (
        <div>
            <BannerStatic />
            <Suspense
                fallback={<LoadingUi></LoadingUi>}
            >
                <AllCard />
            </Suspense>
        </div>

    );
};

export default HomePage;