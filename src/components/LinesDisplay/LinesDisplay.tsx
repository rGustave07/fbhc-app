import React from 'react'
import {
	Box,
	Collapse,
	IconButton,
	makeStyles,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow, 
	Typography
} from '@material-ui/core'

import {
	KeyboardArrowDown,
	KeyboardArrowUp
} from '@material-ui/icons';

type playerData = {
    name: string,
    number: number;
    position: string;
    confirmed: string;
    seniority: string;
}

interface Props {
	playerData: playerData[]
}

enum PlayerLining {
	FirstLine = 'First',
	SecondLine = 'Second',
	ThirdLine = 'Third',
}

enum PlayerPositions {
	Center = 'C',
	LeftWing = 'LW',
	RightWing = 'RW',
	RightDefense = 'RD',
	LeftDefense = 'LD'
}

interface Lines {
	firstForwardLine: {
		leftwing: string,
		center: string,
		rightwing: string,
	},
	secondForwardLine: {
		leftwing: string,
		center: string,
		rightwing: string,
	},
	firstDefensePair: {
		leftdefense: string,
		rightdefense: string,
	},
	secondDefensePair: {
		leftdefense: string,
		rightdefense: string,
	},
	thirdDefensePair: {
		leftdefense: string,
		rightdefense: string,
	}
}

