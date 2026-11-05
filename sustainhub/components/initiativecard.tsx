import {Initiative} from '../data/initiatives';

const Initiativecard = ({item}:{ item: Initiative}) => {

    return(
        <div>
            <h2>{item.title}</h2>
            <p>{item.votes} votes</p>
            <button className='btn btn-blue'>VOTE</button>
        </div>
    )
}
export default Initiativecard;