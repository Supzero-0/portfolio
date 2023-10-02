import React from "react";
import CV from "../../assets/CV_ML-CDA.pdf";
import { useTranslation } from "react-i18next";

export default function CTA() {
  const [t, i18n] = useTranslation("common");

  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {t("cta.cv")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t("cta.talk")}
      </a>
    </div>
  );
}
