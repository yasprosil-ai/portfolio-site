import "./globals.css";
import { BriefModalProvider } from "../components/BriefModal.jsx";

export const metadata = {
  title: "Я спросил у ИИ | Сайты, лендинги, Telegram-боты, мини-аппы и MVP",
  description: "Я спросил у ИИ создаёт сайты, лендинги, Telegram-ботов, мини-аппы и MVP с помощью ИИ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <BriefModalProvider>
          {children}
        </BriefModalProvider>
      </body>
    </html>
  );
}
