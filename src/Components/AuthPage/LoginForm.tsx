import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { AuthContext, User } from "../../context/AuthContext";
import axios from "axios";
import { API_URL } from "../../config/api";

type LoginFormProps = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export default function LoginForm({ setIsModalOpen }: LoginFormProps) {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
    mobile: "",
    password: "",
  });

  async function login(user: { mobile: string; password: string }) {
    const response = await axios.get(`${API_URL}/users`);
    const existingUser = response.data.filter(
      (existingUser: User) => existingUser.mobile === user.mobile
    );
    console.log(existingUser);

    if (existingUser.length === 0) {
      alert(t("messages.errors.login"));
      return;
    }

    if (user.password === existingUser[0].password) {
      auth.setUser(existingUser[0]);
      alert(t("messages.success.login"));
      setIsModalOpen(false);
    } else {
      alert(t("messages.errors.invalidPassword"))
    }
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(loginForm);
  }
  return (
    <div className="d-flex flex-column mx-3 mt-4 mb-5">
      <form
        action=""
        className="d-flex flex-column"
        onSubmit={(e) => submitHandler(e)}
      >
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, mobile: e.target.value })
          }
          value={loginForm.mobile}
        />
        <label
          className="text-capitalize form-label text-muted"
          htmlFor="password"
        >
          {t("authPage.form.password")}
        </label>
        <input
          type="password"
          className="p-2 form-control"
          placeholder="••••••••"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
          value={loginForm.password}
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
