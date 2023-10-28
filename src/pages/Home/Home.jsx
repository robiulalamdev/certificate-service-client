import video1 from "../../assets/images/global/video.png";
import img1 from "../../assets/images/global/lg-bg.png";
import img2 from "../../assets/images/global/sm-bg.png";

const HomePage = () => {
  return (
    <div className="hero__section">
      <div className="container">
        <div className="hero__area">
          <h2 className="hero-h2 d-none d-md-block">How it works</h2>
          <div className="vid-parent">
            <a href="#">
              <img className="img-fluid" src={video1} alt="link" />
            </a>
          </div>
          <h2 className="hero-h2 d-block d-md-none">How it works</h2>
          <div className="img-parent">
            <a href="#">
              <img
                className="img-fluid d-none d-md-block"
                src={img1}
                alt="img"
              />
            </a>
          </div>

          <div className="sm-img">
            <a href="#">
              <img
                className="img-fluid d-block d-md-none"
                src={img2}
                alt="img"
              />
            </a>
          </div>

          <div className="btn-parent">
            <button className="btn btn-success custom custom-2" type="submit">
              Click here to register now and get{" "}
              <br className="d-block d-md-none" /> a free account today!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
