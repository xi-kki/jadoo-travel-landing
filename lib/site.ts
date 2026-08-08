// Central site configuration for Jadoo.
//
// The values marked [REPLACE] are real-but-generic targets so every link on
// the page works today. Swap them for Jadoo's actual profiles/pages before
// launch — they are the only edits needed here.

export const SITE = {
  name: "Jadoo",
  tagline: "Travel, enjoy and live a new and full life",

  // [REPLACE] The agency's real contact address.
  email: "hello@jadoo.co",

  // [REPLACE] Real profile URLs (currently pointed at the platform homepages).
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    x: "https://x.com",
  },

  // [REPLACE] Real app store listing URLs (currently the store homepages).
  appStore: "https://www.apple.com/app-store/",
  playStore: "https://play.google.com/store/apps",

  // Footer link columns — every target is a real section anchor or mailto.
  footerColumns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#services" },
        { label: "How It Works", href: "#book" },
        { label: "Reviews", href: "#testimonials" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Plan a Trip", href: "#book" },
        { label: "Email Us", href: `mailto:hello@jadoo.co` },
        { label: "Deals & Offers", href: "#subscribe" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Top Destinations", href: "#destinations" },
        { label: "Best Flights", href: "#services" },
        { label: "Low Fare Tips", href: "#subscribe" },
      ],
    },
  ],
} as const;
