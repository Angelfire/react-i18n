import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="flex justify-between py-4 container">
      <h1 className="text-sky-500 font-bold text-xl">Dr. Juan Perez</h1>
      <nav>
        <ul className="flex flex-row gap-3 font-light">
          <li>{t("header.home")}</li>
          <li>{t("header.aboutMe")}</li>
          <li>{t("header.contactMe")}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
