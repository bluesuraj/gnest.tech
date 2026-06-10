import type { MetadataRoute } from "next";

const BASE_URL = "https://gnest.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/features",
    "/pricing",
    "/cafe-pos",
    "/restaurant-pos",
    "/guesthouse-pos",
    "/hardware",
    "/about",
    "/help",
    "/blog",
    "/signup",
    "/login",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/cafe-pos" ? 0.9 : 0.7,
  }));
}
