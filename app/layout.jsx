import "./globals.css";

export const metadata = {
  title: "Yasprosil AI | Сайты, лендинги, Telegram-боты, мини-аппы и MVP",
  description: "Yasprosil AI создает сайты, лендинги, Telegram-ботов, мини-аппы и MVP с помощью AI и вайбкодинга.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
