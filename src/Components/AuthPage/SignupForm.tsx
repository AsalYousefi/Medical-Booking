import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext, User } from "../../context/AuthContext";
import axios from "axios";
import { API_URL } from "../../config/api";

type SignupFormProps = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function SignupForm({setIsModalOpen}: SignupFormProps) {
  const { t } = useTranslation();
  const [signupForm, setSignupForm] = useState<User>({
    fullName: "",
    mobile: "",
    email: "",
    password: ""
  });

  function resetData() {setSignupForm({
    fullName: "",
    mobile: "",
    email: "",
    password: ""
  })}
  
  const auth = useContext(AuthContext)

  async function signup(user: User) {
      try {
        const response = await axios.get(`${API_URL}/users`)
        const isRegistered = response.data.find((existingUser: User) =>
          existingUser.mobile === user.mobile
        )
        
        if (isRegistered) {
          alert(t("messages.errors.signup"));
          return
        }
        await axios.post(`${API_URL}/users`, user);
        auth.setUser(user)
        alert(t("messages.success.signup"))
        resetData();
        setIsModalOpen(false)
      } catch (err) {
        if (err instanceof Error) {
          console.log("ERROR: ",err)
        }
      }
      auth.setIsPending(false)
    }
  
  

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    auth.setIsPending(true)
    e.preventDefault()
    const isFormComplete = Object.values(signupForm).every(
      (value) => value.trim() !== ""
    );
  
    if (!isFormComplete) {
      return;
    }
    signup(signupForm)
  }
  return (
    <div className="d-flex flex-column mx-3 mt-4 mb-5">
      <form action="" className="d-flex flex-column" onSubmit={(e) => submitHandler(e)}>
        <label
          className="text-capitalize form-label text-muted"
          htmlFor="fullname"
        >
          {t("authPage.form.fullname")}
        </label>
        <input
          type="text"
          className="form-control p-2"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSignupForm({ ...signupForm, fullName: e.target.value })
          }
          value={signupForm.fullName}
        />
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
            setSignupForm({ ...signupForm, mobile: e.target.value })
          }
          value={signupForm.mobile}
        />
        <label
          className="text-capitalize form-label text-muted"
          htmlFor="email"
        >
          {t("authPage.form.email")}
        </label>
        <input
          type="email"
          className="p-2 form-control"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSignupForm({ ...signupForm, email: e.target.value })
          }
          value={signupForm.email}
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
            setSignupForm({ ...signupForm, password: e.target.value })
          }
          value={signupForm.password}
        />
        <button
          type="submit"
          className="bg-primary text-white rounded-1 border-0 py-2 text-capitalize fw-bold mt-2"
        >
          {t("authPage.signup.submit")}
        </button>
      </form>
      <p className="text-center  text-muted my-3">
        {t("authPage.signup.p")}{" "}
        <a href="#" className="text-capitalize text-primary fw-500">
          {t("authPage.login.title")}
        </a>
      </p>
    </div>
  );
}
