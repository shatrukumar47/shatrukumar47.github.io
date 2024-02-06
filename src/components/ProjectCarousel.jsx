import React, { useEffect, useState, useRef } from "react";

const ProjectCarousel = ({ slides, w, h, dotSize, infinity, delay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (infinity) {
      startInfinity();
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [infinity]);

  function startInfinity() {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, delay);
  }

  const styles = {
    slideContainer: {
      width: w,
      height: h,
      margin: "auto",
      border: "2px solid white",
      position: "relative",
      boxShadow: "0px 0px 10px grey",
      userSelect: "none",
      overflow: "hidden",
    },
    slider: {
      width: "100%",
      height: "100%",
      display: "flex",
    },
    slide: {
      width: "100%",
      height: "100%",
      flex: "0 0 100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      transform: "translateX(0)",
      transition: "all 1s ease-in-out",
    },
    leftArrow: {
      position: "absolute",
      top: "50%",
      left: "20px",
      transform: "translate(0, -50%)",
      fontSize: "30px",
      fontWeight: "bold",
      cursor: "pointer",
      color: "white",
      zIndex: "1",
    },
    rightArrow: {
      position: "absolute",
      top: "50%",
      right: "20px",
      transform: "translate(0, -50%)",
      fontSize: "30px",
      fontWeight: "bold",
      cursor: "pointer",
      color: "white",
      zIndex: "1",
    },
    dotsContainer: {
      position: "absolute",
      bottom: "10px",
      left: "50%",
      transform: "translate(-50%, 0)",
      display: "flex",
      justifyContent: "center",
      gap: "10px",
    },
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return slides.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === slides.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <div style={styles.slideContainer}>
      <div style={styles.leftArrow} onClick={handlePrev}>
        {"<"}
      </div>
      <div style={styles.slider}>
        {slides?.map((img) => {
          return (
            <div
              style={{
                ...styles.slide,
                backgroundImage: `url(${img})`,
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            ></div>
          );
        })}
      </div>
      <div style={styles.rightArrow} onClick={handleNext}>
        {">"}
      </div>
      <div style={styles.dotsContainer}>
        <Dots
          slides={slides}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          dotSize={dotSize}
        />
      </div>
    </div>
  );
};

export default ProjectCarousel;

const Dots = ({ slides, currentIndex, setCurrentIndex, dotSize }) => {
  const styles = {
    dots: {
      cursor: "pointer",
      color: "white",
      fontSize: dotSize || "18px",
    },
  };

  return (
    <>
      {slides?.map((slide, index) => {
        return (
          <div
            key={index}
            style={{
              ...styles.dots,
              color: index === currentIndex ? "grey" : "white",
            }}
            onClick={() => setCurrentIndex(index)}
          >
            &#11044;
          </div>
        );
      })}
    </>
  );
};
