//Images
import HTML from "../assets/Images/html.png";
import CSS from "../assets/Images/css.png";
import JavaScript from "../assets/Images/js.png";
import ReactLogo from "../assets/Images/react.png";
import Redux from "../assets/Images/Redux.png";
import Chakra from "../assets/Images/chakra.png";
import Typescript from "../assets/Images/Typescript.png";
import mongoDB from "../assets/Images/mongoDB.png";
import ExpressJS from "../assets/Images/ExpressJS.png";
import nodejs from "../assets/Images/ndoejs.png";
import Postman from "../assets/Images/Postman.png";
import Github from "../assets/Images/Github.png";
import Angular from "../assets/Images/angular.png";
import Tailwind from "../assets/Images/tailwind css.png";
import PromptEngineering from "../assets/Images/prompt engineering.png";
import styledComponent from "../assets/Images/styledcomponent.png";

export const techSkills = [
  {
    section: "Frontend",
    skills: [
      { title: "HTML", image: HTML },
      { title: "CSS", image: CSS },
      { title: "JavaScript", image: JavaScript },
      { title: "React", image: ReactLogo },
      { title: "Redux", image: Redux },
      { title: "Angular", image: Angular },
      { title: "Typescript", image: Typescript },
    ],
  },
  {
    section: "UI Frameworks",
    skills: [
      { title: "Tailwind CSS", image: Tailwind },
      { title: "Chakra UI", image: Chakra },
      { title: "Styled Components", image: styledComponent },
    ],
  },
  {
    section: "Backend",
    skills: [
      { title: "Node JS", image: nodejs },
      { title: "Express JS", image: ExpressJS },
    ],
  },
  {
    section: "Databases",
    skills: [{ title: "Mongo DB", image: mongoDB }],
  },
  {
    section: "Development Tools",
    skills: [
      { title: "Postman", image: Postman },
      { title: "Github", image: Github },
    ],
  },
  {
    section: "Additional Skills",
    skills: [{ title: "Prompt Engineering", image: PromptEngineering }],
  },
];
