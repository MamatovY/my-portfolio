import React from "react";
import { SiNextdotjs } from 'react-icons/si'
import { FaReact } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import bishtao from "@/public/bishtao.png";
import chuy from "@/public/chuy-arhitektura.png";
import house from "@/public/house.kg.png";
import mchs from "@/public/mchs.png"
import marvel from "@/public/marvel.jpeg"


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
      "Мы разрабатываем и поддерживаем государственные проекты. Моя роль важна для обеспечения того, чтобы наши приложения были не только функциональными, но и имели современные и интуитивно понятные пользовательские интерфейсы, что делает взаимодействие граждан с ними более удобным. Мои обязанности включают в себя:Разработка интерфейсов, Оптимизация производительности, Сотрудничество в команде, Обучатся и развиваться",
    icon: React.createElement(SiNextdotjs),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "МЧС КР",
    description:
      "Государственный, Мультиязычный и адаптивный сайт, присутствует версия для слабовидящих.",
    tags: ["HTML", "SCSS", "JS", "bootstrap", "JQuery"],
    imageUrl: mchs,
    link: 'https://www.mchs.gov.kg/'
  },
  {
    title: "Чуйское управление по архитектуре",
    description:
      "Государственный, Мультиязычный и адаптивный сайт, присутствует версия для слабовидящих.",
    tags: ["React", "Redux/toolkit", "SCSS"],
    imageUrl: chuy,
    link: 'https://www.chuy-arhitektura.gov.kg/'
  },
  {
    title: "Bishtao-интернет магазин",
    description:
      "Принимал участие в разработке фронтенд-части. Мои обязанности включали верстку реализацию анимаций и эффектов и разработку фильтрации.",
    tags: ["HTML", "SCSS", "JS", "Bootstrap", "JQuery"],
    imageUrl: bishtao,
    link: 'http://bishtao.kg/'
  },
  {
    title: "Marvel",
    description:
      "Веб-приложение с использованием React, React-router-dom. Получает данные из сервера и выводит.",
    tags: ["React", "SCSS", "formik"],
    imageUrl: marvel,
    link: 'https://marvel01.netlify.app/'
  },
  {
    title: "House.kg-объявление недвижимости",
    description:
      "Создал и реализовал верстку сайта продажи домов, включая адаптивный и отзывчивый дизайн, семантическую вёрстку, интеграцию с API и оптимизацию производительности.",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: house,
    link: 'https://www.house.kg/'
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
