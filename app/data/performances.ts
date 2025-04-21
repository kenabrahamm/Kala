export interface Performance {
  title: string;
  date: string;
  venue: string;
  description: string[];
  color: 'peacock-teal' | 'peacock-purple' | 'peacock-blue' | 'peacock-gold';
  videoUrl?: string;
  image: string;
  tag: string;
  monthYear: string;
}

export const performances: Performance[] = [
  
  {
    title: "Untitled | Eyes on Beginnings",
    date: "Mar 29, 2025",
    venue: "Winchester Street Theatre",
    description: [
      "Rooted in the technique of Bharatanatyam, this experimental work challenges the very coordination and codification that defines the form.",
      "Drawing from its rich vocabulary of gesture, rhythm, and embodied emotion, the piece investigates how Bharatanatyam's foundational tools—particularly the synchronization of eyes, head, hands, and feet—can be dismantled, reassembled, and expanded",
      "This iteration was shared as part of TDT's Eyes on Beginnings program."
    ],
    color: "peacock-purple",
    image: "/eyes-on-beginnings.jpg",
    tag: "Touring",
    monthYear: "March 2025"
  },
  {
    title: "Kula Devi | IBPOC Network Tour",
    date: "Mar 19, 2025",
    venue: "The Registry Theatre",
    description: [
      "Kula Devi tells our stories as South-Asian diasporic women in Canada. Informed by our foundation in Bharatanatyam and our South Asian heritage, the work is an embodiment of our individual family goddesses/deities, or Kula Devi and is an homage to our ancestral lineage.",
      "Through processes of colonization, immigration, and forced homogenization, many families have lost their connection to their Kula Devi. This work is a reflection on the intertwining roles of deity and devotee and a reconnection to our own ancestry, celebrating the resilience and reverence of our heritage within a contemporary context.",
      "This performance is part of the IBPOC Network Tour, a series of performances and workshops that are part of wind in the leaves collective's mandate to support and celebrate the diverse voices and experiences of IBPOC artists in Canada."
    ],
    color: "peacock-purple",
    image: "/Kula Devi IBPOC.jpg",
    tag: "Touring",
    monthYear: "March 2025"
  },
  {
    title: "Kula Devi | Citadel Spring Mix",
    date: "Apr 9-11, 2024",
    venue: "The Citadel: Ross Centre for Dance",
    description: [
      "Kula Devi tells our stories as South-Asian diasporic women in Canada. Informed by our foundation in Bharatanatyam and our South Asian heritage, the work is an embodiment of our individual family goddesses/deities, or Kula Devi and is an homage to our ancestral lineage.",
      "This work is a reflection on the intertwining roles of deity and devotee and a reconnection to our own ancestry, celebrating the resilience and reverence of our heritage within a contemporary context.",
      "This performance is part of the Citadel Spring Mix, a series brings together works by Toronto-based artists alongside established works by Montreal-based artists"
    ],
    color: "peacock-purple",
    image: "/together.jpg",
    tag: "Repertoire",
    monthYear: "April 2024"
  },
  {
    title: "Nirguna | PROSPECTS",
    date: "Nov 4, 2021",
    venue: "Burlington Student Theatre",
    description: [
      "Nirguna is a Bharatanatyam work that aims to portray the cyclical nature of the ascetic Hindu god Shiva, who is synonymous with the idea of destruction. How does one provide form to something that is formless? How does one portray stillness in an ever-moving world?",
      "Nirguna explores the well-known symbols that adorn the image of Shiva; the snakes around his neck, the ashes smeared on his head, the tiger skin around his waist. These symbols illustrate the idea of Shiva as a juxtaposition of peace and stillness within the chaos; he is the constant that is unaffected by the chaos, the destroyer of the ego, material desires, and fear.",
      "When these are destroyed, one achieves seamless alignment with the universe. The work examines the duality that Shiva represents, and the cyclical and intimate nature of creation and destruction."
    ],
    color: "peacock-purple",
    image: "/Nirguna Jess Bullock (3).jpg",
    tag: "Repertoire",
    monthYear: "November 2021"
  },
  {
    title: "Nirguna | Night Shift",
    date: "Oct 3, 2019",
    venue: "The Citadel: Ross Centre for Dance",
    description: [
      "Nirguna is a Bharatanatyam work that aims to portray the cyclical nature of the ascetic Hindu god Shiva, who is synonymous with the idea of destruction. How does one provide form to something that is formless? How does one portray stillness in an ever-moving world?",
      "Nirguna explores the well-known symbols that adorn the image of Shiva; the snakes around his neck, the ashes smeared on his head, the tiger skin around his waist. These symbols illustrate the idea of Shiva as a juxtaposition of peace and stillness within the chaos; he is the constant that is unaffected by the chaos, the destroyer of the ego, material desires, and fear.",
      "When these are destroyed, one achieves seamless alignment with the universe. The work examines the duality that Shiva represents, and the cyclical and intimate nature of creation and destruction."
    ],
    color: "peacock-purple",
    image: "/Nirguna Citadel.png",
    tag: "Repertoire",
    monthYear: "October 2019"
  },
]  
