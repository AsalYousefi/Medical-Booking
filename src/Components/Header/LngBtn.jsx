import { IR, US } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next"

export default function LngBtn() {

    const { i18n } = useTranslation();

    function changeLng(lng) {
        i18n.changeLanguage(lng);
    }

    const nextLng = i18n.language === "fa" ? "en" : "fa"

    return (
        <button className="lng-btn d-flex align-items-center border-0 text-uppercase" onClick={() => changeLng(nextLng)}>
            {i18n.language === "en" ? (
                <>
                  <IR className="me-2" />
                  fa
                </>
            ): (
                <>
                  <US className="me-2"  />
                  en
                </>
            )}
        </button>
    )
}