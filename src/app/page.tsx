import Navbar from "../app/Components/Navbar/page"
 import Herosection from "./HeroSection/page";
import Skils from "./SkillsSection/page";
import Who_am_i from "./Who_am_i/page";
import Projects from "./ProjectSection/page";
import Contact from "./Contact/page";
export default function Home() {
  return (
    <>
    {/* all components */}
<Navbar/>
<Herosection/>
<Who_am_i/>
<Skils/>
<Projects/>
<Contact/>
    </>
  );
}
