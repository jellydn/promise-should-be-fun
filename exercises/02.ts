import pAll from "npm:p-all";
import got from "npm:got";
import { parse } from "npm:node-html-parser";
import { pino } from "npm:pino";
import pinoPretty from "npm:pino-pretty";

const logger = pino(pinoPretty.default());

async function getWebsiteDescription(url: string) {
  logger.info(`Getting description for ${url}`);
  const response = await got(url);
  const document = parse(
    response.body,
  );

  const meta = document.querySelector('meta[name="description"]') ||
    document.querySelector('meta[property="og:description"]');
  return meta?.getAttribute("content") ?? "";
}

// Get top 10 links from Sub Reddits
async function getTopLinksByTopic(topic: string, limit = 10) {
  logger.info(`Getting top links for ${topic}`);
  const response = await got(
    `https://www.reddit.com/r/${topic}/top.json?limit=${limit}`,
  );

  const { data: { children } } = JSON.parse(response.body) as {
    data: {
      children: {
        data: {
          title: string;
          url: string;
        };
      }[];
    };
  };

  const websites = children.map(({ data: { title, url } }) => ({
    title,
    url,
  }));

  logger.info(`Getting descriptions for ${websites.length} websites`);

  return pAll(
    websites.map((website) => async () => {
      const { url } = website;
      const description = await getWebsiteDescription(url);

      return {
        ...website,
        description,
      };
    }),
  );
}

// Usage: deno run -A 01.ts
// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const topic = "javascript";
  const links = await getTopLinksByTopic(topic);

  logger.info(links);
}
