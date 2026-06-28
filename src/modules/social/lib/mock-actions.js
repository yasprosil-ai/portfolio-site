export function runMockAction(actionLabel, platformName) {
  return {
    ok: true,
    message: `${actionLabel}: ${platformName} пока работает в mock-режиме. Реальное API ещё не подключено.`,
  };
}
