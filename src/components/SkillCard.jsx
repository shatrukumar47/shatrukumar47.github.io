import "../componentsStyles/SkillCard.css";

const SkillCard = ({ image, title }) => {
  return (
    <div className="skillcard-container">
      <div className="skillcard-content">
        <div className="skillcard-image">
          <img src={image} alt={title} width={"30px"} height={"34px"} title={title} loading="lazy" />
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SkillCard;
