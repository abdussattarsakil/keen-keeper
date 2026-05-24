import { use } from "react";
import Card from "./Card";

const dataPromise =(async()=>{
    const res = await fetch("/data.json");
    const data = await res.json();

    await new Promise (resolve=> setTimeout(resolve,1000));

    return data
})();
const AllCard = () => {
    const allData = use(dataPromise);
    console.log(allData,"allCard async data fetch");
    return (
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {
                allData.map(data=>(
                    <Card data={data}></Card>
                ))
            }
        </div>
    );
};

export default AllCard;