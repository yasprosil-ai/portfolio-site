import {
  ThreadsApiError,
  ThreadsConfigurationError,
  publishThreadsPost,
} from "../../../../../src/modules/social/platforms/threads/adapter.js";

export async function POST(request) {
  try {
    const body = await request.json();
    const result = await publishThreadsPost(body);

    return Response.json({
      ok: true,
      platform: "threads",
      platformPostId: result.platformPostId,
      status: result.status,
      message: result.message,
      raw: result.raw,
    });
  } catch (error) {
    const status =
      error instanceof ThreadsConfigurationError
        ? 503
        : error instanceof ThreadsApiError
          ? error.status
          : 500;

    return Response.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Failed to publish Threads post.",
      },
      {
        status,
      },
    );
  }
}
