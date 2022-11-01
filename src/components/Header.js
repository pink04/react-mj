import * as React from 'react';
import ParticlesBg from 'particles-bg';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export function Header() {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [0.1, 0.9],
    position: 'all',
    color: ['random', '#ff0000'],
    cross: 'dead',
    random: 10,
  };

  return (
    <>
      <ParticlesBg type="custom" config={config} bg={true} />
      <Box
        onClick={handleClick}
        sx={[{ display: 'flex', justifyContent: 'center' }]}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            HOME
          </Link>
          <Link underline="hover" color="inherit" href="/">
            ABOUT
          </Link>
          <Link underline="hover" color="inherit" href="/">
            RESUME
          </Link>
          <Link underline="hover" color="inherit" href="/">
            WORKS
          </Link>
          <Link underline="hover" color="inherit" href="/">
            CONTACT
          </Link>
        </Breadcrumbs>
      </Box>
    </>
  );
}
