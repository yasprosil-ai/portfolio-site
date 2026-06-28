import { comments, platforms, posts, replyDrafts } from "../data/mock-social-data.js";
import { PLATFORM_ACCENTS, SOCIAL_PLATFORMS } from "./social-constants.js";

function buildPlatformMap() {
  return Object.fromEntries(
    platforms.map((platform) => {
      const platformPosts = posts.filter((post) => post.platform === platform.id);
      const drafts = platformPosts.filter((post) => post.status === "draft").length;
      const scheduled = platformPosts.filter((post) => post.status === "scheduled").length;
      const published = platformPosts.filter((post) => post.status === "published").length;

      return [
        platform.id,
        {
          ...platform,
          accentClass: PLATFORM_ACCENTS[platform.id],
          drafts,
          scheduled,
          published,
          posts: platformPosts,
          comments: comments.filter((item) => item.platform === platform.id),
          replyDrafts: replyDrafts.filter((item) => item.platform === platform.id),
        },
      ];
    }),
  );
}

export const platformRegistry = buildPlatformMap();

export function getPlatform(platformKey) {
  return platformRegistry[platformKey] ?? null;
}

export function getPlatformCards() {
  return SOCIAL_PLATFORMS.map((key) => platformRegistry[key]).filter(Boolean);
}

export function getScheduledQueue(limit = 6) {
  return posts
    .filter((post) => post.status === "scheduled")
    .sort((a, b) => new Date(a.scheduledAt) - new Date(b.scheduledAt))
    .slice(0, limit)
    .map((post) => ({
      ...post,
      platformName: platformRegistry[post.platform]?.name ?? post.platform,
    }));
}

export function getRecentDrafts(limit = 4) {
  return posts
    .filter((post) => post.status === "draft")
    .slice(0, limit)
    .map((post) => ({
      ...post,
      platformName: platformRegistry[post.platform]?.name ?? post.platform,
    }));
}

export function getInboxPreview(limit = 5) {
  return comments.slice(0, limit).map((comment) => ({
    ...comment,
    platformName: platformRegistry[comment.platform]?.name ?? comment.platform,
  }));
}
