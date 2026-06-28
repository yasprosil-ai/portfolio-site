import "server-only";

import { ThreadsApiError, ThreadsConfigurationError } from "./errors.js";

const REQUIRED_ENV = ["THREADS_ACCESS_TOKEN", "THREADS_USER_ID"];

function getThreadsConfig() {
  const accessToken = process.env.THREADS_ACCESS_TOKEN?.trim() ?? "";
  const userId = process.env.THREADS_USER_ID?.trim() ?? "";
  const apiBase = (process.env.THREADS_API_BASE?.trim() || "https://graph.threads.net/v1.0").replace(/\/$/, "");
  const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]?.trim());

  return {
    accessToken,
    userId,
    apiBase,
    missingEnv,
  };
}

export function getThreadsRuntimeStatus() {
  const config = getThreadsConfig();

  return {
    configured: config.missingEnv.length === 0,
    mode: config.missingEnv.length === 0 ? "live" : "mock",
    missingEnv: config.missingEnv,
  };
}

export function assertThreadsConfigured() {
  const config = getThreadsConfig();

  if (config.missingEnv.length > 0) {
    throw new ThreadsConfigurationError("Threads is not configured", {
      missingEnv: config.missingEnv,
    });
  }

  return config;
}

async function parseThreadsResponse(response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export async function postThreadsGraph(pathname, payload) {
  const config = assertThreadsConfigured();
  const body = new URLSearchParams({
    ...payload,
    access_token: config.accessToken,
  });
  const response = await fetch(`${config.apiBase}/${pathname}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body,
    cache: "no-store",
  });
  const responseBody = await parseThreadsResponse(response);

  if (!response.ok) {
    const message =
      typeof responseBody === "object" && responseBody?.error?.message
        ? responseBody.error.message
        : "Threads API request failed.";

    throw new ThreadsApiError(message, {
      status: response.status,
      details: responseBody,
    });
  }

  return responseBody;
}
