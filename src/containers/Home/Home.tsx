import "../../App.css";
import "normalize.css";

import BackgroundImg from '../../components/BackgroundImg';
import RosterDisplay from '../../containers/RosterDisplay';

const Home = (): JSX.Element => {
    return (
        <div className="rootApp">
            <BackgroundImg />
            <RosterDisplay />
        </div>
    )
}

export default Home;

