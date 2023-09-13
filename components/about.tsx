"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Обо мне");

  const birthDate: any = new Date('2002-06-28');
  // Текущая дата
  const currentDate: any = new Date();

  // Вычисляем разницу в миллисекундах между текущей датой и датой рождения
  const differenceInMilliseconds = currentDate - birthDate;

  // Вычисляем возраст в годах, округляя вниз
  const age = Math.floor(differenceInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Обо мне</SectionHeading>
      <p className="mb-3">
        Всем привет! Итак, вы уже знаете, что меня зовут <span className="font-medium">Ыйманбек</span>.
        Немного о себе: {age} лет, с детства люблю творчество, живу в г. Ош, Кыргызстан, диплом среднего образования (программист/техник), веб-разработку изучал самостоятельно по книгам, из ютуба и документаций.
        Почему именно программирование?
        Все элементарно - мне это <span className="underline">нравится</span>, профессия будущего, благодаря которой я смогу обеспечить себя и осуществить свои планы, на данный момент специализируюсь на <span className="font-medium">front-end разработке</span>.
        Мой основной стек — это <span className="font-medium">React, Next.js</span>.
        <span className="italic">Я всегда стремлюсь к изучению новых технологий</span>.
        Почему вы должны выбрать меня?
        К каждому заказу я подхожу с большой ответственностью и любовью, так как хочу заявить о себе, исключаю плагиат и небрежность, полностью изучаю проект, заказчика и его целевую аудиторию, работаю на качество, стараюсь сделать заказ максимально быстро и уникально, учитывая все правки и пожелания. Доверившись мне, вы получите максимальную отдачу от вашего проекта, сэкономите свои нервы и время. Если я Вас заинтересовал, Вы хотите узнать что-то больше или воспользоваться моими услугами, то ниже я укажу все свои контакты.
      </p>

    </motion.section>
  );
}
