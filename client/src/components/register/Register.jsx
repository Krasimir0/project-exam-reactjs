import { useNavigate } from "react-router";
import { useRegister } from "../../api/authApi";
import { useUserContext } from "../../contexts/UserContext";
import Footer from "../footer/Footer";
import { toast } from "react-toastify"

export default function Register() {
  const { register } = useRegister()
  const { userLoginHandler } = useUserContext();
  const navigate  = useNavigate()

  const registerHandler = async (formData) => {
    const { email, password } = Object.fromEntries(formData);
    const confirmPassword =  formData.get('confirmPassword')

    if (password !== confirmPassword) {
          toast.error('Password mismatch')
    }
    
    try {
      const authData = await register(email, password);    
      userLoginHandler(authData)

      toast.success("Successful register");
      navigate("/");   
    } catch (err) {
      toast.error(err.message);
    }    
};

  return (
    <>
      <div className="contact_section layout_padding">
        <div className="container">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8 tracking-wide uppercase">
            Register
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <div className="email_box">
                <div className="input_main">
                  <div className="container">
                    <form action={registerHandler}>
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
                      <div className="form-group">
                        <input
                          type="text"
                          className="email-bt"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                        />
                      </div>
                        <input
                           className="main_bt"
                          type="submit"
                          value="Register"
                        />
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
