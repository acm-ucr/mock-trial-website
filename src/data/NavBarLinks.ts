export interface navigation {
  name: string;
  link: string;
}

const navigations: navigation[] = [
  {
    name: "Board",
    link: "/board",
  },
  {
    name: "Achievements",
    link: "/achievements",
  },
  {
    name: "FAQs",
    link: "/faqs",
  },
];

export default navigations;
