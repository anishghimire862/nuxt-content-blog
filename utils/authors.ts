interface Author {
  name: string;
  title: string;
  image: string;
  description?: string;
  links: {
    website?: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

const authors: Record<string, Author> = {
  "anish-ghimire": {
    name: "Anish Ghimire",
    title: "Full-stack software developer",
    image: "https://avatars.githubusercontent.com/u/24493516?v=4",
    links: {
      twitter: "https://twitter.com/anishghimire862",
      github: "https://github.com/anishghimire862",
      linkedin: "https://www.linkedin.com/in/anishghimire862/"
    },
  },
};

export const getAuthorDetails = (slug: string): Author | undefined => {
  return authors[slug];
};