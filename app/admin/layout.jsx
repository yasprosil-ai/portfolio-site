import { SocialShell } from "../../src/modules/social/index.js";

export const metadata = {
  title: "Social Pilot Admin | Я спросил у ИИ",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }) {
  return <SocialShell>{children}</SocialShell>;
}
