import pMap from "npm:p-map";
import got from "npm:got";

// check available for the domain
async function checkDomainAvailability(domains: string[]) {
  const availability = await pMap(
    domains,
    async (domain: string) => {
      try {
        await got(`https://${domain}`, {
          throwHttpErrors: false,
        });
        return {
          domain,
          available: false,
        };
      } catch {
        return {
          domain,
          available: true,
        };
      }
    },
  );
  return availability;
}

// Usage: deno run -A 01.ts
// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const domains = ["productsway.com", "productsway.net", "productsway.org"];
  const availability = await checkDomainAvailability(domains);
  const { pino } = await import("npm:pino");
  const logger = pino();
  logger.info(availability);
}
