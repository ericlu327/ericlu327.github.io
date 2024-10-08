export type Coord = { x: number; y: number };

export type LandingPageSectionProps = {
  sectionID: string;
};

export type TimelineElementExperience = {
  id: number;
  jobPosition: string;
  companyName: string;
  companyLogo: string;
  location: string;
  date: string;
  description: string | string[];
  skillsUsed: string[];
  links: {
    icon?: string;
    previewImage?: string;
    displayText?: string;
    hyperlink: string;
  }[];
};

export type ProjectCarouselCard = {
  id: number;
  image: string;
  title: string;
  description: string;
  fullDescription?: string;
  skillsUsed: string[];
  projectLink: string;
  additionalLinks: {
    icon?: string;
    previewImage?: string;
    displayText?: string;
    hyperlink: string;
  }[];
};

export type SkillsByCategory = {
  categoryTitle: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  icon?: string;
  description?: string;
  link?: string;
};

export type Endorsement = {
  headshot: string;
  name: string;
  title: string;
  content: string;
  context: string;
};

export type PhotographyAlbum = {
  id: number;
  title: string;
  description?: string;
  dir: string;
  length: number;
  imageHashes: string[];
};

export type BlogTableEntry = {
  id: string;
  date: Date;
  title: string;
  readingLength: number;
  preview: string;
  tags: string[];
};
