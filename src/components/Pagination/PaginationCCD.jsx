/*eslint-disable*/
import React, { useState } from 'react';
import { Route } from 'react-router';
import { Link, useLocation, useHistory, BrowserRouter } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/components/PaginationStyles";
const useStyles = makeStyles(styles);

export default function PaginationLink(props) {
  const classes = useStyles();
  const { totalPages, actualPage, fnc } = props;
  let location = useLocation();
//   let history = useHistory();
  // history.push(location.pathname+"/"+index);
  console.log(location.pathname);

  return (
    <BrowserRouter basename={"/gallery"} >
      <Route>
        {() => {
        //   const query = new URLSearchParams(location.search);
        //   const page = parseInt(query.get('page') || '1',totalPages);
        
          return (
            <Pagination
              page={actualPage}
              count={totalPages}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
              className={classes.root}
              color={"standard"}
              size={"large"}
              shape="rounded"
              onChange={() =>
                setState({
                  ...state,
                  sketch: state.sketch === sketch ? sketch2 : sketch
                })
              }
            />
          );
        }}
      </Route>
    </BrowserRouter>
  );
}