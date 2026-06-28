import { PlatformPage } from "../../../../src/modules/social/index.js";

export const metadata = {
  title: "YouTube | Social Pilot",
  robots: {
    index: false,
    follow: false,
  },
};

export default function YouTubeAdminPage() {
  return <PlatformPage platformKey="youtube" />;
}
