import "./userView.css";
const PlantImageBox = ({img}) => {
  return (
    <div
      className='plantImageBox'
      onClick={() => window.open(img.image)}>
      <img
        src={img.image}
        alt='Project image'
        className='plantImage'
      />
    </div>
  );
};

export default PlantImageBox;
