import { useState } from "react";

const imgList = [
  {
    path: "/img-slider/img1.jpg",
    caption: "Imaginea 1",
  },
  {
    path: "/img-slider/img2.jpg",
    caption: "Imaginea 2",
  },
  {
    path: "/img-slider/img3.jpg",
    caption: "Imaginea 3",
  },
  {
    path: "/img-slider/img4.jpg",
    caption: "Imaginea 4",
  },
  {
    path: "/img-slider/img5.jpg",
    caption: "Imaginea 5",
  },
  {
    path: "/img-slider/img6.jpg",
    caption: "Imaginea 6",
  },
  {
    path: "/img-slider/img7.jpg",
    caption: "Imaginea 7",
  },
  {
    path: "/img-slider/img8.jpg",
    caption: "Imaginea 8",
  },
  {
    path: "/img-slider/img9.jpg",
    caption: "Imaginea 9",
  },
  {
    path: "/img-slider/img10.jpg",
    caption: "Imaginea 10",
  },
];

export default function ImageSlider() {
  const [activeImage, setActiveImage] = useState(0);

  const increaseImg = () => {
    if (activeImage < 9) setActiveImage((prev) => prev + 1);
  };

  const decreaseImg = () => {
    if (activeImage > 0) setActiveImage((prev) => prev - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="image-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          width: "60vw",
        }}
      >
        <img
          src={imgList[activeImage].path}
          alt={imgList[activeImage].caption}
          style={{ maxWidth: "90vw", maxHeight: "60vh" }}
        />
        <p>{imgList[activeImage].caption}</p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button
          onClick={decreaseImg}
          style={{
            backgroundColor: "transparent",
            fontSize: "2rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          &larr;
        </button>
        <button
          onClick={increaseImg}
          style={{
            backgroundColor: "transparent",
            fontSize: "2rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
