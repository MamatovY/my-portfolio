import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Ыйманбек. Все права защищены.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Об этом веб-сайте:</span> создан с помощью
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, хостинг Vercel.
      </p>
    </footer>
  );
}
