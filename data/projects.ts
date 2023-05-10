import chataw from "../public/projects_images/chataw.png";
import quizapp from "../public/projects_images/quizapp.png";
import rillby from "../public/projects_images/rillby.png";
import spes from "../public/projects_images/spes.png";

export const projects: IprojectCard[] = [
  {
    title: "Chataw",
    image: chataw,
    description:
      "A Real Time Chat App that allows people to discuss either on a private chat or a channel chat.",
    link: "https://chataw.vercel.app/home",
  },
  {
    title: "QuizApp",
    image: quizapp,
    description:
      "A quizapp that the user is supposed to respond to a series of questions about Javascript language.",
    link: "https://credo23.github.io/QuizApp/",
  },
  {
    title: "Rillby",
    image: rillby,
    description:
      "A streaming web site that consume the spotify API , its allow you to listen and have access to your spotify playlist and songs.",
    link: "https://streamingcr.netlify.app/",
  },
  {
    title: "Spes",
    image: spes,
    description:
      "A Quick Book app , its allow you to keep track your financials functions like incomes , expenses and can generate a repport.",
    link: "https://spes-sigma.vercel.app/",
  },
];
