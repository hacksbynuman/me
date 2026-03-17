import { Person, Social } from "@/types";

const person: Person = {
  firstName: "Numan",
  lastName: "Rajkotiya",
  name: "Numan Rajkotiya",
  role: "Offensive Security Consultant",
  avatar: "/images/nom.jpg",
  email: "example@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

export { person, social };
