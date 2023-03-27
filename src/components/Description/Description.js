import "./Description.css";
import img from "../../assets/images/desktop/image-interactive.jpg";

const Description = () => {
  return (
    <div className="container description">
      <img className="image-description" src={img} />
      <div className="text-description">
        <h1>
          the leader in <br /> interactive vr
        </h1>
        <p>
          Founded in 2011, Loopstudios been producing world-class <br /> virtual
          reality projects for some of the best companies around the <br />
          globe. Our award-winning creations have transformed <br /> businesses
          through digital experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Description;
