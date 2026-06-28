import { PlatformPage } from "../../../../src/modules/social/index.js";

export const metadata = {
  title: "TikTok | Social Pilot",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TikTokAdminPage() {
  return <PlatformPage platformKey="tiktok" />;
}
