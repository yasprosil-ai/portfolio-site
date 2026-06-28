import { PlatformPage } from "../../../../src/modules/social/index.js";

export const metadata = {
  title: "Threads | Social Pilot",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThreadsAdminPage() {
  return <PlatformPage platformKey="threads" />;
}
