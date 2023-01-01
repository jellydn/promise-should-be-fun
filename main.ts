import pMap from "npm:p-map";
import got from "npm:got";

export async function checkUrlsStatus(urls: string[], concurrency = 5) {
  const mapper = (url: string) => got.get(url).then((result) => result.body); //=> Promise
  const result = await pMap(urls, mapper, { concurrency });

  return result;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const urls = [
    "https://productsway.com",
    "https://threadify.productsway.com",
  ];
  const { pino } = await import("npm:pino");
  const logger = pino();
  logger.info(
    "check status in concurrency = 2",
  );
  logger.info(
    await checkUrlsStatus(urls, 2)
  );
}
