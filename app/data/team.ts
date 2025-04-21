export interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  role: {
    title: string;
    department: string;
  };
  image: string;
  color: 'peacock-teal' | 'peacock-purple' | 'peacock-blue' | 'peacock-gold';
  bio: string;
  type: 'core' | 'collaborator' | 'board';
}

export const teamMembers: TeamMember[] = [
  {
    name: { first: 'RACHANA', last: 'JOSHI' },
    role: {
      department: 'ARTISTIC DIRECTION',
      title: 'ARTISTIC DIRECTOR'
    },
    image: '/rach.jpeg',
    color: 'peacock-teal',
    bio: "Rachana Joshi is an independent dance artist, educator, emerging choreographer, and arts administrator based in Tkaronto. She completed her Bharatanatyam arangetram under the tutelage of Lata Pada in 2017, and graduated with honours from York University’s BFA Program in Dance in 2019, where she trained in modern and contemporary techniques such as Limon and Graham. Since 2017, Rachana has been a faculty member and company dancer with Sampradaya Dance Centre, performing in and supporting major productions including Sankhya, Mandala, and most recently Kintsugi, the company’s upcoming work. In 2019, she joined Nova Dance as a company dancer. With the company, she performed and served as rehearsal assistant in Svaha! (2023) and Decoded Dance (2024), both national touring productions. Rachana is also a certified facilitator in Therapeutic Dance in Education and has worked with many eminent choreographers in Toronto. \n\nShe is currently engaged in the roles of the Company Manager at The National Ballet of Canada and honing her skills as an Arts Administrator. With a deep understanding of the dance industry in Canada, Rachana wishes to bring her expertise to the forefront, leveraging her unique combination of artistic experience and administrative acumen to contribute meaningfully to the growth and sustainability of the Kala Collective, while fostering an inclusive and vibrant artistic community.",
    type: 'collaborator'
  },
  {
    name: { first: 'PURAWAI', last: 'VYAS' },
    role: {
      department: 'DANCE',
      title: 'COLLABORATOR'
    },
    image: '/Purawai Vyas Zvonko Photography.jpeg',
    color: 'peacock-purple',
    bio: "Purawai Vyas is an emerging dance artist, with over 15 years of training in Bharatanatyam. She received her training under Guru Lata Pada at Sampradaya Dance Academy and has also trained in Ballet, modern/contemporary dance, hip hop and Kalarippayattu during her undergraduate career. Purawai holds an Honours BFA in Dance from York University. Purawai has created and presented stage works and dance films in various festivals in the Greater Toronto Area, including CanAsian Dance’s Grit Short Dances Festival, Citadel Spring Mix, TD Mosaics Festival and Toes for Dance’s Common Ground Festival to name a few. As an independent artist, Purawai is interested in exploring foundations of Bharatanatayam dance vocabulary as building blocks to create contemporary dance works as well as pulling apart and understanding narratives that exist within Indian mythology.",
    type: 'collaborator'
  },
  {
    name: { first: 'ATRI', last: 'NUNDY' },
    role: {
      department: 'DANCE',
      title: 'COLLABORATOR'
    },
    image: '/atri.png',
    color: 'peacock-blue',
    bio: "Atri Nundy started learning Bharatanatyam at Sampradaya Dance Academy under her teacher Lata Pada at the age of 4. After completing her arangetram in 2005, she continues to work as a teacher at the Academy and as a Company dancer and choreographer at Sampradaya Dance Creations. While training in Bharatanatyam, Atri was fortunate enough to be able to train in various dance forms. This combination has given her the interest to explore beyond the traditional realms of Bharatanatyam. She has had the opportunity to work with Kevin Ormsby at KasheDance and Brandy Leary at Anandam Dancetheatre. She created her first ensemble piece, Mindful Chatter, which was commissioned by Anandam Dancetheatre and supported by the Toronto Arts Council and Canada Council for the Arts in April 2022. ",
    type: 'collaborator'
  },
  {
    name: { first: 'DEEPIKA', last: 'MAHADEVAN' },
    role: {
      department: 'BOARD', 
      title: 'BOARD CHAIR'
    },
    image: '/Deepika Headshot.JPG',
    color: 'peacock-gold',
    bio: "Deepika Mahadevan (also known as Dee Devan in the music world) is a multi-faceted artist and an engineering manager at a climate and energy consulting firm. With over eight years as a lead singer and dancer for Agni, a renowned North American orchestral band, she has shared the stage with legendary artists like Hariharan and Sid Sriram. Trained in Carnatic music and contemporary vocal techniques, Deepika's versatile voice spans genres from R&B and soul to pop and ballads. A trained Bharatanatyam dancer, she seamlessly integrates movement into her performances, adding a unique artistic and visual dimension. Fluent in Tamil, Hindi, and English, she effortlessly bridges South Asian and Western music influences.\n\nBeyond the stage, Deepika is a chemical engineer with a decade of experience in the energy and carbon markets. She is a project manager and leads the Ontario operations at her firm, specializing in greenhouse gas quantification and verification, contributing to global sustainability efforts. In music, she has made significant strides as a playback singer in Tamil cinema, collaborating with esteemed composers, while also continuing to build a catalog as an independent singer-songwriter. Balancing project management and creativity, Deepika is dedicated to pushing boundaries, fostering cross-cultural artistic collaboration, and making a meaningful impact in both consulting and entertainment industries.",
    type: 'board'
  },
  {
    name: { first: 'ASHNA', last: 'MISHRA' },
    role: {
      department: 'BOARD',
      title: 'BOARD SECRETARY'
    },
    image: '/Ashna Headshot from Bios.jpg',
    color: 'peacock-gold',
    bio: "Ashna is a lifelong dancer and advocate for arts and culture in our communities. With a strong foundation in Bharatanatyam, Ashna continues to expand her repertoire with new styles from cuban salsa to jazz funk. Outside of the studio, Ashna is an engineer working in government to ensure Ontario is able to meet the electricity needs of a decarbonized world while maintaining affordability. Ashna looks forward to bringing her passion for administrative processes, event coordination, and fresh perspective to Kala's board.",
    type: 'board'
  },

  {
    name: { first: 'NIDHI', last: 'BAADKAR' },
    role: {
      department: 'BOARD',
      title: 'BOARD TREASURER'
    },
    image: '/nidhi.png',
    color: 'peacock-gold',
    bio: "Nidhi Baadkar (she/her) is a professional dancer and aspiring choreographer whose practice is based in Bharata-natyam and contemporary dance. She is an alumni of Dance Arts Institute, Canada and Attakkalari Centre for Movement Arts, India where she trained in various other forms like ballet, modern dance, kalaripayattu and physical theatre. She has performed and worked as an artist in Bahrain, Canada and India and is a certified facilitator in Therapeutic Dance in Education. She has worked with many eminent choreographers in Toronto and was part of Nova Dance's recent production Svāhā. She is currently engaged in the roles of the Company Manager at The National Ballet of Canada and honing her skills as an Arts Administrator. With a deep understanding of the dance industry in Canada, Nidhi wishes to bring her expertise to the forefront, leveraging her unique combination of artistic experience and administrative acumen to contribute meaningfully to the growth and sustainability of the Kala Collective, while fostering an inclusive and vibrant artistic community.",
    type: 'board'
  },
  {
    name: { first: 'NASH', last: 'SAMJI' },
    role: {
      department: 'BOARD',
      title: 'BOARD MEMBER'
    },
    image: '/nash.png',
    color: 'peacock-gold',
    bio: "Nash is a seasoned entrepreneur with a strong foundation in business and finance, bringing entrepreneurial insight and strategic thinking to every project she touches. With decades of experience launching and running successful family businesses, she continues to lead and grow ventures with the same passion and dedication.\n\nHer deep expertise in logistics and process optimization ensures that projects not only run smoothly but are set up for long-term success. Nash's drive to turn ideas into reality is matched by her unwavering commitment to seeing communities thrive. She is especially inspired by opportunities that bring people together through shared experiences.\n\nOutside of work, Nash is a devoted explorer of music, performance, and culture. She enjoys immersing herself in various genres and artistic expressions, always seeking to learn and appreciate something new. Nash is also an avid athlete who plays a variety of sports and has won several local tournaments, showcasing her competitive spirit and love for physical activity.\n\nAt her core, Nash is passionate about building inclusive spaces where people can connect, create, and experience the beauty of art, movement, and community.",
    type: 'board'
  },
  {
    name: { first: 'DONYA', last: 'SANDHU' },
    role: {
      department: 'BOARD',
      title: 'BOARD MEMBER'
    },
    image: '/Donya Headshot.JPG',
    color: 'peacock-gold',
    bio: "Donya is a passionate and dedicated Bharatanatyam artist with over 16 years of rigorous training under the esteemed Guru Lata Pada at Sampradaya Dance Academy. Upon graduation, Donya joined Sampradaya Dance Creations as a company dancer, further refining her artistry and performing in several prestigious productions.\n\nBeyond Canada, Donya has expanded her artistic horizons through international workshops and residencies. In 2015, she trained in the UK at Milapfest, studying under Guru Bragha Bessell and Rama Vaidyanathan. She has also performed in various productions in Punyah Krishna, choreographed by the renowned Parshwanath Upadhye, and Mandala with Sampradaya Dance Creations.\n\nIn addition to her deep commitment to dance, Donya brings a strong background in health sciences and business. She holds a Bachelor of Honours in Health Sciences and a Master's in Biotechnology from McMaster University and is currently pursuing an MBA at Kellogg School of Management. Her unique blend of artistic excellence and scientific acumen allows her to approach leadership at Kala Dance Collective with a multidisciplinary perspective, ensuring a balance of creative vision and strategic growth. Donya is committed to expanding access to Bharatanatyam, fostering innovation in dance presentation, and strengthening Kala Dance Collective's presence in the global arts community.",
    type: 'board'
  }
]; 