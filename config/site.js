const siteConfig = {
  name: "Plonky",
  description: "Play Plonky online for free - the ultimate physics-based puzzle adventure game! Master ragdoll physics mechanics, solve creative puzzles, and conquer challenging levels. Experience Plonky's unique gameplay with no downloads required. Perfect for puzzle enthusiasts and physics game lovers!",
  domain: "plonky.top",
  url: "https://plonky.top",
  email: "support@plonky.top",
  author: "Plonky",
  social: {
    twitter: "PlonkyGame",
    facebook: "PlonkyGame",
  },
  metadata: {
    keywords: ["plonky", "ragdoll physics", "physics puzzle", "online game", "free game"],
    themeColor: "#ffffff",
    manifestPath: "/assets/img/site.webmanifest",
  },
  images: {
    icon: {
      favicon: "/assets/img/favicon.ico",
      favicon16: "/assets/img/favicon-16x16.png",
      favicon32: "/assets/img/favicon-32x32.png",
      apple: "/assets/img/apple-touch-icon.png",
      // safari: "/assets/img/safari-pinned-tab.svg",
    },
    og: "/assets/img/plonky.png", // 可后续替换为plonky相关图片
  },
};

module.exports = { siteConfig };