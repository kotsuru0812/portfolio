"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import type { PortfolioImage } from "@/components/Portfolio";

type PortfolioGalleryProps = {
  images: PortfolioImage[];
  title: string;
};

function PortfolioImageItem({
  image,
  alt,
  className,
}: {
  image: PortfolioImage;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      alt={alt}
      className={`object-cover ${className ?? ""}`}
      src={image.src}
      style={{
        aspectRatio: image.width / image.height,
        objectFit: "cover",
      }}
      width={image.width}
      height={image.height}
    />
  );
}

export default function PortfolioGallery({
  images,
  title,
}: PortfolioGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = images.length;

  const goTo = useCallback(
    (index: number) => {
      if (count <= 1) return;
      setCurrentIndex((index + count) % count);
    },
    [count]
  );

  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);
  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

  return (
    <>
      <div className="hidden md:flex md:flex-col md:gap-6">
        {images.map((image, index) => (
          <PortfolioImageItem
            key={image.src}
            image={image}
            alt={`${title} (${index + 1}/${count})`}
          />
        ))}
      </div>

      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={image.src} className="w-full shrink-0">
                <PortfolioImageItem
                  image={image}
                  alt={`${title} (${index + 1}/${count})`}
                />
              </div>
            ))}
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                aria-label="前の画像"
                onClick={goPrev}
                className="absolute left-0 top-0 bottom-0 w-12 bg-black/10 hover:bg-black/20 transition-colors"
              />
              <button
                type="button"
                aria-label="次の画像"
                onClick={goNext}
                className="absolute right-0 top-0 bottom-0 w-12 bg-black/10 hover:bg-black/20 transition-colors"
              />
            </>
          )}
        </div>

        {count > 1 && (
          <div
            className="flex justify-center gap-2 mt-4"
            role="tablist"
            aria-label={`${title}の画像`}
          >
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`画像 ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-gray-900 dark:bg-slate-200"
                    : "bg-gray-300 dark:bg-slate-600"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
