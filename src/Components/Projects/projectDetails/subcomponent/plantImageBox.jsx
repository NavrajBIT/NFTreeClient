import "./userView.css";
const PlantImageBox = ({ img }) => {
  return (
    <div className="plantImageBox" onClick={() => window.open(src)}>
      <img src={img.image} alt={img.name + " image"} className="plantImage" />
      <p className="plantImageText">{img.name}</p>
    </div>
  );
};

export default PlantImageBox;
