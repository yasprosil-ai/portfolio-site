import "./globals.css";

export const metadata = {
  title: "Я спросил у ИИ | Сайты, лендинги, Telegram-боты, мини-аппы и MVP",
  description: "Я спросил у ИИ создаёт сайты, лендинги, Telegram-ботов, мини-аппы и MVP с помощью AI и вайбкодинга.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