const defaultLines: Lines = {
	firstForwardLine: {
		leftwing: '',
		center: '',
		rightwing: '',
	},
	secondForwardLine: {
		leftwing: '',
		center: '',
		rightwing: '',
	},
	firstDefensePair: {
		leftdefense: '',
		rightdefense: '',
	},
	secondDefensePair: {
		leftdefense: '',
		rightdefense: '',
	},
	thirdDefensePair: {
		leftdefense: '',
		rightdefense: '',
	}
}

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const LinesDisplay = (props: Props) => {
	const { playerData } = props
	const [ filteredAndSortedPlayers, setFilteredAndSortedPlayers ] = React.useState<Lines>(defaultLines);
	const [open, setOpen] = React.useState(false);

	const [flopen, setflOpen] = React.useState(false);
	const [slopen, setslOpen] = React.useState(false);
	const [tlopen, settlOpen] = React.useState(false);

	const classes = useRowStyles();

	const extractPlayerData = (player: playerData): {position: string, lining: string} => {
		const [lining, position] = player.position.split(' ');

		return {position, lining}
	}

	const renderTableData = (): any => {
		const lines = [
			{
				forwardLine: { ...filteredAndSortedPlayers.firstForwardLine },
				defensePair: { ...filteredAndSortedPlayers.firstDefensePair },
				lineName: "First Line",
				open: flopen,
				setOpenOption: setflOpen,
			},
			{
				forwardLine: { ...filteredAndSortedPlayers.secondForwardLine },
				defensePair: { ...filteredAndSortedPlayers.secondDefensePair },
				lineName: "Second Line",
				open: slopen,
				setOpenOption: setslOpen,
			},
			{
				defensePair: { ...filteredAndSortedPlayers.thirdDefensePair },
				lineName: "Third Line",
				open: tlopen,
				setOpenOption: settlOpen,
			}
		]

		return lines;
	}

	React.useEffect(() => {
		const filteredAndSorted = playerData.reduce((accumulator, currentValue): any => {
			// If goalie, don't map the display
			if (currentValue.position === 'Goalie') return accumulator;

			// Get position and lining
			const {
				position,
				lining
			} = extractPlayerData(currentValue);

			if (lining === PlayerLining.FirstLine) {
				if (position === PlayerPositions.Center){
					return {
						...accumulator,
						firstForwardLine: {
							...accumulator.firstForwardLine,
							center: currentValue.name
						}
					}
				}
				if (position === PlayerPositions.RightWing){
					return {
						...accumulator,
						firstForwardLine: {
							...accumulator.firstForwardLine,
							rightwing: currentValue.name
						}
					}
				}
				if (position === PlayerPositions.LeftWing){
					return {
						...accumulator,
						firstForwardLine: {
							...accumulator.firstForwardLine,
							leftwing: currentValue.name
						}
					}
				}
				if (position === PlayerPositions.LeftDefense){
					return {
						...accumulator,
						firstDefensePair: {
							...accumulator.firstDefensePair,
							leftdefense: currentValue.name
						}
					}
				}
				if (position === PlayerPositions.RightDefense){
					return {
						...accumulator,
						firstDefensePair: {
							...accumulator.firstDefensePair,
							rightdefense: currentValue.name
						}
					}
				}
			}
			if (lining === PlayerLining.SecondLine) {
				if (position === PlayerPositions.Center){
					return {
						...accumulator,
						secondForwardLine: {
							...accumulator.secondForwardLine,
							center: currentValue.name
						}
					}
				}
				if (position === PlayerPositions.RightWing){
					return {
						...accumulator,
						secondForwardLine: {
							...accumulator.secondForwardLine,
							rightwing: currentValue.name
						}
					}
				}
				if (position === PlayerPositions.LeftWing){
					return {
						...accumulator,
						secondForwardLine: {
							...accumulator.secondForwardLine,
							leftwing: currentValue.name
						}
					}}
				if (position === PlayerPositions.LeftDefense){
					return {
						...accumulator,
						secondDefensePair: {
							...accumulator.secondDefensePair,
							leftdefense: currentValue.name
						}
					}}
				if (position === PlayerPositions.RightDefense){
					return {
						...accumulator,
						secondDefensePair: {
							...accumulator.secondDefensePair,
							rightdefense: currentValue.name
						}
					}
				}
			}
			if (lining === PlayerLining.ThirdLine) {
				if (position === PlayerPositions.LeftDefense){
					return {
						...accumulator,
						thirdDefensePair: {
							...accumulator.thirdDefensePair,
							leftdefense: currentValue.name
						}
					}}
				if (position === PlayerPositions.RightDefense){
					return {
						...accumulator,
						thirdDefensePair: {
							...accumulator.thirdDefensePair,
							rightdefense: currentValue.name
						}
					}
				}
			}
		}, defaultLines)

		setFilteredAndSortedPlayers(filteredAndSorted);
	}, []);

	return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>{`Week of 6/13/2021`}</TableHead>
        <TableBody>
          {renderTableData().map((row: any) => (
            <React.Fragment>
				<TableRow className={classes.root}>
					<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => row.setOpenOption(!row.open)}
					>
						{row.open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					</IconButton>
					</TableCell>
					<TableCell align="left" size="small" component="th" scope="row">
						{row.lineName}
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell
						style={{ paddingBottom: 0, paddingTop: 0 }}
						colSpan={6}
					>
					<Collapse in={row.open} timeout="auto" unmountOnExit>
						<Box margin={1}>
						<Table size="small" aria-label="purchases">
							<TableHead>
							<TableRow>
								{(row.forwardLine) ? (
									<>
										<TableCell>Left Wing</TableCell>
										<TableCell>Center</TableCell>
										<TableCell>Right Wing</TableCell>
									</>
								): null}
								<TableCell>Left Defense</TableCell>
								<TableCell>Right Defense</TableCell>
							</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									{(row.forwardLine) ? (
										<>
											<TableCell component="th" scope="row">
												{row.forwardLine.leftwing}
											</TableCell>
											<TableCell>
												{row.forwardLine.center}
											</TableCell>
											<TableCell align="right">
												{row.forwardLine.rightwing && row.forwardLine.rightwing}
											</TableCell>
										</>
									): null}
								<TableCell>
									{row.defensePair.leftdefense}
								</TableCell>
								<TableCell>
									{row.defensePair.rightdefense}
								</TableCell>
								</TableRow>
							</TableBody>
						</Table>
						</Box>
					</Collapse>
					</TableCell>
				</TableRow>
			</React.Fragment>
          ))}
        </TableBody>
		<TableRow>
			<TableCell>
				Goalie: Dorsey Jordan
			</TableCell>
		</TableRow>
      </Table>
    </TableContainer>
  );
};

export default LinesDisplay;

