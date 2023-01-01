import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { checkUrlsStatus } from "./main.ts";

Deno.test(async function addTest() {
  assertEquals(await checkUrlsStatus([]), []);
});
