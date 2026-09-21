import { Dispatch, SetStateAction, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaRegUser } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

type AuthBtnProps = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function AuthBtn({setIsModalOpen}: AuthBtnProps) {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);
  return auth.isLogin ? (
    <button className="auth-btn text-primary border-0 fs-5" onClick={() => auth.setIsLogin(false)}><FaRegUser /></button>
  ) : (
    <button className="auth-btn text-primary border border-1 border-primary py-1 fw-bold rounded-2" onClick={() => setIsModalOpen(true)}>{t("header.authBtn")}</button>
  );
}
