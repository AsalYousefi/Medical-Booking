import { FormEvent, useContext } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";

export default function LoginForm() {
  const { t } = useTranslation();
  const auth = useContext(AuthContext)

  function login() {
    auth.setIsLogin(true)
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    login()
  }
  return (
    <div className="d-flex flex-column mx-3 mt-4 mb-5">
      <form action="" className="d-flex flex-column" onSubmit={(e) => submitHandler(e)}>
        <label
          className="text-capitalize form-label text-muted"
          htmlFor="mobile"
        >
          {t("authPage.form.mobile.label")}
        </label>
        <input
          type="number"
          className="p-2 form-control"
          placeholder={t("authPage.form.mobile.placeholder")}
        />
        <label
          className="text-capitalize form-label text-muted"
          htmlFor="password"
        >
          {t("authPage.form.password")}
        </label>
        <input
          type="text"
          className="p-2 form-control"
          placeholder="••••••••"
        />
        <a href="#" className="align-self-end my-2 fw-500">
          {t("authPage.login.forgot")}
        </a>
        <button
          type="submit"
          className="bg-primary text-white rounded-1 border-0 py-2 text-capitalize fw-bold mt-2"
        >
          {t("authPage.login.submit")}
        </button>
      </form>
      <p className="text-center  text-muted my-3">
        {t("authPage.login.p")}{" "}
        <a href="#" className="text-capitalize text-primary fw-500">
          {t("authPage.signup.title")}
        </a>
      </p>
    </div>
  );
}
