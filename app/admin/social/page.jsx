import { SocialDashboard } from "../../../src/modules/social/index.js";

export const metadata = {
  title: "Social Pilot | Я спросил у ИИ",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SocialPilotPage() {
  return <SocialDashboard />;
}
