import React from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Services: React.FC = () => {
  const { t } = useLanguage();
  interface IService  {
    title: string;
    description: string;
  }

  const services = [
    {
      title: t("services.generalMedicalT"),
      description: t("services.generalMedicalDesc")
    },
    {
      title: t("services.chronicDiseaseCareT"),
      description: t("services.chronicDiseaseCareDesc")
    },
    {
      title: t("services.personaliedMedicalCareT"),
      description: t("services.personaliedMedicalCareDesc")
    },
    {
      title: t("services.diagnostiTestsT"),
      description: t("services.diagnostiTestsDesc")
    }
  ]

  const servicesCards =  services.map((service: IService) => {
    return (
      <div key={service.title} className="shadow-slate-200 shadow-lg hover:shadow-2xl rounded-md">
        <h3 className="text-2xl p-5">{service.title}</h3>
        <hr className="h-px bg-gray-200 border-0" />
        <p className="p-5">{service.description}</p>
      </div>
    )
  })

  return (
    <section className="grid grid-cols-2 gap-5 mt-24 container">
      <h2 className="text-3xl font-bold">{t("services.title")}</h2>
      <p className="text-xl font-light leading-9">
        {t("services.description")}
      </p>
      <div className="col-span-2 grid grid-cols-4 gap-5">
        {servicesCards}
      </div>
    </section>
  );
};

export default Services;
