"use client";

import { SAMPLE_INITIATIVES } from '../../../data/initiatives';
import  DetailsPage  from '../../../components/detailspage';

const individualPage = async({params} : {params: Promise<{id: string}>}) => {
    const {id} = await params;
    const individual = SAMPLE_INITIATIVES.find((item) => item.id === id);

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-green-50 font-sans dark:bg-black">
            <DetailsPage initiative={individual} onBack={() => console.log("go back")} onVote={(id) => console.log(`${id} votes +1`)}/>
        </div>
    );
}

export default individualPage;