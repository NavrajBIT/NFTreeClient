import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PlantImages = ({ details, notMyProject }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    try {
      poppulateImages();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const poppulateImages = async () => {
    const plantTypes = details?.project?.plant_types;
    const stringWithoutSpaces = plantTypes.replace(/\s/g, "");
    const plantTypesArray = stringWithoutSpaces.split(",");
    console.log(plantTypesArray);
    plantTypesArray.map((plant) => {
      fetchImages(plant);
    });
  };

  const fetchImages = async (treeType) => {
    let ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;
    const apiUrl = `https://api.unsplash.com/photos/random?query=${treeType}_plant&client_id=${ACCESS_KEY}`;
    fetch(apiUrl)
      .then(async (res) => {
        if (res.status === 200) {
          let data = await res.json();
          console.log(data);
          setImages((prev) => {
            let newArray = [...prev];
            newArray.push({ image: data.urls.full, name: treeType });
            return newArray;
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
        background: "var(--green-20)",
        padding: "var(--padding-main)",
        borderRadius: "var(--border-radius)",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "var(--padding-light)",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        Plant Images
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "var(--padding-light)",
        }}
      >
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <ImageCard image={image} key={"plant-image-" + index} />
          ))}
      </div>
    </div>
  );
};

export default PlantImages;

const ImageCard = ({ image }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={image.image} alt={image.id} className="imagecard" />
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{image.name}</div>
    </div>
  );
};
