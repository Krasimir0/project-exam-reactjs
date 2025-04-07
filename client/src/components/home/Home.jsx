import { Link } from "react-router";
import { useLatestDevices } from "../../api/deviceApi";
import Footer from "../footer/Footer";

export default function Home() {
  const { latestDevices } = useLatestDevices();

  return (
    <>
      <div className="banner_section layout_padding">
        <div className="container">
          <div
            id="my_slider"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="video_text">Level Up Your Gaming Experience!</h1>
                    <h1 className="controller_text">Next-Gen Devices</h1>
                    <p className="banner_text">
                    Discover cutting-edge gaming devices designed for performance and comfort. Elevate your gameplay with responsive controls and immersive features tailored for every gamer.
                    </p>
                    <div className="shop_bt">
                      <Link to={'/devices'}>See more</Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image_1">
                      <img src="images/img-1.png" alt="controller" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image_2">
                <img src="images/img-2.png" alt="about" />
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="about_text">ABOUT US</h1>
              <p className="lorem_text">
              we are passionate about enhancing your gaming experience. From high-performance accessories to the latest gaming gadgets, we bring you the best in innovation and quality. Step into the future of gaming with us!
              </p>
              <div className="shop_bt_2">
                <Link to={'/devices'}>Explore Our Collection</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_section layout_padding">
        <div className="container">
          <div className="product_text">
             <span style={{ color: "#5ca0e9" }}>Our Latest Products</span>
          </div>
          <p className="long_text">
          Browse through our collection of high-tech gaming devices, from controllers to VR gear. Designed for gamers, by gamers.
          </p>
          {latestDevices.map((device) => (
            <div className="product_section_2" key={device._id}>
              <div className="row">
                <div className="col-md-6">
                  <div className="image_2">
                    <img src={device.imageUrl} alt="product" />
                  </div>
                  <div className="price_text">
                    Price ${" "}
                    <span style={{ color: "#3a3a38" }}>{device.price}</span>
                  </div>
                  <h1 className="game_text">{device.deviceType}</h1>
                  <p className="long_text">{device.description}</p>
                </div>
              </div>
            </div>
          ))}
          {latestDevices.length === 0 && (
            <p
              style={{
                fontSize: "36px", // Larger text size
                fontWeight: "bold", // Make the text bold
                textAlign: "center", // Center the text
                color: "black", // Eye-catching red color (you can choose another color)
                padding: "20px 0", // Add some space around the text
                fontFamily: "'Arial', sans-serif", // Modern font
              }}
            >
              No devices yet
            </p>
          )}

          <div className="see_main">
            <div className="see_bt">
              <Link to='/devices'>See More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial_section layout_padding">
        <div className="container">
          <h1 className="testimonial_text">What Gamers Say About Us</h1>
          <div className="testimonial_section_2">
            <div className="box_main">
              <div className="quote_icon">
                <img src="images/quote-icon.png" />
              </div>
              <p className="dolor_text">
                {" "}
                {"The best devices I've ever used! The grip, responsiveness, and design are top-notch. Highly recommend for serious gamers! - Alex M."}{" "}
              </p>
              <div className="client_main">
                <div className="client_left">
                  <div className="images_5">
                    <img src="images/img-5.png" />
                  </div>
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
      <Footer />
    </>
  );
}
