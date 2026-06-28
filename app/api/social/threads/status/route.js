import { getThreadsStatus } from "../../../../../src/modules/social/platforms/threads/adapter.js";

export async function GET() {
  const status = getThreadsStatus();

  return Response.json({
    ok: true,
    ...status,
  });
}
