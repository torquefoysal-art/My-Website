export type SectionSlug = "city" | "science" | "culture" | "business";

export type Story = {
  slug: string;
  title: string;
  dek: string;
  section: SectionSlug;
  kicker: string;
  author: string;
  authorRole: string;
  date: string;
  minutes: number;
  dateline: string;
  plate: string;
  pullQuote: string;
  body: string[];
};

export type Section = {
  slug: SectionSlug;
  name: string;
  blurb: string;
};

export const edition = {
  name: "The Harbor Ledger",
  volume: "Vol. IV",
  number: "No. 318",
  place: "Dhaka & the harbor",
  dateLabel: "Thursday, 12 November 2026",
  motto: "Independent notes from the waterfront, the lab, and the lunch hour.",
};

export const sections: Section[] = [
  {
    slug: "city",
    name: "City",
    blurb: "Ferries, piers, night shifts, and the decisions that change who gets home.",
  },
  {
    slug: "science",
    name: "Science",
    blurb: "Heat, tide, and the measurements people walk to collect.",
  },
  {
    slug: "culture",
    name: "Culture",
    blurb: "Shops, tables, and the hours a city keeps for itself.",
  },
  {
    slug: "business",
    name: "Business",
    blurb: "Tickets, budgets, and what a number becomes when it leaves the page.",
  },
];

