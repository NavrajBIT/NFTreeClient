import "./userView.css";
const PlantImageBox = ({ src }) => {
  return (
    <div className="plantImageBox" onClick={() => window.open(src)}>
      <img src={src} alt="plant Image" className="plantImage" />
      <p className="plantImageText">Plant 1</p>
    </div>
  );
};

export default PlantImageBox;
