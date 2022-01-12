import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
  } from "react-redux";

  import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootreducer";

const store=configureStore({
    reducer:  rootReducer
  });

const useSelector=useReduxSelector;
const useDispatch=useReduxDispatch;

export {store ,useSelector,useDispatch};