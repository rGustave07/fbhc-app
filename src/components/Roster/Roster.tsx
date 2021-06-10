import * as React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ViewingMode } from '../../containers/RosterDisplay/RosterDisplay';

import GpiBronzePlayers from '../../assets/data/GPIBronze.json';
import GpiCopperPlayers from '../../assets/data/GPICopper.json';

import PlayerTable from '../PlayerTable';
import LinesDisplay from '../LinesDisplay';

import AppBar from '@material-ui/core/AppBar';
import styles from './Roster.module.css';

interface TabPanelProps {
    children?: React.ReactNode;
    classes?: any;
    index: any;
    value: any;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, classes, ...other } = props;

    return (
        <div
            role="tabpanel"
            className={classes}
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const a11yProps = (index: any) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}

interface RosterProps {
    viewingMode: ViewingMode;
}

const Roster = (props: RosterProps) => {
    const { viewingMode } = props;
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    }

    return (
        <div className={styles.container}>
            <AppBar position="static" color="default">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleTabChange}
                    aria-label="full width tabs"
                >
                    <Tab label="Group A" {...a11yProps(0)} />
                    <Tab label="Group B" {...a11yProps(1)} />
                </Tabs>

                { viewingMode === ViewingMode.RosterView ? (
                    <>
                        <TabPanel classes={styles.tabPanelScrollOver} value={value} index={0}>
                            <PlayerTable league="Copper" playerData={GpiCopperPlayers} />
                        </TabPanel>
                        <TabPanel classes={styles.tabPanelScrollOver} value={value} index={1}>
                            <PlayerTable league="Bronze" playerData={GpiBronzePlayers} />
                        </TabPanel>
                    </>
                ) : (
                    <>
                        <TabPanel classes={styles.tabPanelScrollOver} value={value} index={0}>
                            {/* <LinesDisplay playerData={GpiBronzePlayers}/> */}
                            <span>To be announced</span>
                        </TabPanel>
                        <TabPanel classes={styles.tabPanelScrollOver} value={value} index={1}>
                            <LinesDisplay playerData={GpiBronzePlayers}/>
                        </TabPanel>
                    </>
                )}
            </AppBar>
        </div>
    )
}

export default Roster
