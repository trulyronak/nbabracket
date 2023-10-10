import * as React from 'react';
import type { NextPage } from 'next';
import Layout from '../layout';
import { Text } from '../ui/atoms/text';
import { Button } from '../ui/atoms/button';
import * as NBA from 'react-nba-logos'
import { Box, Stack } from '@mui/system';
import { Team } from '../ui/molecules/Team'
import { AllTeams, EasternTeams, WesternTeams } from '../constants/nba';

const Home: NextPage = () => {
  const team: React.CSSProperties = {
    height: '100px',
    width: '100px'
  }

  return (
    <Layout>
      <Text as="h1">Bracket builder</Text>
      <Stack direction='row' alignContent='space-around'>
        <Stack>
          <Team teamOptions={WesternTeams} index={0} />
          <Team teamOptions={WesternTeams} index={1} />
          <Team teamOptions={WesternTeams} index={2} />
          <Team teamOptions={WesternTeams} index={3} />
          <Team teamOptions={WesternTeams} index={4} />
          <Team teamOptions={WesternTeams} index={5} />
          <Team teamOptions={WesternTeams} index={6} />
          <Team teamOptions={WesternTeams} index={7} />
        </Stack>
        <Stack>
          <Box sx={team} />
          <Team teamOptions={WesternTeams} index={0} />
          <Team teamOptions={WesternTeams} index={1} />
          <Box sx={team} />
          <Box sx={team} />
          <Team teamOptions={WesternTeams} index={0} />
          <Team teamOptions={WesternTeams} index={1} />
          <Box sx={team} />
        </Stack>
        <Stack>
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
          <Team teamOptions={WesternTeams} index={0} />
          <Team teamOptions={WesternTeams} index={1} />
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
        </Stack>
        <Stack>
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
          <Team teamOptions={WesternTeams} index={1} />
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
        </Stack>
        <Stack>
          <Box sx={team} />
          <Box sx={team} />
          <Team teamOptions={AllTeams} index={1} />
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
        </Stack>
        <Stack>
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
          <Team teamOptions={EasternTeams} index={1} />
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
        </Stack>
        <Stack>
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
          <Team teamOptions={EasternTeams} index={0} />
          <Team teamOptions={EasternTeams} index={1} />
          <Box sx={team} />
          <Box sx={team} />
          <Box sx={team} />
        </Stack>
        <Stack>
          <Box sx={team} />
          <Team teamOptions={EasternTeams} index={0} />
          <Team teamOptions={EasternTeams} index={1} />
          <Box sx={team} />
          <Box sx={team} />
          <Team teamOptions={EasternTeams} index={0} />
          <Team teamOptions={EasternTeams} index={1} />
          <Box sx={team} />
        </Stack>
        <Stack>
          <Team teamOptions={EasternTeams} index={0} />
          <Team teamOptions={EasternTeams} index={1} />
          <Team teamOptions={EasternTeams} index={2} />
          <Team teamOptions={EasternTeams} index={3} />
          <Team teamOptions={EasternTeams} index={4} />
          <Team teamOptions={EasternTeams} index={5} />
          <Team teamOptions={EasternTeams} index={6} />
          <Team teamOptions={EasternTeams} index={7} />
        </Stack>
      </Stack>

      <Text as="h2">Hello world</Text>
      <Text as="h3">Hello world</Text>
      <Text as="h4">Hello world</Text>
      <Text as="h5">Hello world</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nobis,
        maiores harum eius reprehenderit commodi tempora officiis? Nemo
        blanditiis voluptate inventore soluta corporis possimus commodi
        asperiores animi debitis iusto.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nobis,
        maiores harum eius reprehenderit commodi tempora officiis? Nemo
        blanditiis voluptate inventore soluta corporis possimus commodi
        asperiores animi debitis iusto.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nobis,
        maiores harum eius reprehenderit commodi tempora officiis? Nemo
        blanditiis voluptate inventore soluta corporis possimus commodi
        asperiores animi debitis iusto.
      </Text>
      <Text as="a">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic nobis,
        maiores harum eius reprehenderit commodi tempora officiis? Nemo
        blanditiis voluptate inventore soluta corporis possimus commodi
        asperiores animi debitis iusto.{' '}
      </Text>
      <Text as="figcaption"> Lorem ipsum dolor sit amet</Text>
    </Layout >
  );
};

export default Home;
