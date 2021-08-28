import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
//import Link from "next/link";
function handleClick(event) {
  // event.preventDefault();
  // console.info('You clicked a breadcrumb.');
}

export default function HanoiBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Link color="inherit" href="/vietnam" onClick={handleClick}>
        Vietnam
      </Link>
      <Link color="inherit" href="/vietnam/hanoi" onClick={handleClick}>
        Hanoi
      </Link>
      
    </Breadcrumbs>
  );
}
