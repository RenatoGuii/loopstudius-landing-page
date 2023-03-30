import "./Creations.css";
import { useContext } from "react";
import { ImageContext } from "../../contexts/ImageContext";

const Creations = () => {
  const { images } = useContext(ImageContext);

  return (
    <div className="container">
      <div className="header-creations">
        <span>our creations</span>
        <button className="buttonSeeAll">see all</button>
      </div>
      <div className="creations">
        <div className="row creations gy-4">
          <div className="col-sm-6 col-md-3">
            <a href="/#">
              <picture className="images-creations">
                <source media="(max-width: 576px)" srcset={images.earthP} />
                <img src={images.earthG} alt="deep earth" />
              </picture>
              <h3>
                deep <br /> earth
              </h3>
            </a>
          </div>

          <div className="col-sm-6 col-md-3">
            <a href="/#">
              <picture className="images-creations">
                <source media="(max-width: 576px)" srcset={images.arcadeP} />
                <img src={images.arcadeG} alt="night arcade" />
              </picture>
              <h3>
                night <br /> arcade
              </h3>
            </a>
          </div>

          <div className="col-sm-6 col-md-3">
            <a href="/#">
              <picture className="images-creations">
                <source media="(max-width: 576px)" srcset={images.soccerP} />
                <img src={images.soccerG} alt="soccer team VR" />
              </picture>
              <h3>
                soccer <br /> team vr
              </h3>
            </a>
          </div>

          <div className="col-sm-6 col-md-3">
            <a href="/#">
              <picture className="images-creations">
                <source media="(max-width: 576px)" srcset={images.gridP} />
                <img src={images.gridG} alt="the grid" />
              </picture>
              <h3>
                the <br /> grid
              </h3>
            </a>
          </div>

          <div className="col-sm-6 col-md-3">
            <a href="/#">
              <picture className="images-creations">
                <source media="(max-width: 576px)" srcset={images.aboveP} />
                <img src={images.aboveG} alt="from up above vr" />
              </picture>
              <h3>
                from up <br /> above vr
              </h3>
            </a>
          </div>

          <div className="col-sm-6 col-md-3">
            <a href="/#">
              <picture className="images-creations">
                <source media="(max-width: 576px)" srcset={images.borealisP} />
                <img src={images.borealisG} alt="pocket borealis" />
              </picture>
              <h3>
                pocket <br /> borealis
              </h3>
            </a>
          </div>

          <div className="col-sm-6 col-md-3">
            <a href="/#">
              <picture className="images-creations">
                <source media="(max-width: 576px)" srcset={images.curiosityP} />
                <img src={images.curiosityG} alt="the curiosity" />
              </picture>
              <h3>
                the <br /> curiosity
              </h3>
            </a>
          </div>

          <div className="col-sm-6 col-md-3">
            <a href="/#">
              <picture className="images-creations">
                <source media="(max-width: 576px)" srcset={images.fisheyeP} />
                <img src={images.fisheyeG} alt="make it fisheye" />
              </picture>
              <h3>
                make it <br /> fisheye
              </h3>
            </a>
          </div>
        </div>
      </div>
      <button className="buttonSeeAll mobile">see all</button>
    </div>
  );
};

export default Creations;
