import {
  FETCH_IMG_FAILURE,
  FETCH_IMG_REQUEST,
  FETCH_IMG_SUCCESS,
} from "./actionType";
import { axios } from "axios";

const fetchImgRequest = () => {
  return {
    type: FETCH_IMG_REQUEST,
  };
};

const fetchImgSuccess = (data) => {
  return {
    type: FETCH_IMG_SUCCESS,
    payload: data,
  };
};

const fetchImgFailure = (err) => {
  return {
    type: FETCH_IMG_FAILURE,
    payload: err,
  };
};

const fetchImageList = () => {
  return (dispatch) => {
    dispatch(fetchImageList);
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        let _list = res.data;
        dispatch(fetchImgSuccess(_list));
      })
      .catch((err) => {
        dispatch(fetchImgFailure(err.message));
      });
  };
};
