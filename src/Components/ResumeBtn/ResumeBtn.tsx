import { GrAttachment } from "react-icons/gr";
import { useTranslation } from "react-i18next";

export default function ResumeBtn() {

  const { t } = useTranslation();

  return (
    <a
      href={t("resumeBtn.file")}
      target="_blank"
      rel="noopener noreferrer"
      className="resume-btn position-fixed bottom-0 m-3 d-flex align-items-center justify-content-center rounded-circle bg-white shadow text-dark"
      aria-label={t("resume")}
    >
      <GrAttachment className="fs-5" />

      <span className="resume-tooltip">
        {t("resumeBtn.resume")}
      </span>
    </a>
  );
};
