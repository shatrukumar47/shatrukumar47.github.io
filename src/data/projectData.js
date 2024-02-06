//Notes
import Notes1 from "../assets/projects/Notes/1.png";
import Notes2 from "../assets/projects/Notes/2.png";
import Notes3 from "../assets/projects/Notes/3.png";
import Notes4 from "../assets/projects/Notes/4.png";
import Notes5 from "../assets/projects/Notes/5.png";

//Read Right
import RR1 from "../assets/projects/Read Right/1.png";
import RR2 from "../assets/projects/Read Right/2.png";
import RR3 from "../assets/projects/Read Right/3.png";
import RR4 from "../assets/projects/Read Right/4.png";
import RR5 from "../assets/projects/Read Right/5.png";
import RR6 from "../assets/projects/Read Right/6.png";
import RR7 from "../assets/projects/Read Right/7.png";
import RR8 from "../assets/projects/Read Right/8.png";
import RR9 from "../assets/projects/Read Right/9.png";
import RR10 from "../assets/projects/Read Right/10.png";
import RR11 from "../assets/projects/Read Right/11.png";

//Code Converter
import CC1 from "../assets/projects/Code Converter/1.png";

//Gen Chat
import GC1 from "../assets/projects/Gen Chat/1.png";
import GC2 from "../assets/projects/Gen Chat/2.png";
import GC3 from "../assets/projects/Gen Chat/3.png";
import GC4 from "../assets/projects/Gen Chat/4.png";

//quanta
import quanta1 from "../assets/projects/qunata/1.png";
import quanta2 from "../assets/projects/qunata/2.png";
import quanta3 from "../assets/projects/qunata/3.png";

//Pill Alert
// import PA1 from "../assets/projects/Pill Alert/1.png";
// import PA2 from "../assets/projects/Pill Alert/2.png";

export const projects = [
  {
    images: [Notes1, Notes2, Notes3, Notes4, Notes5],
    title: "Notes",
    description:
      "Welcome to our notes-taking application – the perfect tool to streamline your note-taking experience! Our user-friendly platform allows you to effortlessly create, update, and delete notes, ensuring that you have complete control over your information.",
    techStacks: [
      "Javascript",
      "React",
      "Redux",
      "Chakra UI",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Mongoose",
      "bcrypt",
      "JWT",
      "Nodemailer",
    ],
    githublink:
      "https://github.com/shatrukumar47/Full-Stack-Notes-Mini-Project",
    livelink: "https://notesshatru.netlify.app/",
  },

  {
    images: [RR1, RR2, RR3, RR4, RR5, RR6, RR7, RR8, RR9, RR10, RR11],
    title: "Read Right",
    description:
      "Welcome to Read Right, an advanced online platform that seamlessly integrates a feature-rich bookstore with a vibrant reading community. Explore, purchase, and engage with books while fostering a community-driven environment for discussions, reviews, and recommendations.",
    techStacks: [
      "Angular",
      "Tailwind CSS",
      "Javascript",
      "Nodejs",
      "Express JS",
      "MongoDB",
      "Mongoose",
      "bcrypt",
      "JWT",
      "OpenAI",
    ],
    githublink: "https://github.com/shatrukumar47/Read-Right",
    livelink: "https://read-right-shatru.vercel.app/",
  },

  {
    images: [CC1],
    title: "Code Converter",
    description:
      "A web tool for code conversion between programming languages, debugging, and code quality checks. Simplify coding tasks and enhance your development workflow.",
    techStacks: [
      "React",
      "Chakra UI",
      "Javascript",
      "Nodejs",
      "Express JS",
      "OpenAI",
      "Octokit",
      "Github API",
    ],
    githublink: "https://github.com/shatrukumar47/Code-Converter",
    livelink: "https://shatrucodeconverter.netlify.app/",
  },

  // {
  //   images: [ PA1, PA2],
  //   title: "Pill Alert",
  //   description:
  //     "Welcome to Pill Alert! This project is dedicated to simplifying medication management. Our mission is to help users track and manage their medications effectively by setting reminder to take pill on time.",
  //   techStacks: ["HTML5", "CSS3", "Javascript", "React", "Chakra UI"],
  //   githublink: "https://github.com/shatrukumar47/unwavering-squirrel-8299",
  //   livelink: "https://tangerine-dusk-0353ff.netlify.app/",
  // },

  {
    images: [GC1, GC2, GC3, GC4],
    title: "Gen Chat",
    description:
      "The Gen Chat App is a full-stack web application that leverages the power of artificial intelligence and natural language processing to provide a range of text-related features. It assist users in generating, summarizing, translating, and performing Multilingual Sentiment Analysis on text content.",
    techStacks: [
      "React",
      "Chakra UI",
      "Javascript",
      "Nodejs",
      "Express JS",
      "OpenAI",
    ],
    githublink: "https://github.com/shatrukumar47/AI-Content-Generation-App",
    livelink: "https://shatrugenchat.netlify.app/",
  },

  {
    images: [quanta1, quanta2, quanta3],
    title: "Quanta",
    description:
      "Quanta is an innovative interview platform that leverages the power of generative AI to revolutionize the way individuals prepare for interviews across various categories. Users can simulate interviews in their chosen field, receive real-time feedback, and gain valuable insights into their performance",
    techStacks: [
      "React",
      "Tailwind CSS",

      "Javascript",
      "Nodejs",
      "Express JS",
      "OpenAI",
    ],
    githublink: "https://github.com/Hasims2001/quanta",
    livelink: "https://enchanting-truffle-893185.netlify.app/",
  },
];
