import React from "react";
import { SiNextdotjs } from 'react-icons/si'
import { FaReact } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";


export const links = [
  {
    name: "Главный",
    hash: "#home",
  },
  {
    name: "Обо мне",
    hash: "#about",
  },
  {
    name: "Проекты",
    hash: "#projects",
  },
  {
    name: "Скиллы",
    hash: "#skills",
  },
  {
    name: "Опыт работы",
    hash: "#experience",
  },
  {
    name: "Контакт",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Верстальщик",
    location: "House.kg",
    description:
      "Разработка пользовательских интерфейсов для веб-приложений, которые используются внутри компании или для клиентов. Разработка и поддержка веб-сайта компании, включая создание и редактирование статических страниц, форм и других элементов веб-интерфейса. Тестирование и отладка фронтенда в различных браузерах и устройствах. Оптимизация производительности фронтенда для быстрой загрузки и отзывчивости интерфейса",
    icon: React.createElement(LuLayoutDashboard),
    date: "2021 - 2022",
  },
  {
    title: "Frontend Junior, Junior+",
    location: "ITEK",
    description:
      "Мои обязанности на рабочем месте включают разработку и поддержку пользовательского интерфейса, реализацию функциональности с использованием React и Redux-thunk, Redux-toolkit, участие в код-ревью, оптимизацию производительности и поддержку совместимости с различными браузерами. Кроме того, я активно взаимодействую с другими членами команды, участвую в совещаниях и обсуждениях, а также стремлюсь к постоянному обучению и применению передовых практик в области веб-разработки.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Frontend middle developer",
    location: "ОсСАФ-Технолоджи",
    description:
      "Занимаемся гос. проектами",
    icon: React.createElement(SiNextdotjs),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Redux-Toolkit",
  "Redux-thunk",
  "Framer Motion",
  "swiper",
  "formik",
  "yup",
  "react-transition-group",
  "axios",
  "SASS/SCSS",
] as const;
