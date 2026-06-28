import "server-only";

import { getThreadsRuntimeStatus, postThreadsGraph } from "./client.js";
import { ThreadsApiError, ThreadsConfigurationError } from "./errors.js";
import { validateReplyToId, validateThreadsText } from "./validators.js";

export { ThreadsApiError, ThreadsConfigurationError };

export function getThreadsStatus() {
  return getThreadsRuntimeStatus();
}

export async function publishThreadsPost(input = {}) {
  const text = validateThreadsText(input.text);
  const { configured } = getThreadsRuntimeStatus();

  if (!configured) {
    throw new ThreadsConfigurationError("Threads is not configured");
  }

  // TODO: Re-validate endpoint params against the latest official Threads docs before expanding beyond text posts.
  const container = await postThreadsGraph(`${process.env.THREADS_USER_ID}/threads`, {
    media_type: "TEXT",
    text,
  });

  const publishResult = await postThreadsGraph(`${process.env.THREADS_USER_ID}/threads_publish`, {
    creation_id: container.id,
  });

  return {
    platformPostId: publishResult.id ?? container.id,
    status: "published",
    message: "Post published to Threads",
    raw: {
      container,
      publishResult,
    },
  };
}

export async function publishThreadsReply(input = {}) {
  const text = validateThreadsText(input.text, "Reply text");
  const replyToId = validateReplyToId(input.replyToId);
  const { configured } = getThreadsRuntimeStatus();

  if (!configured) {
    throw new ThreadsConfigurationError("Threads is not configured");
  }

  // TODO: Confirm reply_to_id behavior against the latest official Threads docs before adding richer reply flows.
  const container = await postThreadsGraph(`${process.env.THREADS_USER_ID}/threads`, {
    media_type: "TEXT",
    text,
    reply_to_id: replyToId,
  });

  const publishResult = await postThreadsGraph(`${process.env.THREADS_USER_ID}/threads_publish`, {
    creation_id: container.id,
  });

  return {
    platformReplyId: publishResult.id ?? container.id,
    status: "published",
    message: "Reply published to Threads",
    raw: {
      container,
      publishResult,
    },
  };
}
