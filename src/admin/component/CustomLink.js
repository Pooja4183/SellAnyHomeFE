import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  '&:hover': {
    textDecoration: 'none',
  },
}));

const CustomLink = ({ to, children }) => {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  );
};

export default CustomLink;
