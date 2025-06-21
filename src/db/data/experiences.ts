import { Skill } from "~/enums/skill";
import { ExperienceType } from "~/enums/experience-type";
import { Experience } from "../schema";

export const experiences: Experience[] = [
  {
    type: ExperienceType.dev,
    title: "Fullstack Developer",
    institution: "Ensino Ágil",
    img: "ea",
    start: "01/2025",
    location: "Remote",
    description:
      "As a full-stack developer, I have been contributing to the development of a white-label educational platform, working with Django for the backend and Angular for the frontend. My role involves building scalable solutions, ensuring seamless integration, and enhancing the platform's usability to meet the needs of educators and learners.",
    skills: [
      Skill.angular,
      Skill.typeScript,
      Skill.django,
      Skill.python,
      Skill.postgreSQL,
      Skill.git,
      Skill.gitHub,
    ],
  },
  {
    type: ExperienceType.tutor,
    title: "Private Teacher",
    institution: "Self-employed",
    img: "eu-quadrado.jpg",
    start: "03/2024",
    location: "Online",
    description:
      "I have been teaching Mathematics, Physics, and Chemistry to secondary education students since 2024, helping them to understand the subjects and improve their grades.",
    skills: [
      Skill.mathematics,
      Skill.physics,
      Skill.chemistry,
      Skill.pedagogy,
      Skill.communication,
      Skill.organization,
    ],
  },
  {
    type: ExperienceType.tutor,
    title: "Math Teacher",
    institution: "Curso Alberto Santos Dumont (CASD)",
    img: "casd",
    start: "03/2024",
    location: "São José dos Campos, SP",
    description:
      "Lecturing for over 200 students in the nationally recognized best beneficent course in Brazil, I am passionate about making a meaningful impact and look forward to changing the lives of 14- to 15-year-old low-income individuals. Through producing custom, original, and engaging educational material, I aim to inspire and empower students to reach their full potential.",
    skills: [
      Skill.mathematics,
      Skill.pedagogy,
      Skill.communication,
      Skill.organization,
      Skill.teamwork,
    ],
  },
  {
    type: ExperienceType.tutor,
    title: "Physics Teacher",
    institution: "Projeto GRADUA NÓIZ",
    img: "noiz",
    start: "06/2024",
    end: "01/2025",
    location: "Online",
    description:
      "Lecturing for underprivileged individuals aspiring to enter university, I am dedicated to providing opportunities for those who face socioeconomic challenges. By contributing to the Nóiz Projeto Social, I actively support community education initiatives, helping to bridge gaps and create pathways for personal and academic growth.",
    skills: [
      Skill.physics,
      Skill.pedagogy,
      Skill.communication,
      Skill.organization,
      Skill.teamwork,
    ],
  },
  {
    type: ExperienceType.tutor,
    title: "Physics Tutor",
    institution: "Colégio Bernoulli",
    img: "bernoulli",
    start: "02/2025",
    location: "Belo Horizonte, MG",
    description:
      "With experience in the ITA exam, I am committed to helping students clear their doubts and guiding them through the challenges of this rigorous test. By sharing my knowledge and strategies, I aim to empower students to achieve their academic goals and succeed in their journey toward entering one of Brazil's most prestigious institutions.",
    skills: [
      Skill.physics,
      Skill.pedagogy,
      Skill.communication,
      Skill.organization,
      Skill.teamwork,
      Skill.problemSolving,
    ],
  },
  {
    type: ExperienceType.proj,
    title: "Red Lib",
    institution: "Personal Project",
    img: "redlib",
    start: "06/2025",
    location: "Remote",
    description:
      "An all-in-one library platform for those who want to keep track of its favorite shows, animes, books... all works in one place.",
    skills: [
      Skill.elixir,
      Skill.phoenix,
      Skill.ecto,
      Skill.daisyUI,
      Skill.authentication,
      Skill.webSockets,
    ],
  },
  {
    type: ExperienceType.edu,
    institution: "Technological Institute of Aeronautics (ITA)",
    title: "BSc in Computer Engineering (INCOMPLETE)",
    img: "ita",
    start: "03/2024",
    end: "12/2024",
    location: "São José dos Campos, SP",
    description:
      "Studied basic engineering cycle and participated in initiatives such as ITA Bits, but I felt the curriculum lacked a stronger focus on computing rather than general engineering, so I decided to leave.",
    skills: [
      Skill.calculus,
      Skill.analyticalGeometry,
      Skill.physics,
      Skill.cPlusPlus,
      Skill.linearAlgebra,
    ],
  },
];
