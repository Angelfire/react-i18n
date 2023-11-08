import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="grid grid-cols-2 gap-5 mt-24 container">
      <h2 className="text-5xl font-bold">{t("services.title")}</h2>
      <p className="text-xl font-light leading-9">
        {t("services.description")}
      </p>
      <div className="col-span-2 grid grid-cols-4 gap-5">
        <div className="shadow-slate-200 shadow-lg hover:shadow-2xl">
          <h3 className="text-2xl p-5"> {t("services.generalMedicalT")}</h3>
          <hr className="h-px bg-gray-200 border-0" />
          <p className="p-5">{t("services.generalMedicalDesc")}</p>
        </div>
        <div className="shadow-slate-200 shadow-lg hover:shadow-2xl">
          <h3 className="text-2xl p-5"> {t("services.chronicDiseaseCareT")}</h3>
          <hr className="h-px bg-gray-200 border-0" />
          <p className="p-5">{t("services.chronicDiseaseCareDesc")}</p>
        </div>
        <div className="shadow-slate-200 shadow-lg hover:shadow-2xl">
          <h3 className="text-2xl p-5">
            {t("services.personaliedMedicalCareT")}
          </h3>
          <hr className="h-px bg-gray-200 border-0" />
          <p className="p-5">{t("services.personaliedMedicalCareDesc")}</p>
        </div>
        <div className="shadow-slate-200 shadow-lg hover:shadow-2xl">
          <h3 className="text-2xl p-5"> {t("services.diagnostiTestsT")}</h3>
          <hr className="h-px bg-gray-200 border-0" />
          <p className="p-5">{t("services.diagnostiTestsDesc")}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
