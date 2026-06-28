# Social Pilot

Social Pilot is the internal `/admin/social` module for planning, reviewing and publishing social content from the portfolio project without touching the public marketing pages.

## Current status

- Threads live publishing is connected through server-side route handlers.
- Instagram, TikTok and YouTube remain in mock mode.
- Draft saving, scheduling, inbox and AI reply suggestions remain mock until a database and queue are added.

## Required ENV

```env
ADMIN_USERNAME=
ADMIN_PASSWORD=
THREADS_ACCESS_TOKEN=
THREADS_USER_ID=
THREADS_API_BASE=https://graph.threads.net/v1.0
```

Optional for future OAuth work:

```env
THREADS_APP_ID=
THREADS_APP_SECRET=
```

## Local check

1. Start the site with `npm.cmd run dev`.
2. Open `/admin/social/threads`.
3. Confirm the status block shows `Live mode` or lists missing ENV variables.
4. Publish a test Threads post from the editor.
5. If the first comment field is filled, publish the first comment with the separate button.

## Not implemented yet

- Database / persistence layer
- Real scheduling queue
- Threads webhooks
- Threads comments sync
- OAuth UI
- Instagram / TikTok / YouTube live integrations
