import { ComponentType } from 'react';
import * as Teams from 'react-nba-logos'

export interface NBATeam {
    code: string;
    logo: ComponentType;
    name: string;
    conference: 'West' | 'East'
}

export const NBA: Record<string, NBATeam> = {
    ATL: {
        code: 'ATL',
        logo: Teams['ATL'],
        name: 'Atlanta Hawks',
        conference: 'East'
    },
    BKN: {
        code: 'BKN',
        logo: Teams['BKN'],
        name: 'Brooklyn Nets',
        conference: 'East'
    },
    BOS: {
        code: 'BOS',
        logo: Teams['BOS'],
        name: 'Boston Celtics',
        conference: 'East'
    },
    CHA: {
        code: 'CHA',
        logo: Teams['CHA'],
        name: 'Charlotte Hornets',
        conference: 'East'
    },
    CHI: {
        code: 'CHI',
        logo: Teams['CHI'],
        name: 'Chicago Bulls',
        conference: 'East'
    },
    CLE: {
        code: 'CLE',
        logo: Teams['CLE'],
        name: 'Cleveland Cavaliers',
        conference: 'East'
    },
    DAL: {
        code: 'DAL',
        logo: Teams['DAL'],
        name: 'Dallas Mavericks',
        conference: 'West'
    },
    DEN: {
        code: 'DEN',
        logo: Teams['DEN'],
        name: 'Denver Nuggets',
        conference: 'West'
    },
    DET: {
        code: 'DET',
        logo: Teams['DET'],
        name: 'Detroit Pistons',
        conference: 'East'
    },
    GSW: {
        code: 'GSW',
        logo: Teams['GSW'],
        name: 'Golden State Warriors',
        conference: 'West'
    },
    HOU: {
        code: 'HOU',
        logo: Teams['HOU'],
        name: 'Houston Rockets',
        conference: 'West'
    },
    IND: {
        code: 'IND',
        logo: Teams['IND'],
        name: 'Indiana Pacers',
        conference: 'East'
    },
    LAC: {
        code: 'LAC',
        logo: Teams['LAC'],
        name: 'Los Angeles Clippers',
        conference: 'West'
    },
    LAL: {
        code: 'LAL',
        logo: Teams['LAL'],
        name: 'Los Angeles Lakers',
        conference: 'West'
    },
    MEM: {
        code: 'MEM',
        logo: Teams['MEM'],
        name: 'Memphis Grizzlies',
        conference: 'West'
    },
    MIA: {
        code: 'MIA',
        logo: Teams['MIA'],
        name: 'Miami Heat',
        conference: 'East'
    },
    MIL: {
        code: 'MIL',
        logo: Teams['MIL'],
        name: 'Milwaukee Bucks',
        conference: 'East'
    },
    MIN: {
        code: 'MIN',
        logo: Teams['MIN'],
        name: 'Minnesota Timberwolves',
        conference: 'West'
    },
    NOP: {
        code: 'NOP',
        logo: Teams['NOP'],
        name: 'New West Pelicans',
        conference: 'East'
    },
    NYK: {
        code: 'NYK',
        logo: Teams['NYK'],
        name: 'New York Knicks',
        conference: 'East'
    },
    OKC: {
        code: 'OKC',
        logo: Teams['OKC'],
        name: 'Oklahoma City Thunder',
        conference: 'West'
    },
    ORL: {
        code: 'ORL',
        logo: Teams['ORL'],
        name: 'Orlando Magic',
        conference: 'East'
    },
    PHI: {
        code: 'PHI',
        logo: Teams['PHI'],
        name: 'Philadelphia 76ers',
        conference: 'East'
    },
    PHX: {
        code: 'PHX',
        logo: Teams['PHX'],
        name: 'Phoenix Suns',
        conference: 'West'
    },
    POR: {
        code: 'POR',
        logo: Teams['POR'],
        name: 'Portland Trailblazers',
        conference: 'West'
    },
    SAC: {
        code: 'SAC',
        logo: Teams['SAC'],
        name: 'Sacramento Kings',
        conference: 'West'
    },
    SAS: {
        code: 'SAS',
        logo: Teams['SAS'],
        name: 'San Antonio Spurs',
        conference: 'West'
    },
    TOR: {
        code: 'TOR',
        logo: Teams['TOR'],
        name: 'Toronto Raptors',
        conference: 'East'
    },
    UTA: {
        code: 'UTA',
        logo: Teams['UTA'],
        name: 'Utah Jazz',
        conference: 'West'
    },
    WAS: {
        code: 'WAS',
        logo: Teams['WAS'],
        name: 'Washington Wizards',
        conference: 'East'
    }
}

export const WesternTeams = Object.values(NBA).filter((team) => team.conference === 'West')
export const EasternTeams = Object.values(NBA).filter((team) => team.conference === 'East')
export const AllTeams = Object.values(NBA)