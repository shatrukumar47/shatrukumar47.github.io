import "../componentsStyles/AnimatedButton.css";

const AnimatedButton = ({ children, background }) => {
  const styles = {
    buttonContainer: {
      background: background || "black",
      color: background || "white",
    },
  };
  return (
    <div className="button-container" style={styles.buttonContainer}>
      <div className="button-content">{children}</div>
    </div>
  );
};

export default AnimatedButton;
