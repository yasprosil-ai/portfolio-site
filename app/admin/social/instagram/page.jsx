import { PlatformPage } from "../../../../src/modules/social/index.js";

export const metadata = {
  title: "Instagram | Social Pilot",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InstagramAdminPage() {
  return <PlatformPage platformKey="instagram" />;
}
