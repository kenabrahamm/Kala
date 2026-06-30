export type Program = {
  title: string;
  subtitle: string;
  link: string;
  description: string;
  image: string;
  color: 'peacock-teal' | 'peacock-purple' | 'peacock-blue' | 'peacock-gold';
};

export const programs: Program[] = [
  {
    title: "PREP + PRACTICE",
    subtitle: "Community practice",
    link: "/programs/prep-practice",
    description: "Commnunity practice sessions for intermediate and advanced bharatanatyam dancers",
    image: "/placeholder.svg?height=400&width=400",
    color: "peacock-teal"
  },
  {
    title: "PREP + PERFORMANCE",
    subtitle: "Ensemble performance workshop",
    link: "/programs/prep-performance",
    description: "A high-intensity workshop series for advanced Bharatanatyam practitioners",
    image: "/PrepPerformance.png",
    color: "peacock-gold"
  },
  {
    title: "ANKURA",
    subtitle: "Improvisation workshop series",
    link: "/programs/ankura",
    description: "A collaborative workshop reuniting music and dance through improvisation",
    image: "/Ankura.png",
    color: "peacock-purple"
  },
] 