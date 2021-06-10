/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import styles from "../../assets/jss/components/PaginationStyles";

const useStyles = makeStyles(styles);
const PaginationCCD = (props) => {
    const classes = useStyles();
    const { paginas } = props
    return (
        <>
          <Pagination count={paginas} classes={classes.root} ></Pagination>
        </>
    );
};
PaginationCCD.propTypes = {
    paginas: PropTypes.number,
};
export default PaginationCCD;