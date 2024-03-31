import "../componentsStyles/SkillCard.css";

const SkillCard = ({ image, title }) => {
  return (
    <div className="skillcard-container">
      <div className="skillcard-content">
        <div className="skillcard-image">
          <img src={image} alt={title} />
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SkillCard;
