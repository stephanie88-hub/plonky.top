import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Play Plonky", href: "/" },
        { text: "Hot Games", href: "#other-games" },
        { text: "Game Features", href: "#features" },
        { text: "About the Game", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "Game FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play this free ragdoll physics puzzle game right in your browser. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        // { text: "Telegram", href: "https://t.me/s/free_unblocked_games" },
        // { text: "CAL", href: "https://cal.com/vincent-ai" },
        // { text: "Patreon", href: "https://www.patreon.com/posts/play-free-crazy-130738673" },
        // { text: "Linktr", href: "https://linktr.ee/vincent20250520" },
        // { text: "Creem", href: "https://www.creem.io/bip/vincent-ai" },
        // { text: "GetAllMyLinks", href: "https://getallmylinks.com/vincent" },
        // { text: "AllMyLinks", href: "https://allmylinks.com/vincent04065" },
        { text: "Pinterest | Physics Puzzle Game", href: "https://www.pinterest.com/" },
        // { text: "github | Plonky", href: "https://github.com/" },
      ]
    },
    games: {
      title: "Games",
      links: [
        { text: "Plonky", href: "/" },
        { text: "Short Life 2", href: "/short-life-2" },
        { text: "Poor Eddie", href: "/poor-eddie" },
        { text: "Dreadhead Parkour", href: "/dreadhead-parkour" },
        { text: "Short Ride", href: "/short-ride" },
        { text: "Happy Room", href: "/happy-room" },
        // { text: "Basketball Bros Unblocked", href: "/basketball-bros-unblocked" },
        // { text: "Pokemon Gamma Emerald", href: "/pokemon-gamma-emerald" },
        // { text: "Sprunki Incredibox", href: "/sprunki-incredibox" },
        // { text: "Futbol Libre", href: "/futbol-libre" },
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=Physics+Puzzle+Game&u=https://plonky.top`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=Physics+Puzzle+Game&url=https://plonky.top&hashtags=PhysicsGame,Games`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Plonky. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate This Game",
    votes: "votes",
    initialRating: 4.8,
    initialVotes: 148
  },
  gameSection: {
    title: "Plonky",
    game: {
      url: 'https://cdn.vietdp.com/file/vietdp-games/games/t52025/plonky/index.html',
      title: "Plonky",
      externalUrl: 'https://cdn.vietdp.com/file/vietdp-games/games/t52025/plonky/index.html'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
  howToPlay: {
    title: "How to Play Plonky Online Free - Game Controls & Guide",
    description: "Master Plonky's intuitive controls for an immersive gaming experience. On desktop, use A/D or Arrow keys for movement, W/Up/Space for jumping, and S/Down for climbing. Plonky's mobile version features responsive touch controls - simply tap or swipe to navigate through challenging levels. Perfect your timing and master the unique ragdoll physics to conquer puzzles and overcome obstacles!",
    image: "/assets/img/plonky.png",
    imageAlt: "Plonky Game Controls Guide - Master Physics-Based Puzzle Game Controls for Desktop and Mobile Gaming"
  },
  whatIs: {
    title: "Everything about Plonky - Play Game Online Free",
    description: "Welcome to Plonky, the ultimate physics-based puzzle adventure! In Plonky, you'll guide our lovable ragdoll hero through ingeniously designed levels packed with challenging obstacles. Plonky combines precise physics mechanics with creative problem-solving, offering a unique gaming experience. Each level in Plonky tests your skills with innovative contraptions, from swinging platforms to gravity-defying puzzles. Experience why Plonky has become the go-to choice for puzzle enthusiasts seeking both challenge and entertainment. Play Plonky instantly in your browser - no downloads, no ads, just pure physics-powered fun!",
    logo: {
      src: "/assets/img/android-chrome-512x512.png",
      alt: "Plonky - Free Online Unblocked Game Logo"
    }
  },
  faq: {
    title: "Frequently Asked Questions - Plonky Online Game",
    items: [
      {
        value: "where-to-play-original",
        question: "Where can I play this physics puzzle game online?",
        answer: "This game is available to play instantly at https://plonky.top! As a browser-based game, it requires no downloads or installations. Simply visit the official website and start playing this physics puzzle adventure right away!"
      },
      {
        value: "play-on-mobile",
        question: "Can I play this game on my mobile device?",
        answer: "Yes! This physics puzzle game features a responsive design optimized for all devices. The mobile version includes intuitive touch controls and a specially adapted interface, ensuring the same engaging physics puzzle experience as the desktop version. Play anywhere, anytime!"
      },
      {
        value: "creator-info",
        question: "Who created this game?",
        answer: "This physics puzzle game is developed by Gametornado, known for creative physics puzzle games like Short Life 2 and Dreadhead Parkour."
      },
      {
        value: "game-rating",
        question: "What is the rating for this physics puzzle game?",
        answer: "This game consistently receives high ratings for its innovative physics engine and creative puzzle design. Players particularly praise the unique ragdoll mechanics and clever level progression. Try it yourself and join thousands of satisfied players who've rated our game!"
      },
      {
        value: "new-player-difficulty",
        question: "Is this game suitable for new players?",
        answer: "Absolutely! This physics puzzle game features a carefully designed difficulty curve that makes it perfect for all skill levels. New players will appreciate the intuitive controls and helpful tutorials, while experienced gamers will find plenty of challenging puzzles in later levels. The physics-based gameplay is easy to learn but rewarding to master!"
      },
      {
        value: "technical-requirements-online",
        question: "What are the technical requirements to play this game?",
        answer: "This physics puzzle game is designed to run smoothly on any modern web browser. The game is optimized for Chrome, Firefox, and Edge, featuring quick loading times and responsive controls. The efficient design ensures smooth gameplay even on modest hardware, making physics-based fun accessible to everyone!"
      },
      {
        value: "available-game-modes",
        question: "What game modes are available in this physics puzzle game?",
        answer: "This game currently offers an engaging single-player adventure mode featuring 50+ meticulously designed levels. Each level presents unique physics-based challenges and puzzles. Stay tuned as we continue to expand with new content and game modes!"
      },
      {
        value: "comfort-settings-online-game",
        question: "How can I adjust this game for a more comfortable experience?",
        answer: "This physics puzzle game is designed with player comfort in mind. The game features customizable controls for both keyboard and touch input. The clean interface and adjustable settings ensure a comfortable gaming experience across all devices. For the best experience, adjust your device's display settings and audio levels to your preference."
      },
      {
        value: "winning-tactics-game",
        question: "Any tips for mastering this physics puzzle game?",
        answer: "To master this physics puzzle game, focus on understanding the physics mechanics. Learn to control momentum and balance while navigating obstacles. Study each level's layout and timing patterns. Experiment with interactive elements and mechanical devices. Remember that practice and patience lead to perfect puzzle solutions!"
      }
    ]
  },
  features: {
    title: "Revolutionary Features of Plonky - Play Free Online Game",
    items: [
      {
        title: "Innovative Ragdoll Physics",
        description: "Experience signature wobbly character mechanics and physics-driven gameplay. Each movement creates unpredictable yet controllable chaos, making every playthrough unique and entertaining!"
      },
      {
        title: "Diverse Level Design",
        description: "Dive into a collection of 50+ meticulously crafted levels. From simple beginnings to mind-bending challenges, the level progression keeps you engaged while gradually introducing new mechanics and obstacles."
      },
      {
        title: "Creative Puzzle Mechanics",
        description: "This physics puzzle game challenges you with an array of interactive elements - from mechanical contraptions to physics-based tools. Each puzzle requires strategic thinking and precise timing to master the unique mechanics."
      },
      {
        title: "Truly Unblocked & Ad-Free",
        description: "This game is school/workplace friendly, loads instantly, and offers an ad-free experience for all players."
      }
    ]
  }
} as const;


