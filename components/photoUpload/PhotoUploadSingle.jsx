"use client"

import {useEffect, useState} from "react";
import Image from "next/image";

export default function PhotoUploadSingle({photo, setPhoto}) {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.target.files[0];
    if (file.type.startsWith("image/")) {
      setPhoto(file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type.startsWith("image/")) {
      setPhoto(file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  return (
    <div>
      <div className="space-y-6">
        {/* Drag-and-Drop Area */}
        <div
          className={`border-2 ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"
          } border-dashed rounded-md p-6 text-center`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p className="text-gray-500">
            Drag & drop your photo here, or{" "}
            <span className="text-blue-500 font-medium">browse</span>.
          </p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="fileInput"
            name="fileInput"
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileInput"
            className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm cursor-pointer hover:bg-blue-600"
          >
            Browse Files
          </label>
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">Preview</p>
            <Image
              src={preview}
              width={500}
              height={500}
              alt="Preview"
              className="w-full max-h-60 object-contain border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}