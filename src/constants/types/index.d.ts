/* Sections Declarations */

export interface IUser {
  id?: string;
  email: string;
  password: string;
}

// Skills Declarations
export interface ISkill {
  id?: string;
  name: string;
  icon: string;
}

// Projects Declarations
export interface IProject {
  id?: string;
  title: string;
  description: string;
  link: string;
  github: string;
  techStack: ISkill[];
}

/*Blogs Declarations */
export interface IBlog {
  id?: string;
  blogId: string;
  title: string;
  createdAt?: string;
  author: string;
  category: string;
  keywords: string;
  imageUrl: string;
  article: string;
}
