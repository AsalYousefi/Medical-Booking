import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaRegUser } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function AuthBtn() {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);
  return auth.isLogin ? (
    <button onClick={() => auth.login("asal", "09090")}><FaRegUser /></button>
  ) : (
    <button onClick={() => auth.login("asal", "09090")}>{t("header.authBtn")}</button>
  );
}
