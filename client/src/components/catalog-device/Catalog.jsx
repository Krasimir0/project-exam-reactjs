import { Link } from "react-router";
import { useDevices } from "../../api/deviceApi";
import Footer from "../footer/Footer";

export default function Catalog() {
    const { devices } = useDevices();
  
    return (
        <>
        <div className="product_section layout_padding">
    <div className="container">
      <div className="product_text">Our <span style={{color: '#5ca0e9'}}>products</span></div>
      <div className="product_section_2">
        <div className="row">
          {devices.map(device => (
            <div className="col-md-6" key={device._id}>
              <div className="image_2"><img src={device.imageUrl}/></div>
              <div className="price_text">Price $ <span style={{color: "#3a3a38" }}>{device.price}</span></div>
              <h1 className="game_text">{device.deviceType}</h1>
              <p className="long_text">{device.description}</p>
              <div className="details-container">
              <Link to={`/details/${device._id}`} className="details-button">
                Details
              </Link>
            </div>
            </div>
          ))}
        </div>
      </div>
      {devices.length === 0 && (
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
        <div className="see_bt"><Link to={'/'}>See More</Link></div>
      </div>
    </div>
  </div>
  <Footer />
  </>
    )
}