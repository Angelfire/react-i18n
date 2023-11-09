import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

import aboutMe from "/aboutme.png";

const AboutMe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-sky-500 mt-24 py-16">
      <div className="container">
        <h2 className="text-3xl text-white font-bold">{t("aboutMe.title")}</h2>
        <div className="flex items-center">
          <p className="text-xl text-white leading-8">
            {t("aboutMe.description")}
          </p>
          <img className="w-96" src={aboutMe} alt="About me" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
