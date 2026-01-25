import React, { useState } from "react";

export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState(null);
  const [publicId, setPublicId] = useState(null);

  const handleUpload = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "doqpsv5wg",
        uploadPreset: "ram24102002", // replace this
        folder: "MobilityHub",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Uploaded Image:", result.info);

          setImageUrl(result.info.secure_url);
          setPublicId(result.info.public_id);
        }
      }
    );

    widget.open();
  };

  return (
    <div>
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Upload Image
      </button>

      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <img src={imageUrl} alt="Uploaded" width="300" />
          <p>Public ID: {publicId}</p>
        </div>
      )}
    </div>
  );
}
