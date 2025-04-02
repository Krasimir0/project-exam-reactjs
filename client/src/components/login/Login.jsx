import { useActionState } from "react";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router";
import { useUserContext } from "../../contexts/UserContext";
import { useLogin } from "../../api/authApi";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const { userLoginHandler } = useUserContext();
  const { login } = useLogin();

  const loginHandler = async (_, formData) => {
    const {email, password} = Object.fromEntries(formData);
    try {
      const authData = await login(email, password);
      userLoginHandler(authData);
      
      toast.success("Successful login")
      navigate("/");
    } catch (err) {
        toast.error(err)
    }
};

  const [_, loginAction, isPending] = useActionState(loginHandler, {
    email: "",
    password: "",
  });

  return (
    <>
      <div className="contact_section layout_padding">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h2>
          <div className="row">
            <div className="col-md-6">
              <div className="email_box">
                <div className="input_main">
                  <div className="container">
                    <form action={loginAction}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="email-bt"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="email-bt"
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                      <input className="main_bt" type="submit" value="Login" disabled={isPending}/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image_6">
                <img src="images/img-6.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
