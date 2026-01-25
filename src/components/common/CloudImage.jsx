import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

export default function CloudImage({ publicId }) {
  const cld = new Cloudinary({
    cloud: { cloudName: "doqpsv5wg" }
  });

  const img = cld
    .image(publicId)
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return <AdvancedImage cldImg={img} />;
}
