import Footer from "../footer/Footer";

export default function Login() {
    return (
        <>
        <div className="contact_section layout_padding">
        <div className="container">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="email_box">
                        <div className="input_main">
                           <div className="container">
                              <form action="/action_page.php">
                                <div className="form-group">
                                  <input type="text" className="email-bt" placeholder="Email" name="Name"/>
                                </div>
                                <div className="form-group">
                                  <input type="text" className="email-bt" placeholder="Password" name="Email"/>
                                </div>
                              </form>   
                           </div> 
                            <div className="main_bt"><a href="#">LOGIN</a></div>                  
                        </div>
                     </div>
            </div>
            <div className="col-md-6">
              <div className="image_6"><img src="images/img-6.png"/></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
}