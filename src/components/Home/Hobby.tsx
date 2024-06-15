"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import ImageViewer from 'react-simple-image-viewer';

import { images } from "./images";

export default function Hobby() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const imageSources = images.map(image => image.src) as string[];

  return (
    <section className="w-full py-12 md:py-24 lg:py-24">
      <div className="container mx-auto px-10 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 my-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Hobby</h2>
          </div>
        </div>

        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="grid gap-1">
              <Image
                alt={image.alt}
                className="object-cover"
                src={image.src}
                style={{
                  aspectRatio: ((image.width as number) / (image.height as number)),
                  objectFit: "cover",
                }}
                width={image.width}
                height={image.height}
                onClick={()=>openImageViewer(index)}
              />
            </div>
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={imageSources}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </section>
  );
}
