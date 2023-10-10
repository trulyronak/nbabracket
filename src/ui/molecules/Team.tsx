import { Autocomplete, ClickAwayListener, Popover, TextField, Typography, autocompleteClasses } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import * as Teams from 'react-nba-logos'
import { NBATeam } from '../../constants/nba'

const VALID_TEAM_NAMES = Object.entries(Teams).map(([teamCode]) => teamCode)

interface TeamProps {
    teamOptions: NBATeam[]
    index: number
}
export const Team: React.FC<TeamProps> = ({
    teamOptions, index
}: TeamProps) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (target: any) => {
        setAnchorEl(target);
    };

    const [selectedTeam, setTeam] = useState<NBATeam | null>(teamOptions[index] ?? null)

    const handleClose = () => {
        setAnchorEl(null);
    };

    const options = Object.entries(Teams).map(([code, image]) => ({
        code, image
    }))

    const open = Boolean(anchorEl)
    const id = open ? 'popover' : undefined;

    return <Box sx={{ width: '100px', height: '100px' }}>
        <>
            <Box sx={{ width: '100px', height: '100px' }} aria-describedby={id} onClick={(e) => handleClick(e.currentTarget)}>
                {selectedTeam ? <selectedTeam.logo /> : <Box sx={{ width: '100%', height: '100%', backgroundColor: 'lightgrey' }} />}
            </Box>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{ width: '200px' }}
            >
                <Autocomplete
                    sx={{
                        width: '200px',
                    }}
                    openOnFocus
                    id="free-solo-demo"
                    options={teamOptions.map(team => team.name)}
                    // renderOption={(props, option, state) => <Box
                    //     sx={{
                    //         borderRadius: '8px',
                    //         margin: '5px',
                    //         [`&.${autocompleteClasses.option}`]: {
                    //             padding: '8px',
                    //         },
                    //     }}
                    //     component="li"
                    //     {...props}
                    // >
                    //     {option.name}
                    // </Box>
                    // }
                    renderInput={(params) => <TextField {...params} label="choose team" />}
                    onChange={(event, chosenTeam) => {
                        if (chosenTeam !== null) {
                            const team = teamOptions.find(team => team.name === chosenTeam)
                            if (team) {
                                setTeam(team)
                                setAnchorEl(null)
                            }
                        }
                    }}
                />
            </Popover>
        </>
    </Box>
}