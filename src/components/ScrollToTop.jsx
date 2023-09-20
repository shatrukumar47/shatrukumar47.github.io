import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const listentoSroll = () => {
    let heightToHidden = 100;
    let scrolledHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrolledHeight >= heightToHidden) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listentoSroll);

    //cleanup
    return window.removeEventListener("scroll", listentoSroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Box className="scroll-top-container">
      {visible && (
        <Box className="scroll-to-top" onClick={handleScrollTop}>
          <FaArrowAltCircleUp className="scroll-btn-icon" />
        </Box>
      )}
    </Box>
  );
};

export default ScrollToTop;
