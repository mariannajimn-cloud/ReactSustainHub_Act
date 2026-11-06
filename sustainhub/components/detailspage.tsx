import { Initiative } from '../data/initiatives';


const DetailsPage = async({initiative, onBack, onVote} : {initiative : Initiative | undefined, onBack: () => void, onVote: (id: string) => void }) => {

    if(!initiative){
        
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-green-50 font-sans dark:bg-black">
            <p>ERROR Initiative not found</p>
        </div>
    );
    }

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-green-50 font-sans dark:bg-black">
            <button onClick={onBack} >
                Go Back 
            </button>
            <p>category: {initiative.category}, ID: {initiative.id}</p>
            <h1>title: {initiative.title}</h1>
            <p>Author: {initiative.author}</p>
            <p>Description: {initiative.description}</p>
            <p>votes: {initiative.votes}</p>
            <button onClick={() => onVote(initiative.id)}>VOTE</button>

        </div>
    );
}

export default DetailsPage;