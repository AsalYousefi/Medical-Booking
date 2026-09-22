import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

type Form = "login" | "sign up";

type AuthPageProps = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function AuthPage({ setIsModalOpen }: AuthPageProps) {
  const { t } = useTranslation();
  const forms = [
    {
      title: t("authPage.login.title"),
      label: "login",
    },
    {
      title: t("authPage.signup.title"),
      label: "sign up",
    },
  ];
  const [activeForm, setActiveForm] = useState<Form>("login");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="auth-page">
      <div className="auth-modal d-flex justify-content-center align-items-center">
        <div className="auth-container bg-white rounded-4">
          <div className="d-flex justify-content-center my-2">
            <div
              className="close-btn fs-2"
              onClick={() => setIsModalOpen(false)}
            >
              <IoMdClose />
            </div>
            <div className="auth-text text-center mx-auto mt-3">
              <h3 className="text-black">{t("authPage.h2")}</h3>
              <p>{t("authPage.p")}</p>
            </div>
          </div>
          <div
            className="w-50 mx-auto rounded-5 text-body"
            style={{ background: "#f4f5f9" }}
          >
            {forms.map((form, i) => {
              return (
                <button
                  className={`${
                    activeForm === form.label && "active"
                  } form-btn rounded-5 text-capitalize py-2 w-50 border-0 fw-bold`}
                  key={i}
                  onClick={() => setActiveForm(form.label as Form)}
                >
                  {form.title}
                </button>
              );
            })}
          </div>
          {activeForm === "login" ? (
            <LoginForm setIsModalOpen={setIsModalOpen} />
          ) : (
            <SignupForm setIsModalOpen={setIsModalOpen} />
          )}
        </div>
      </div>
    </div>
  );
}
