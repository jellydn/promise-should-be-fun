import { checkUrlsStatus } from "./main.ts";

Deno.bench(async function checkUrlsStatusInSmallConcurrent() {
  await checkUrlsStatus([
    'https://dapp-starter.productsway.com',
    'https://github.com',
    'https://google.com',
    'https://google.com',
  ], 2);
});

Deno.bench(async function checkUrlsStatusInLargeConcurrent() {
  await checkUrlsStatus([
    'https://productsway.com',
    'https://dapp-starter.productsway.com',
    'https://github.com',
    'https://google.com',
  ], 5);
});
