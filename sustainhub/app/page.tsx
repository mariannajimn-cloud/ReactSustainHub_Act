import {SAMPLE_INITIATIVES} from '../data/initiatives';
import Initiativecard from '../components/initiativecard';

export default function Home() {
  return (
    <div>
      <main >
        <h1> Climate Action Initiatives</h1>
        <div className="row g-4">
          {SAMPLE_INITIATIVES.map((item) => (
            <Initiativecard key={item.id} item={item}/>
          ))}
        </div>
      </main>
    </div>
  );
}