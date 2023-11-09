import React from "react";
import LangToggle from "@/components/LangToggle";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900">
      <div className="container py-5 flex justify-between">
        <p className="text-white">@2023 Dr. Juan Perez - All wrongs reserved</p>
        <LangToggle />
      </div>
    </footer>
  );
};

export default Footer;
