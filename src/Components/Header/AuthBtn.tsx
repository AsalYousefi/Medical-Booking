import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaRegUser } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function AuthBtn() {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);
  return auth.isLogin ? (
    <button className="auth-btn text-primary border-0 fs-5" onClick={() => auth.login("asal", "09090")}><FaRegUser /></button>
  ) : (
    <button className="auth-btn text-white bg-primary border-0 py-1 fw-bold rounded-2" onClick={() => auth.login("asal", "09090")}>{t("header.authBtn")}</button>
  );
}
