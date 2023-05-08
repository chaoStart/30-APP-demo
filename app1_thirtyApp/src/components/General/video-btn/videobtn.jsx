import React, { Component } from "react";
import { useEffect, useState } from "react";
import styles from "./video-btn.module.css";
import "./videobtn.css";
const HomeVideoBtn = (props) => {
  useEffect(() => { }, []);
  const {
    videosrc,
    openurl,
    poster,
    style,
    videosetting,
    videostyle,
    btnstyle,
    btnsetting,
  } = props;
  return (
    <div className={styles.video_btn_item} style={{ ...style }}>
      <video
        className={styles.cvideo}
        {...videosetting}
        {...videostyle}
        muted
        disablePictureInPicture
        poster={poster}
        src={videosrc}
        onClick={() => {
          window.open(openurl, "target", "");
        }}
      >
        您的浏览器不支持 video 标签。
      </video>
    </div>
  );
};

export default HomeVideoBtn;
