/**This is the photo component that displays the li and img elements */
import React from "react";

const Photo = ({ src }) => {
  return (
    <li>
      <img
        src={`https://live.staticflickr.com/${src.server}/${src.id}_${src.secret}.jpg`}
        alt=""
      />
    </li>
  );
};
export default Photo;
