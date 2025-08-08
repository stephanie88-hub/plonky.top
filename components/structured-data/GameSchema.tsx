import { siteConfig } from "@/config/site";

export function GameSchema() {
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Plonky",
    "description": "A physics-based puzzle adventure game featuring ragdoll mechanics and creative level design. Players guide Plonky through challenging levels filled with traps, saws, and clever contraptions.",
    "url": siteConfig.url,
    "image": `${siteConfig.url}/assets/img/plonky.png`,
    "genre": ["Puzzle", "Physics", "Adventure", "Strategy"],
    "gamePlatform": ["Web Browser", "Mobile Browser"],
    "applicationCategory": "Game",
    "operatingSystem": "Any modern web browser",
    "playMode": "SinglePlayer",
    "gameServer": {
      "@type": "GameServer",
      "serverStatus": "Online",
      "playersOnline": "1000+"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "148",
      "bestRating": "5",
      "worstRating": "1"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Plonky"
    },
    "inLanguage": "en",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
    />
  );
}
