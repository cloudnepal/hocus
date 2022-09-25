import { serialize } from "superjson";

import { getConfig } from "./config.server";

test.concurrent("superjson cannot serialze config", () => {
  const config = getConfig();
  expect(() => JSON.stringify(serialize(config).json)).toThrow(
    /Converting circular structure to JSON/,
  );
});
