import { IR, US } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next"

export default function LngBtn() {

    const { i18n } = useTranslation();

    function changeLng(lng) {
        i18n.changeLanguage(lng);
    }

    const nextLng = i18n.language === "fa" ? "en" : "fa"

    return (
        <button className="d-flex align-items-center border-0 text-uppercase" onClick={() => changeLng(nextLng)}>
            {i18n.language === "en" ? (
                <>
                  <IR className="me-2" height={20} width={30} />
                  fa
                </>
            ): (
                <>
                  <US className="me-2" height={20} width={30}  />
                  en
                </>
            )}
        </button>
    )
}