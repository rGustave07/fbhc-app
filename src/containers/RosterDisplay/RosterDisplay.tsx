import { Button } from '@material-ui/core';
import Fblogo from '../../assets/icons/fblogoclipped.png';
import Roster from '../../components/Roster';

import { Link } from 'react-router-dom';

import styles from './RosterDisplay.module.css';
import React from 'react';

export enum ViewingMode {
    RosterView = 0,
    LineView = 1,
}

const RosterDisplay = (): JSX.Element => {
    const [viewingMode, setViewingMode] = React.useState(ViewingMode.RosterView);

    const toggleView = (): void => {
        if (viewingMode === ViewingMode.RosterView) {
            setViewingMode(ViewingMode.LineView)
        }

        if (viewingMode === ViewingMode.LineView) {
            setViewingMode(ViewingMode.RosterView)
        }
    }

    return (
        <div className={styles.columnContainer}>
            <h1 className={styles.titleText}>
                Frozen Boars Hockey Club Tentative Roster
            </h1>
            <img src={Fblogo} className={styles.logo} alt="logo" />
            <Roster viewingMode={viewingMode}/>

            <Button
                variant="contained"
                color="primary"
                onClick={toggleView}
            >
                    {viewingMode === ViewingMode.RosterView ? `View Lines` : `View Roster`}
            </Button>
        </div>
    )
}

export default RosterDisplay
