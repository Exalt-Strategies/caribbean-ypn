/**
 * SITE CONTENT — the words layer. Components read from here.
 *
 * Caribbean Young Parliamentarians Network (CYPN): a network of young elected
 * members of parliament across the Caribbean. Parliamentarian names
 * and figures below are illustrative placeholders for this design build —
 * swap for verified data before any real launch.
 *
 * Rules:
 *  - strings and numbers only at the leaves (tests enforce this)
 *  - a section renders only if its data exists — delete a key (and its
 *    entry in `sections` + index.astro) to drop a section
 */

/** Ordered section ids — must match the render order in pages/index.astro.
 *  tests/e2e/structure.spec.ts asserts the DOM against this manifest. */
export const sections = [
  "mission",
  "stats",
  "candidates",
  "memberStates",
  "campaigns",
  "updates",
  "blog",
  "testimonials",
  "manifestos",
  "press",
  "timeline",
  "faq",
  "feedback",
  "join",
  "contact",
] as const;

export const site = {
  name: "Caribbean Young Parliamentarians Network",
  shortName: "CYPN",
  description:
    "The network of young elected members of parliament across the Caribbean, building a louder generation in every chamber.",

  ctaLabel: "Join the network",
  ctaHref: "/#join",
  nav: [
    { label: "Vision", href: "/#mission" },
    { label: "Members", href: "/#candidates" },
    { label: "States", href: "/#memberStates" },
    { label: "Priorities", href: "/#campaigns" },
    { label: "Your Voice", href: "/#feedback" },
    { label: "Blog", href: "/blog" },
  ],

  ticker: [
    "Caribbean Young Parliamentarians Network",
    "Young voices. Real seats. One Caribbean.",
    "15 member states, one generation",
    "Every chamber, a little younger",
  ],

  hero: {
    badge: "The under-35 caucus of the Caribbean",
    title: "Young Voices, Real Seats",
    subtitle:
      "The network of young parliamentarians turning Caribbean chambers into rooms built for the generation that inherits every decision.",
  },

  mission: {
    eyebrow: "Our Vision",
    title: "A Caribbean That Governs With Its Young People",
    body: [
      "A Caribbean where every young person has access to quality education, meaningful employment, environmental sustainability, and a voice in shaping the future.",
      "The Young Parliamentarians Network exists to put that voice inside the chamber, not outside it. It brings young elected members together from across the region, so the youngest person in each parliament is not doing the work alone.",
    ],
    asides: [
      { quote: "Half our region is under thirty. Almost none of the people writing its laws are.", attr: "Why the network exists" },
      { quote: "Get elected, get organised, deliver, bring the next one through. That is the whole method.", attr: "How we work" },
    ],
  },

  stats: {
    eyebrow: "The Network",
    title: "New, and Building",
    items: [
      { num: "2026", label: "Founded", note: "Convened by the Centre for Youth Policy as a network for young Caribbean parliamentarians." },
      { num: "Under 35", label: "Who it's for", note: "Membership is open to sitting members of parliament under thirty-five." },
      { num: "15", label: "Member states", note: "The Caribbean parliaments the network is being built across." },
    ],
  },

  candidates: {
    eyebrow: "The Members",
    title: "Young Parliamentarians on the Floor",
    lead: "Every member is an elected representative first, organised into a network second, accountable to the platform they ran on.",
    chair: {
      label: "Chairwoman",
      name: "Brittney Galvez",
      role: "Senator · Belize",
      photo: "/img/brittney-galvez.jpg",
      note: "A Senator in the National Assembly of Belize and Program Coordinator at the Office of the Special Envoy for the Development of Families & Children. One of the youngest women to serve in Belize's Parliament, she champions youth and women's empowerment at home and at regional and international forums.",
      fullBio: [
        "Hon. Brittney Galvez is a Senator in the National Assembly of Belize and Program Coordinator at the Office of the Special Envoy for the Development of Families & Children. She holds a Bachelor's degree in Psychology from the University of the West Indies and is pursuing a Master's in Public Health at Edinburgh Napier University.",
        "At the Office of the Special Envoy, she coordinates national programs focused on empowering women, children, families, and vulnerable groups through collaboration with government agencies, civil society organizations, and development partners.",
        "As a parliamentarian, Senator Galvez advocates for youth and women, championing policies that expand opportunities, strengthen communities, and empower future leaders. As one of the youngest women to serve in Belize's Parliament, she has represented Belize at regional and international forums on inclusive governance, youth political participation, women's empowerment, and sustainable development.",
        "Her leadership in civil society includes serving as Assistant Secretary of the United Women's Group and Public Relations Officer for the Caribbean Women in Leadership (CIWiL) Belize National Chapter. She currently serves as Vice-President of the Belize Youth Movement National Executive and Vice-President for Central America of the ParlAmericas Parliamentary Network for Gender Equality. She is a member of the Commonwealth Parliamentary Association and an alumna of the U.S. Department of State's International Visitors Leadership Program on Youth in the Political Process.",
      ],
    },
    viceChair: {
      label: "Vice Chairperson",
      name: "Jonathan Wehner",
      role: "Senator · Antigua & Barbuda",
      photo: "/img/jonathan-wehner.jpg",
      note: "One of the youngest members of the Parliament of Antigua and Barbuda, serving as an Opposition Senator with a focus on youth and public accountability.",
    },
    items: [
      { name: "Hector Guerra", role: "Senator", region: "Belize", photo: "/img/hector-guerra.jpg", bio: "A Senator in the National Assembly of Belize." },
      { name: "Sjamira Roseburg", role: "Member of Parliament", region: "Sint Maarten", photo: "/img/sjamira-roseburg.jpg", bio: "A Member of Parliament in Sint Maarten." },
      { name: "Kiz Johnson", role: "Minister of State", region: "Antigua & Barbuda", photo: "/img/kiz-johnson.jpg", bio: "Minister of State for Social and Urban Transformation in Antigua and Barbuda." },
      { name: "Seville Francis-Lewis", role: "Parliamentary Secretary, Youth & Sports", region: "Grenada", photo: "/img/seville-francis-lewis.jpg", bio: "Parliamentary Secretary for Youth and Sports in Grenada." },
      { name: "Chalika Vidal", role: "Senator", region: "Dominica", photo: "/img/chalika-vidal.jpg", bio: "A Senator in the Parliament of Dominica." },
      { name: "Kenya Charles", role: "Senator", region: "Trinidad & Tobago", photo: "/img/kenya-charles.jpg", bio: "A Senator in the Parliament of Trinidad and Tobago." },
    ],
  },

  memberStates: {
    eyebrow: "Fifteen Chambers",
    title: "Caribbean Member States",
    lead: "The Caribbean's fifteen member states, the parliaments the network is being built across.",
    items: [
      { country: "Trinidad & Tobago", capital: "Port of Spain", iso: "tt" },
      { country: "Jamaica", capital: "Kingston", iso: "jm" },
      { country: "Barbados", capital: "Bridgetown", iso: "bb" },
      { country: "Guyana", capital: "Georgetown", iso: "gy" },
      { country: "The Bahamas", capital: "Nassau", iso: "bs" },
      { country: "Saint Lucia", capital: "Castries", iso: "lc" },
      { country: "Grenada", capital: "St. George's", iso: "gd" },
      { country: "Antigua & Barbuda", capital: "St. John's", iso: "ag" },
      { country: "Belize", capital: "Belmopan", iso: "bz" },
      { country: "Suriname", capital: "Paramaribo", iso: "sr" },
      { country: "Dominica", capital: "Roseau", iso: "dm" },
      { country: "Saint Kitts & Nevis", capital: "Basseterre", iso: "kn" },
      { country: "Saint Vincent & the Grenadines", capital: "Kingstown", iso: "vc" },
      { country: "Haiti", capital: "Port-au-Prince", iso: "ht" },
      { country: "Montserrat", capital: "Brades", iso: "ms" },
    ],
  },

  campaigns: {
    eyebrow: "What We'll Push For",
    title: "The Network's Priorities",
    items: [
      { title: "A Stronger Youth Voice in Committees", text: "Making the case for younger members to sit on the committees that shape budgets, climate and reform.", progress: 15, goal: "A founding priority for 2026" },
      { title: "Climate on the Next Generation's Terms", text: "Bringing young parliamentarians into the scrutiny of national climate and resilience spending.", progress: 10, goal: "On the launch agenda" },
      { title: "A Real Path From School to Work", text: "Championing the school-to-first-job pathway young Caribbean people are asking for.", progress: 10, goal: "In development" },
    ],
  },

  updates: {
    eyebrow: "From the Floor",
    title: "Latest Updates",
  },

  blog: {
    eyebrow: "Longer Reads",
    title: "From the Network",
  },

  testimonials: {
    eyebrow: "What We Believe",
    title: "Why This Network",
    items: [
      { quote: "Half the region is under thirty. Almost none of the people writing its laws are. That gap is the whole reason to organise.", attr: "Why it exists" },
      { quote: "You win a seat and then discover how alone the job can be. This is the room where the youngest member in the chamber isn't the youngest in the room.", attr: "What it offers" },
      { quote: "Not a party and not a talking shop. A working network of people who already hold seats, across party and across borders.", attr: "What it is" },
    ],
  },

  manifestos: {
    eyebrow: "Founding Documents",
    title: "Charter & Papers",
    items: [
      { title: "The Network Charter", blurb: "How the network will be governed: membership, the national chapters, and the role of the Centre for Youth Policy as secretariat.", filetype: "In development", href: "#" },
      { title: "Young in the Chamber: A Handbook", blurb: "A working guide for young members finding their feet in their first term, being written with the founding cohort.", filetype: "Coming 2026", href: "#" },
    ],
  },

  press: {
    eyebrow: "Around the Region",
    title: "Youth in the Chamber",
    items: [
      { outlet: "Inter-Parliamentary Union", headline: "Who are the world's youngest parliamentarians?", date: "Aug 2024", href: "https://www.ipu.org/news/news-in-brief/2024-08/who-are-youngest-and-oldest-parliamentarians-in-world" },
      { outlet: "The Voice (St. Lucia)", headline: "Youth parliament debates power the region's reparations drive", date: "May 2026", href: "https://thevoiceslu.com/2026/05/youth-parliament-debates-will-power-caricom-reparations-drive-to-higher-heights/" },
      { outlet: "Antigua Observer", headline: "Hopes to expand the Eastern Caribbean Youth Parliament Network", date: "2025", href: "https://antiguaobserver.com/nypaab-hopes-to-expand-the-eastern-caribbean-youth-parliament-network-to-other-territories/" },
    ],
  },

  timeline: {
    eyebrow: "Where We're Starting",
    title: "A Network in Year One",
    items: [
      { label: "2026", title: "The network launches", text: "The Centre for Youth Policy convenes young Caribbean parliamentarians into one standing network across the region." },
      { label: "2026", title: "A founding cohort", text: "Sitting members under thirty-five, across parties and across borders, come together and choose a chair and vice chair." },
      { label: "Next", title: "Building the chapters", text: "The work ahead: a national chapter in each member parliament and a shared agenda for the region's under-35s." },
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "About the Network",
    items: [
      { q: "Who can be a member?", a: "The network is for sitting young parliamentarians: any current member of a Caribbean parliament, in either chamber, who is under thirty-five. It is a caucus of people who already hold a seat." },
      { q: "Is this a political party?", a: "No. The network is cross-party. Members belong to whichever party they were elected under; it brings them together around a shared, generational agenda, not a whip." },
      { q: "What does a national chapter do?", a: "It brings together the young members sitting in one parliament, coordinates their work across committees, and connects them to the wider regional network." },
      { q: "I'm not elected yet. Can I take part?", a: "Full membership is for people already holding a seat, so not yet. But you can follow the network's work, and connect with the young members and chapter forming in your own country." },
      { q: "How is it run?", a: "The Caribbean Young Parliamentarians Network is convened and supported by the Centre for Youth Policy, which acts as its secretariat and fiscal sponsor. Its governance is being set out with the founding members." },
    ],
  },

  feedback: {
    eyebrow: "Your Voice",
    title: "Tell Us What Young People Need",
    lead: "Not a parliamentarian? This is for you. Young people anywhere in the Caribbean can share a concern, an idea, or what you want your parliament to do for your generation. What comes in helps shape the network's priorities.",
    // Real submission (no email app opens). Posts to this endpoint; FormSubmit
    // relays it to the address below. Swap `endpoint` for a Formspree/Tally/
    // Google-Form URL any time. Needs a one-time email confirmation to activate.
    endpoint: "https://formsubmit.co/ajax/hello@caribbeanypn.org",
    email: "hello@caribbeanypn.org",
    fields: { name: "Your name", country: "Your country", topic: "What it's about", message: "Your concern, idea, or ask" },
    topics: ["Education", "Jobs & economy", "Climate & environment", "Health & wellbeing", "Youth voice in politics", "Something else"],
    submit: "Send it in →",
    confirm: "✓ Thank you. Your voice has been shared with the network.",
  },

  join: {
    eyebrow: "Join",
    title: "Bring Your Chamber Into the Network",
    lead: "If you're a young member sitting in a Caribbean parliament, tell us where you are and we'll connect you to the network and the members near you.",
    email: "join@caribbeanypn.org",
    fields: { name: "Your name", email: "Your email", city: "Your parliament or constituency" },
    submit: "Join the network →",
    confirm: "✓ Draft ready in your email app — hit send and we'll be in touch.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Talk to the Network",
    body: [
      "Press enquiries, partnership ideas, or a young member who wants to get involved — the secretariat at the Centre for Youth Policy reads everything.",
    ],
    links: [
      { label: "Email", val: "hello@caribbeanypn.org", href: "mailto:hello@caribbeanypn.org" },
    ],
  },

  footer: {
    tagline: "The network of young elected members across the Caribbean.",
    sponsor: "The Caribbean Young Parliamentarians Network is a programme of the Centre for Youth Policy (CYP), which serves as its secretariat, headquarters, and fiscal sponsor.",
    designer: "Website designed by Exalt Strategies.",
    columns: [
      {
        title: "Network",
        links: [
          { label: "Vision", href: "/#mission" },
          { label: "Members", href: "/#candidates" },
          { label: "Member states", href: "/#memberStates" },
        ],
      },
      {
        title: "Act",
        links: [
          { label: "Join", href: "/#join" },
          { label: "Priorities", href: "/#campaigns" },
          { label: "Charter", href: "/#manifestos" },
        ],
      },
      {
        title: "Read",
        links: [
          { label: "Updates", href: "/#updates" },
          { label: "Blog", href: "/blog" },
          { label: "Timeline", href: "/#timeline" },
        ],
      },
    ],
  },
} as const;
