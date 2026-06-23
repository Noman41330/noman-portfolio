import {
  Home,
  User,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  FolderKanban,
  Award,
  Camera,
  Mail,
  Compass,
} from "lucide-react";

export const portfolioRoutes = [
  { title: "Home", icon: Home, path: "/" },
  { title: "About", icon: User, path: "/about" },
  { title: "Experience", icon: BriefcaseBusiness, path: "/experience" },
  { title: "Education", icon: GraduationCap, path: "/education" },
  { title: "Skills", icon: Code2, path: "/skills" },
  { title: "Projects", icon: FolderKanban, path: "/projects" },
  { title: "Awards", icon: Award, path: "/awards" },
  { title: "Hobbies", icon: Compass, path: "/hobbies" },
  { title: "Contact", icon: Mail, path: "/contact" },
];