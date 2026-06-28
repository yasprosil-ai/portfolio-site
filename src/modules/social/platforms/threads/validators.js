import "server-only";

import { ThreadsApiError } from "./errors.js";

const THREADS_TEXT_LIMIT = 500;

export function validateThreadsText(value, fieldName = "text") {
  const normalizedValue = typeof value === "string" ? value.trim() : "";

  if (!normalizedValue) {
    throw new ThreadsApiError("Text is required.", {
      status: 400,
    });
  }

  if (normalizedValue.length > THREADS_TEXT_LIMIT) {
    throw new ThreadsApiError(
      `${fieldName} is too long for the current Threads MVP adapter. Limit: ${THREADS_TEXT_LIMIT} characters.`,
      {
        status: 400,
      },
    );
  }

  return normalizedValue;
}

export function validateReplyToId(value) {
  const normalizedValue = typeof value === "string" ? value.trim() : "";

  if (!normalizedValue) {
    throw new ThreadsApiError("replyToId is required.", {
      status: 400,
    });
  }

  return normalizedValue;
}
