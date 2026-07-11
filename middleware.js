import { NextResponse } from "next/server";

function unauthorizedResponse(request) {
  const isApiRequest = request.nextUrl.pathname.startsWith("/api/social/");
  const headers = new Headers({
    "WWW-Authenticate": 'Basic realm="Social Pilot Admin"',
  });

  if (isApiRequest) {
    headers.set("Content-Type", "application/json; charset=utf-8");

    return new NextResponse(
      JSON.stringify({
        ok: false,
        message: "Unauthorized",
      }),
      {
        status: 401,
        headers,
      },
    );
  }

  headers.set("Content-Type", "text/plain; charset=utf-8");

  return new NextResponse("Unauthorized", {
    status: 401,
    headers,
  });
}

function unavailableResponse(request) {
  const isApiRequest = request.nextUrl.pathname.startsWith("/api/social/");

  if (isApiRequest) {
    return NextResponse.json(
      {
        ok: false,
        message: "Admin access is disabled until ADMIN_USERNAME and ADMIN_PASSWORD are configured.",
      },
      {
        status: 503,
      },
    );
  }

  return new NextResponse(
    "Admin access is disabled until ADMIN_USERNAME and ADMIN_PASSWORD are configured.",
    {
      status: 503,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}

function decodeCredentials(headerValue) {
  if (!headerValue?.startsWith("Basic ")) {
    return null;
  }

  try {
    const encodedValue = headerValue.slice("Basic ".length);
    const decodedValue = atob(encodedValue);
    const separatorIndex = decodedValue.indexOf(":");

    if (separatorIndex === -1) {
      return null;
    }

    return {
      username: decodedValue.slice(0, separatorIndex),
      password: decodedValue.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

export function proxy(request) {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const hasCredentials = Boolean(adminUsername && adminPassword);

  if (!hasCredentials) {
    if (process.env.NODE_ENV === "production") {
      return unavailableResponse(request);
    }

    return NextResponse.next();
  }

  const credentials = decodeCredentials(request.headers.get("authorization"));

  if (!credentials) {
    return unauthorizedResponse(request);
  }

  if (credentials.username !== adminUsername || credentials.password !== adminPassword) {
    return unauthorizedResponse(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/social/:path*"],
};
