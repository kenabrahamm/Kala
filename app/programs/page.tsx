'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const WorkPage = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleDescription = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const projects = [
    {
      id: 1,
      title: "Nirguna (formless)",
      date: "December 2024",
      description: "Nirguna is a Bharatanatyam work that aims to portray the cyclical nature of the ascetic Hindu god Shiva, who is synonymous with the idea of destruction. How does one provide form to something that is formless? How does one portray stillness in an ever-moving world? Nirguna explores the well-known symbols that adorn the image of Shiva; the snakes around his neck, the ashes smeared on his head, the tiger skin around his waist. These symbols illustrate the idea of Shiva as a juxtaposition of peace and stillness within the chaos; he is the constant that is unaffected by the chaos, the destroyer of the ego, material desires, and fear. When these are destroyed, one achieves seamless alignment with the universe. The work examines the duality that Shiva represents, and the cyclical and intimate nature of creation and destruction. ",
      image: "/images/project1.jpg",
      technologies: ["Exploration Performance"]
    },
    {
      id: 2,
      title: "Kula Devi",
      date: "2024-01-01",
      description: "Kula Devi tells our stories as South-Asian diasporic women in Canada. Informed by our foundation in Bharatanatyam and our South Asian heritage, the work is an embodiment of our individual family goddesses/deities, or Kula Devi and is an homage to our ancestral lineage. Kula Devi are deities assigned to Hindu South Asian families. They are often regarded as the protector, guardian, and knowledge keeper of the family. Through processes of colonization, immigration, and forced homogenization, many families have lost their connection to their Kula Devi. This work is a reflection on the intertwining roles of deity and devotee and a reconnection to our own ancestry. Ritual and the significance of repetition are examined, revealing how caring for deity mirrors self-care. The piece celebrates the resilience and reverence of our heritage within a contemporary context.",
      image: "/images/project2.jpg",
      technologies: ["Community Engagement"],
    },

  ];

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-transparent py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto animate-[fade-in_1s_ease-in]">
        <div className="mb-16">
            <h1 className="font-['Rosario'] font-normal text-[#0F1B4D] text-4xl md:text-6xl mb-4 ">
                Our Work
            </h1>
            <p className="max-w-4xl w-full text-left text-xl text-muted-foreground font-['Helvetica Neue'] font-light">
            <strong className="font-bold">Our mission is to preserve and promote the rich tradition of Bharatanatyam</strong>
            {`, ensuring its vitality and relevance in contemporary diasporic contexts. We strive to support and celebrate the cultural torchbearers who keep this art form alive, while fostering innovation, inclusivity, and dialogue within the broader artistic and cultural landscapes.
            `}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-gradient-to-b from-white to-[#FFF7E8]/20 border border-gray-200 shadow-sm ring-1 ring-[#FDBA74]/10 h-full transition-transform transform hover:scale-105"
            >
              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm text-gray-600 mb-2">{project.date}</span>
                <h2 className="text-2xl font-bold text-[#00445F] mb-3 font-['Rosario']">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow font-['Helvetica Neue']">
                  {expandedIds.includes(project.id) 
                    ? project.description 
                    : truncateText(project.description, 200)}
                  {project.description.length > 200 && (
                    <button
                      onClick={() => toggleDescription(project.id)}
                      className="text-[#0E6980] hover:text-[#0b5466] ml-2 font-medium"
                    >
                      {expandedIds.includes(project.id) ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#E2A436] text-white text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <Button className="w-1/2 bg-[#0E6980] text-white text-sm mt-4 rounded-none">
                  View Project <ArrowRight className="size-5 ml-2" />
                </Button> */}
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