export const stories: Story[] = [
  {
    slug: "night-ferry-winter",
    title: "The night ferry keeps its winter run",
    dek: "The council voted just after ten to leave the last crossing on the timetable, after deckhands, nurses, and the fish market made the same argument in different coats.",
    section: "city",
    kicker: "Lead story",
    author: "Amina Rahman",
    authorRole: "City correspondent",
    date: "2026-11-12",
    minutes: 7,
    dateline: "At the terminal",
    plate: "ferry",
    pullQuote: "The last boat is not a luxury. It is how the night shift gets home without begging a ride.",
    body: [
      "The chamber was still half full when the clerk read the vote. Eleven in favor, four against, one abstention from a member who said he took the late bus and did not trust himself to speak for the water. Outside, the terminal clock had already slipped past the old last sailing. Nobody on the pier had gone home.",
      "For three winters the city had tried to retire the 11:40 crossing. The case for cutting it was tidy: fuel, a thin passenger count, a crew that would rather be paid for a morning run. The case against it arrived as people. A nurse from the river hospital held up a laminated shift card. A deckhand named Farid described the hour when the scanners failed and the paper manifest was the only thing that still worked. The fish market sent a buyer who does not make speeches and did not try to.",
      "What moved the room was not romance about boats. It was a map of the last mile. After midnight the bridge road narrows for repairs, and the rides that remain charge a price that turns a wage into a story you tell later. The ferry is slow. It is also priced like a public thing. Councilors who had called the route sentimental on Monday were, by Thursday, calling it infrastructure.",
      "The winter timetable now keeps the crossing through March, with a review when the bridge lanes reopen. The harbormaster asked for one extra deck light and a second person on the ramp. Both were written into the same motion, almost as an afterthought, which is how small safety often enters a budget.",
      "On the pier after the vote, nobody cheered for long. The next sailing was already loading. A woman in scrubs took a seat by the window and fell asleep before the rope left the bollard. The city had argued all evening about whether that seat should exist. She was using it.",
    ],
  },
  {
    slug: "heat-alley-map",
    title: "A small lab is mapping heat one alley at a time",
    dek: "Researchers in Dhaka are walking the city with inexpensive sensors, showing that a shaded lane and a bare roof can differ by a whole season.",
    section: "science",
    kicker: "Field science",
    author: "Jules Okonkwo",
    authorRole: "Science correspondent",
    date: "2026-11-11",
    minutes: 8,
    dateline: "In Mohammadpur",
    plate: "heat",
    pullQuote: "The average temperature of a district is a polite fiction. People live on a single side of a street.",
    body: [
      "The sensor is the size of a matchbox and costs less than a dinner. Strapped to a backpack, it records heat, humidity, and the minute. The person wearing it writes down what the machine cannot see: a tin roof, a tree that survived a road widening, a wall that throws shade at two in the afternoon and none at four.",
      "The lab is three rooms above a stationery shop. Its maps do not look like the ones in the morning paper. Those maps color a neighborhood in a single wash. These ones break the wash apart. One alley, surveyed at walking pace over eight hot days, ran six degrees cooler than the avenue at its mouth. The difference was a row of trees the city had scheduled to cut, then postponed.",
      "Dr. Nabila Chowdhury, who runs the project with two graduate students and a borrowed ladder, is careful about what the walks prove. They do not, by themselves, redraw the national forecast. They do show where a policy written for a district average will miss the person standing on the wrong corner. “We keep being asked for one number,” she said. “The useful thing we have is a street.”",
      "The team has started leaving copies of the maps with building committees. One committee moved an evening clinic from a top-floor room to a ground-floor room that the map had marked as merely warm instead of severe. It was not a scientific triumph. It was a door that was easier to sit near.",
      "Next month the walks cross the river. The students are already arguing about the route, which is a good sign. A map that nobody disagrees with is usually a map that has not been walked.",
    ],
  },
  {
    slug: "bookshops-after-hours",
    title: "The bookshops that stay open after the offices close",
    dek: "Three independent shops moved their busiest hour past dusk. The people who come are not only there to buy books.",
    section: "culture",
    kicker: "After dusk",
    author: "Priya Sen",
    authorRole: "Culture correspondent",
    date: "2026-11-10",
    minutes: 6,
    dateline: "On the side street",
    plate: "books",
    pullQuote: "We stopped competing with the lunch hour. The lunch hour was never ours.",
    body: [
      "At half past six the shop on Green Road unlocks the second door, the one that used to be a fire exit and is now the way in. The lights are already low. A pot of tea sits on a stool that is not for sale, though everything else is, including the stool’s twin.",
      "The owner, Laila Karim, changed the hours in August after a month of empty afternoons and crowded sidewalks at night. Offices had shifted their days. Deliveries arrived later. The people who actually read on paper were arriving when the shutter was halfway down. She moved closing time to ten and hired one extra person for the last four hours. Sales did not double. They moved, which was the point.",
      "Two other shops followed, not as a trend so much as a phone call. They now keep a shared late shelf: one new book, one old book, and a chair that is understood to be for reading a chapter you might not pay for. Karim says the unpaid chapter is the cheapest rent she pays for a reputation.",
      "What the late hour changed is the kind of conversation. Nobody is performing a lunch break. A student reads standing up. A cook from the restaurant next door comes in flour-dusted and asks for a book that does not improve him. The staff have learned to answer that request without a speech.",
      "The city still has plenty of places to be busy. These three rooms picked a different assignment. They stay lit until the street is honest about how late it is.",
    ],
  },
  {
    slug: "paper-tickets-return",
    title: "Paper tickets are back at the harbor gates",
    dek: "After a season of dead scanners, three gates returned to card stock. The queue got shorter. The argument did not.",
    section: "business",
    kicker: "Harbor business",
    author: "Mateo Alvarez",
    authorRole: "Business correspondent",
    date: "2026-11-09",
    minutes: 6,
    dateline: "Gate C",
    plate: "ticket",
    pullQuote: "The scanner was modern. The queue was not. We picked the thing that moved people.",
    body: [
      "The ticket is a thick card the color of weak tea. It has a number, a time, and a torn edge that means you have already used it. For four years Gate C preferred a barcode on a phone. Then the network at the gate failed often enough that the preference became a story people told while standing still.",
      "In September the harbor authority printed a trial run of paper tickets for three gates and staffed them with clerks who already knew the passengers by the bags they carried. The trial was supposed to last two weeks. It is still going, because the average wait fell from eleven minutes to four, and because the clerks can wave through a worker whose phone is in a locker on the other side of the water.",
      "The companies that sold the scanners have objected in writing. Their letter calls the paper system a retreat. The harbormaster’s reply, which this desk has seen, is two paragraphs. The second paragraph lists the days the scanner was down in August. The first paragraph says the harbor’s job is boarding, not demonstration.",
      "Paper has its own failures. Cards get wet. Numbers get reused if a clerk is tired. A passenger who loses a ticket has to be believed, which is a kind of judgment software had pretended to remove. The clerks say they would like a scanner that works and a card that works when it does not. They do not expect to be given both this quarter.",
      "Until then, Gate C sounds like a place again: a stamp, a word, a person looking up. The line moves. That is the entire product.",
    ],
  },
  {
    slug: "pier-cranes-slower-hour",
    title: "The cranes on Pier 4 learned a slower hour",
    dek: "A trial schedule gives the night crew twenty quiet minutes. The cargo still leaves. The people do too.",
    section: "city",
    kicker: "Night shift",
    author: "Lena Cho",
    authorRole: "City correspondent",
    date: "2026-11-08",
    minutes: 5,
    dateline: "Pier 4",
    plate: "crane",
    pullQuote: "Twenty minutes is not a holiday. It is long enough to notice you have hands.",
    body: [
      "The cranes did not become gentle. They became briefly still. Under a trial agreed last month, the night shift on Pier 4 stops the lift for twenty minutes at 1:10, when the body’s insistence on sleep and the ship’s insistence on schedule usually argue in public.",
      "The stop was the idea of a rigger named Hasan, who had counted near-misses the way other people count containers. He did not ask for a shorter shift. He asked for a gap in which nobody would be praised for skipping water. The union wrote it down. The terminal operator, facing a year in which two night injuries had already become meetings, said yes to a month.",
      "Supervisors were sure the ships would miss their window. Most nights they have not. The crew comes back to a deck that is where they left it, which is the secret of a pause: it is only expensive if the work was imaginary. The work was not imaginary. It was just arranged with a hole in it.",
      "Hasan uses the twenty minutes to sit on a coil of rope and not talk. Others talk immediately, as if silence were another kind of shift. Both uses count. The trial runs through December. If the injury log stays quiet and the ships stay on the tide, the hole in the hour may become part of the hour.",
      "From the road the cranes look the same. That is fine. The change was never meant to be a view.",
    ],
  },
  {
    slug: "mangrove-counted-from-orbit",
    title: "Satellites count the mangrove that grew back",
    dek: "A new pass over the coast shows a fringe of green where last year’s maps showed mud. The count is careful, and so is the celebration.",
    section: "science",
    kicker: "From orbit",
    author: "Jules Okonkwo",
    authorRole: "Science correspondent",
    date: "2026-11-07",
    minutes: 7,
    dateline: "On the coast",
    plate: "mangrove",
    pullQuote: "Green on a satellite is a beginning. It is not yet a forest you can trust in a storm.",
    body: [
      "The image is a strip of color that would mean nothing at a kitchen table and a great deal in the lab that has been watching this shoreline since the surge. Where last November’s pass showed bare mud, this November’s pass shows a dark, repeating texture. Mangrove. Young, uneven, and, for the first time in six years, spreading rather than retreating.",
      "The people who planted it are not surprised by the direction and are suspicious of the applause. A cooperative of fishers and forestry workers put in the seedlings after the last big loss, then spent a year chasing goats and tourists away from the line. They measure success in roots that hold when a person pulls. The satellite measures success in pixels that agree with last month’s pixels.",
      "Both counts are in the report published this week. The green fringe covers a little over four hundred hectares that had been written off. Survival inside the fringe is patchy. Some plots took. Some were salt-burned and look, from above, like a hesitation. The authors refused to call the hesitation a failure. They called it next year’s work.",
      "What the orbit view is good for is argument. A district official who had described the planting as cosmetic has asked for the image in a form he can show in a meeting. The cooperative will go to the meeting. They will also bring a jar of mud, because a picture of a coast can be admired by people who have never stood in it.",
      "The next pass is in February, after the dry weeks that kill shallow roots. Everyone involved asked this desk to wait until then before using the word recovery. We are using the word return, and only for the hectares that earned it.",
    ],
  },
  {
    slug: "longer-lunch-hour",
    title: "Three cafes, one playlist, a longer lunch",
    dek: "Midday used to be a sprint between meetings. On a side street near the tram, it has started to look like a meal again.",
    section: "culture",
    kicker: "Midday",
    author: "Priya Sen",
    authorRole: "Culture correspondent",
    date: "2026-11-06",
    minutes: 5,
    dateline: "Near the tram",
    plate: "lunch",
    pullQuote: "We did not invent a long lunch. We stopped apologizing for the one we were already having.",
    body: [
      "The playlist is not clever. It is the same forty minutes of horns and a guitar, turned low enough that a person can hear a plate. Three cafes on the same short street agreed to play it between one and two, not as a brand, as a truce. If all three rooms sound alike, nobody feels they have chosen the wrong door.",
      "The long lunch did not arrive as a manifesto. It arrived because two offices nearby ended the habit of booking meetings across noon, and because the cafes, suddenly holding the same people for longer, had to decide whether to rush them or feed them. They hired one more cook between them — the shifts rotate — and put a real plate on the board beside the sandwiches.",
      "Prices went up by the cost of sitting. Nobody pretends otherwise. The bargain is posted on a card: you may stay through the playlist once. After that the table is a table again, and other people are hungry. It is the least sentimental reservation policy in the city, and it works because the staff enforce it with cheer instead of a speech about community.",
      "What changed on the street is visible from the tram. There is a line, but it is a line of people who have already decided to stop. Phones are present. They are not the main course. A woman this desk watched ate an entire fish with a fork in one hand and a closed notebook in the other, which felt like a reasonable definition of midday.",
      "The playlist ends. The rooms get louder. The city resumes its ordinary speed. For forty minutes it had another one.",
    ],
  },
  {
    slug: "what-a-budget-line-buys",
    title: "What one budget line actually buys the pier",
    dek: "The number on the page is small. Follow it past the ledger and it becomes lights, rope, and a person who knows which ladder is rotten.",
    section: "business",
    kicker: "The ledger",
    author: "Mateo Alvarez",
    authorRole: "Business correspondent",
    date: "2026-11-05",
    minutes: 7,
    dateline: "In the accounts office",
    plate: "budget",
    pullQuote: "A line item is a promise written in a dialect most readers were never taught.",
    body: [
      "In the published budget the line reads: Pier maintenance, minor. The figure beside it would not pay for a new crane, a new gate, or a press conference. It pays for the work that keeps the existing pier from becoming an anecdote. This week the clerk who enters the figure walked us down the items hiding inside it.",
      "Twelve replacement bulbs for the ramp, because the contract for “lighting” covers the avenue and stops at the water. Eighty meters of rope that fails in a specific way the night crew can see before it fails completely. Timber for two steps. And wages for Mr. Kabir, who is listed as casual labor and who has worked the same ladder since the ladder was new.",
      "Kabir’s knowledge is not in the line. The line buys his hours. The hours contain the only current inventory of which bolts have been painted over instead of replaced. He keeps that inventory in a notebook the accounts office does not audit, because it is not an account. It is the reason the account exists.",
      "When the council trimmed minor maintenance last spring, the bulbs went first, then the rope, then the second of Kabir’s weekly days. Nothing collapsed. That is the trap of a small line. Its absence arrives as inconvenience, then as a workaround, then as an incident nobody connects to a number that looked easy to reduce.",
      "The figure is restored in the winter book, with a note that minor means frequent. The clerk would like the note to survive the next revision. Notes, he said, are also a kind of maintenance. They keep a future reader from feeling original when they propose the same cut.",
    ],
  },
  {
    slug: "how-to-read-a-front-page",
    title: "How to read a front page without losing the afternoon",
    dek: "A desk note on headlines, kickers, and the quiet story that usually sits under the fold.",
    section: "culture",
    kicker: "From the desk",
    author: "Amina Rahman",
    authorRole: "City correspondent",
    date: "2026-11-04",
    minutes: 4,
    dateline: "From the desk",
    plate: "guide",
    pullQuote: "The largest headline is the door. It is not the whole house.",
    body: [
      "Start with the kicker, the small label above the headline. It tells you which desk thought the piece was theirs. A city story and a business story can describe the same gate. The kicker tells you which question they asked. If you only read headlines, you will think the paper has one subject. It has several, wearing similar clothes.",
      "Read the dek, the sentence under the headline, before you decide the piece is not for you. The dek is where the reporter admits what the story is actually about. Headlines win the glance. The dek keeps the promise. When the two disagree, believe the dek and consider it a small malfunction of the front page.",
      "Then go under the fold, including on a screen, where the fold is just the bottom of what you can see without effort. The lead is chosen for urgency and for the photograph it can carry in your mind. The piece beside it is often the one that will still be true on Monday. We put the heat map and the budget line off the biggest type on purpose. They earned a slower entrance.",
      "Stop after two stories if that is the time you have. A front page is a menu, not a debt. The desk would rather you finish a piece than collect nine beginnings and call it being informed. Come back for the ferry, or the mangrove, or the lunch. They will sit still. That is the one old advantage of a paper, even this one.",
    ],
  },
];

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getSection(slug: string) {
  return sections.find((section) => section.slug === slug);
}

export function storiesIn(section: SectionSlug) {
  return stories.filter((story) => story.section === section);
}

export function relatedStories(slug: string, count = 3) {
  const story = getStory(slug);
  if (!story) return stories.slice(0, count);
  const same = stories.filter((item) => item.section === story.section && item.slug !== slug);
  const others = stories.filter((item) => item.section !== story.section);
  return [...same, ...others].slice(0, count);
}

export function searchStories(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return stories;
  return stories.filter((story) => {
    const haystack = [story.title, story.dek, story.author, story.kicker, story.section, story.dateline, ...story.body]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
}
