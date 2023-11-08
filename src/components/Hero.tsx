import illustration from "/illustration.png";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="mt-10 grid grid-cols-2 container">
      <div className="flex flex-col gap-5 pt-10">
        <h2 className="text-5xl font-bold">{t("hero.title")}</h2>
        <p className="text-xl font-light leading-9 w-4/5">
          {t("hero.description")}
        </p>
        <div className="flex gap-2">
          <Button variant="secondary">{t("hero.earlyAccess")}</Button>
          <Button variant="outline">{t("hero.learnMore")}</Button>
        </div>
      </div>
      <div>
        <img src={illustration} alt="Doctor" className="px-12" />
      </div>
    </section>
  );
};

export default Hero;
