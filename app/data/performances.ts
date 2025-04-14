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
    title: "NIRGUNA",
    date: "NOV 10TH-12TH 2023",
    venue: "HARBOURFRONT CENTRE, TORONTO",
    description: [
      "Nirguna is a Bharatanatyam work that aims to portray the cyclical nature of the ascetic Hindu god Shiva, who is synonymous with the idea of destruction. How does one provide form to something that is formless? How does one portray stillness in an ever-moving world?",
      "The work examines the duality that Shiva represents, and the cyclical and intimate nature of creation and destruction. Through the well-known symbols that adorn Shiva - the snakes around his neck, the ashes smeared on his head, the tiger skin around his waist - we explore the juxtaposition of peace and stillness within chaos."
    ],
    color: "peacock-teal",
    videoUrl: "https://youtu.be/KZbYhWzd5FY",
    image: "/space.jpg",
    tag: "Kala Space",
    monthYear: "November 2023"
  },
  {
    title: "KULA DEVI",
    date: "JAN 19TH-21ST 2024",
    venue: "DANIELS SPECTRUM, TORONTO",
    description: [
      "Kula Devi tells our stories as South-Asian diasporic women in Canada. Informed by our foundation in Bharatanatyam and our South Asian heritage, the work is an embodiment of our individual family goddesses/deities, or Kula Devi and is an homage to our ancestral lineage.",
      "Through processes of colonization, immigration, and forced homogenization, many families have lost their connection to their Kula Devi. This work is a reflection on the intertwining roles of deity and devotee and a reconnection to our own ancestry, celebrating the resilience and reverence of our heritage within a contemporary context."
    ],
    color: "peacock-purple",
    image: "/together.jpg",
    tag: "Kala Space",
    monthYear: "January 2024"
  }
] 