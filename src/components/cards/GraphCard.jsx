import '../../styles/styleGuide/Typography.sass';
import '../../styles/cards/GraphCard.sass';
import BrazilChart from '../graphs/BrazilChart';
import PieChart from '../graphs/PieChart';

export default function GraphCard({data, title, type}) {
    const graphSelection = () => {
        if (type === "map") {
            return (<BrazilChart data={data}></BrazilChart>)
        } else if (type === "pie") {
            return (<PieChart data={data}></PieChart>)
        }
    }
    return (
        <div className='data-card container-fluid'>
            <h3 id="graph-title" className='.transparency-card-title'>{title}</h3>
            {graphSelection()}
        </div>
    );
};