export default function Home() {
    return (
        <>
 <div className="banner_section layout_padding">
    <div className="container">
      <div id="my_slider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6">
                <h1 className="video_text">Video games</h1>
                <h1 className="controller_text">controller</h1>
                <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                <div className="shop_bt"><a href="#">Shop Now</a></div>
              </div>
              <div className="col-md-6">
                <div className="image_1"><img src="images/img-1.png" alt="controller"/></div>
            </div>
          </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <h1 className="video_text">Video games</h1>
                <h1 className="controller_text">controller</h1>
                <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                <div className="shop_bt"><a href="#">Shop Now</a></div>
              </div>
              <div className="col-md-6">
                <div className="image_1"><img src="images/img-1.png" alt="controller"/></div>
            </div>
          </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <h1 className="video_text">Video games</h1>
                <h1 className="controller_text">controller</h1>
                <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                <div className="shop_bt"><a href="#">Shop Now</a></div>
              </div>
              <div className="col-md-6">
                <div className="image_1"><img src="images/img-1.png" alt="controller"/></div>
            </div>
          </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#my_slider" role="button" data-bs-slide="prev">
          <i className="fa fa-angle-left"></i>
        </a>
        <a className="carousel-control-next" href="#my_slider" role="button" data-bs-slide="next">
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  </div>
  <div className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="image_2"><img src="images/img-2.png" alt="about"/></div>
        </div>
        <div className="col-md-6">
          <h1 className="about_text">ABOUT</h1>
          <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
          <div className="shop_bt_2"><a href="#">Shop Now</a></div>
        </div>
      </div>
    </div>
  </div>
  <div className="product_section layout_padding">
    <div className="container">
      <div className="product_text">Our <span style={{color: '#5ca0e9'}}>products</span></div>
      <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
      <div className="product_section_2">
        <div className="row">
          <div className="col-md-6">
            <div className="image_2"><img src="images/img-3.png" alt="product"/></div>
            <div className="price_text">Price $ <span style={{color: '#3a3a38'}}>200</span></div>
            <h1 className="game_text">Video Game</h1>
            <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
          </div>
          <div className="col-md-6">
            <div className="image_2"><img src="images/img-3.png" alt="product"/></div>
            <div className="price_text">Price $ <span style={{color: '#3a3a38'}}>300</span></div>
            <h1 className="game_text">Video Game</h1>
            <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
          </div>
        </div>
      </div>
      <div className="see_main">
        <div className="see_bt"><a href="#">See More</a></div>
      </div>
    </div>
  </div>
  <div className="testimonial_section layout_padding">
    <div className="container">
      <h1 className="testimonial_text">Testimonial</h1>
      <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
      <div className="testimonial_section_2">
        <div className="box_main">
          <div className="quote_icon"><img src="images/quote-icon.png"/></div>
          <p className="dolor_text"> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
          <div className="client_main">
            <div className="client_left">
              <div className="images_5"><img src="images/img-5.png"/></div>
            </div>
            <div className="client_right">
              <h1 className="sandy_text">Sandy Delex</h1>
              <p className="sandy_text_1">Reprehenderit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section_footer ">
      <div className="container"> 
          <div className="footer_section_2">
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <h2 className="account_text">About Us</h2>
                  <p className="ipsum_text_2">dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam, quisdotempor incididunt r</p>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <h2 className="account_text">Useful Link</h2>
                  <div className="useful_link">
                    <ul>
                      <li><a href="#">Video games</a></li>
                      <li><a href="#">Remote control</a></li>
                      <li><a href="#">3d controller</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                <h2 className="account_text">Contact Us</h2>
                <p className="ipsum_text_2">dolor sit amet, consectetur magna aliqua. quisdotempor incididunt ut e </p>
                </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <h2 className="account_text">Newsletter</h2>
            <input type="" className="email_text" placeholder="Enter Your Email" name="Enter Your Email"/>
            <button className="subscribr_bt">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src="images/fb-icon.png"/></a></li>
          <li><a href="#"><img src="images/twitter-icon.png"/></a></li>
          <li><a href="#"><img src="images/linkdin-icon.png"/></a></li>
          <li><a href="#"><img src="images/instagram-icon.png"/></a></li>
        </ul>
      </div>
    </div>
  </div>  
  </>
    )
}