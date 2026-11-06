import { Initiative } from '../data/initiatives';


const DetailsPage = async({initiative, onBack, onVote} : {initiative : Initiative | undefined, onBack: () => void, onVote: (id: string) => void }) => {

    if(!initiative){
        
    return(
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Initiative not found.</h2>
            <button onClick={onBack} className="text-emerald-600 hover:underline">Go Back</button>
        </div>
    );
    }

    return(
        <div className="max-w-4xl mx-auto px-4 py-10">
            <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-emerald-700 transition-colors mb-8 font-medium">
                Go Back 
            </button>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-emerald-50 px-8 py-10 border-b border-emerald-100">
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-emerald-800 font-medium">
                        <span className="flex items-center gap-1.5 bg-emerald-200/50 px-3 py-1 rounded-full text-sm">
                            {initiative.category}
                        </span>
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{initiative.title}</h1>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-gray-600">
                            <span>Proposed by <strong className="text-gray-900">{initiative.author}</strong></span>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-10">
                    <h3>Initiative Description</h3>
                    <p className="text-gray-700 leading-relaxed text-lg mb-10"> {initiative.description}</p>

                    <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between border border-gray-200">
                        <div className="flex items-center gap-3">
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Curent Votes</p>
                            <p className="text-2xl font-bold text-gray-900">{initiative.votes}</p>
                        </div>

                        <button onClick={() => onVote(initiative.id)} className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-md text-lg">
                            VOTE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;