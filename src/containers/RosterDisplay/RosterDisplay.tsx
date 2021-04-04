import Fblogo from '../../assets/icons/fblogoclipped.png';
import Roster from '../../components/Roster';

import styles from './RosterDisplay.module.css';


const RosterDisplay = () => {
    return (
        <div className={styles.columnContainer}>

            <h1 className={styles.titleText}>
                Frozen Boars Hockey Club Tentative Roster
            </h1>
            <img src={Fblogo} className={styles.logo} alt="logo" />

            <Roster />
        </div>
    )
}

export default RosterDisplay
