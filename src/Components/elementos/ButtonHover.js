import React, { useState } from "react";
import styled from "styled-components";




const ButtonHover = ({Img, ImgHover, onClick}) => {
  const imgs = [Img, ImgHover];
  const [bcgImg, setBcgImg] = useState(imgs[0]);
  return (
    <span
      onMouseEnter={() => setBcgImg(imgs[1])}
      onMouseLeave={() => setBcgImg(imgs[0])}
    >
       <img src={bcgImg} alt="bcgImage" onClick={()=>onClick()}/>
    </span>
  );
};
export default ButtonHover;
