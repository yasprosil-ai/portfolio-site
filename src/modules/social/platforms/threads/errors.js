import "server-only";

export class ThreadsApiError extends Error {
  constructor(message, { status = 500, details = null } = {}) {
    super(message);
    this.name = "ThreadsApiError";
    this.status = status;
    this.details = details;
  }
}

export class ThreadsConfigurationError extends ThreadsApiError {
  constructor(message = "Threads is not configured", details = {}) {
    super(message, {
      status: 503,
      details,
    });
    this.name = "ThreadsConfigurationError";
  }
}
