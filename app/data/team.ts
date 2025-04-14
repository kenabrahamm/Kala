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
    image: '/placeholder.svg?height=400&width=300',
    color: 'peacock-teal',
    bio: "Bio for Rachana Joshi",
    type: 'core'
  },
  {
    name: { first: 'PURAWAI', last: 'VYAS' },
    role: {
      department: 'DANCE',
      title: 'COLLABORATOR'
    },
    image: '/placeholder.svg?height=400&width=300',
    color: 'peacock-purple',
    bio: "Bio for Purawai Vyas",
    type: 'collaborator'
  },
  {
    name: { first: 'ATRI', last: 'NUNDY' },
    role: {
      department: 'DANCE',
      title: 'COLLABORATOR'
    },
    image: '/placeholder.svg?height=400&width=300',
    color: 'peacock-blue',
    bio: "Bio for Atri Nundy",
    type: 'collaborator'
  },
  {
    name: { first: 'DEEPIKA', last: 'MAHADEVAN' },
    role: {
      department: 'BOARD',
      title: 'BOARD CHAIR'
    },
    image: '/placeholder.svg?height=400&width=300',
    color: 'peacock-gold',
    bio: "Deepika Mahadevan (also known as Dee Devan in the music world) is a multi-faceted artist and an engineering manager at a climate and energy consulting firm. With over eight years as a lead singer and dancer for Agni, a renowned North American orchestral band, she has shared the stage with legendary artists like Hariharan and Sid Sriram. Trained in Carnatic music and contemporary vocal techniques, Deepika's versatile voice spans genres from R&B and soul to pop and ballads. A trained Bharatanatyam dancer, she seamlessly integrates movement into her performances, adding a unique artistic and visual dimension. Fluent in Tamil, Hindi, and English, she effortlessly bridges South Asian and Western music influences.\n\nBeyond the stage, Deepika is a chemical engineer with a decade of experience in the energy and carbon markets. She is a project manager and leads the Ontario operations at her firm, specializing in greenhouse gas quantification and verification, contributing to global sustainability efforts. In music, she has made significant strides as a playback singer in Tamil cinema, collaborating with esteemed composers, while also continuing to build a catalog as an independent singer-songwriter. Balancing project management and creativity, Deepika is dedicated to pushing boundaries, fostering cross-cultural artistic collaboration, and making a meaningful impact in both consulting and entertainment industries.",
    type: 'board'
  },
  {
    name: { first: 'ASHNA', last: 'MISHRA' },
    role: {
      department: 'BOARD',
      title: 'BOARD MEMBER'
    },
    image: '/placeholder.svg?height=400&width=300',
    color: 'peacock-gold',
    bio: "Bio for Ashna Mishra",
    type: 'board'
  }
]; 