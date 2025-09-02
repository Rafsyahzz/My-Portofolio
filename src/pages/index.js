import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../sections/about/about";
import Contact from "../sections/contact/contact";
import Hero from "../sections/hero/hero";
import Projects from "../sections/project/project";
import Skill from "../components/skill/skill";
import skill_data from "../../data/skill_data";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Rafii Syahbani" />
      <Hero />
      <Projects />
      <Skill skills={skill_data} />
      <About />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
