import React, { useEffect } from "react";
import { connect } from "react-redux";

const ImageGallery = (props) => {
  useEffect(() => {
    props.fetchimages();
  }, []);

  return props.imglist.loading ? (
    <div>image-gallery</div>
  ) : props.imglist.error ? (
    <h2>{props.imglist.error}</h2>
  ) : (
    <div>
      <h2>Image List</h2>
      {props.imglist &&
        props.imglist.data &&
        props.imglist.data.map((item) => <p>{item.title}</p>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    imgList: state.imglist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchimages: dispatch(fetchImageList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
