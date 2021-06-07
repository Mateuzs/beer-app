// external
import { FunctionComponent, memo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// types
import { LazyLoadImageContainerProps } from "../../types";
// constanst, utils
import {
  LOADING_INFO,
  IMAGE_NOT_AVAILABLE_INFO,
  IMAGE_URL_PLACEHOLDER,
  LAZY_IMAGE_BLUR_EFFECT,
} from "../../constants";
// styles
import "./LazyLoadImageContainer.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoadImageContainer: FunctionComponent<LazyLoadImageContainerProps> = ({
  imageUrl,
  height,
}) => {
  const isImagePlaceholder = imageUrl === IMAGE_URL_PLACEHOLDER;

  return imageUrl && !isImagePlaceholder ? (
    <LazyLoadImage src={imageUrl} height={height} effect={LAZY_IMAGE_BLUR_EFFECT} />
  ) : (
    <div className="image-info-container">
      <p>{isImagePlaceholder ? LOADING_INFO : IMAGE_NOT_AVAILABLE_INFO}</p>
    </div>
  );
};

export default memo(LazyLoadImageContainer);
