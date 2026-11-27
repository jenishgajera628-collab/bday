import { createFileRoute } from "@tanstack/react-router";
import { OurLittleUniverse } from "@/components/birthday/OurLittleUniverse";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For My Yuku — A Birthday Surprise" },
      {
        name: "description",
        content: "A little world of memories, love, and birthday wishes made just for Yuku.",
      },
      { property: "og:title", content: "For My Yuku — A Birthday Surprise" },
      {
        property: "og:description",
        content: "A little world of memories, love, and birthday wishes made just for Yuku.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <OurLittleUniverse />;
}
