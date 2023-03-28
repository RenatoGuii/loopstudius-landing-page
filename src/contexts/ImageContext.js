import { createContext } from "react";

// Images
import earthG from "../assets/images/desktop/image-deep-earth.jpg"
import earthP from "../assets/images/mobile/image-deep-earth.jpg"
import arcadeG from "../assets/images/desktop/image-night-arcade.jpg"
import arcadeP from "../assets/images/mobile/image-night-arcade.jpg"
import soccerG from "../assets/images/desktop/image-soccer-team.jpg"
import soccerP from "../assets/images/mobile/image-soccer-team.jpg"
import gridG from "../assets/images/desktop/image-grid.jpg"
import gridP from "../assets/images/mobile/image-grid.jpg"
import aboveG from "../assets/images/desktop/image-from-above.jpg"
import aboveP from "../assets/images/mobile/image-from-above.jpg"
import borealisG from "../assets/images/desktop/image-pocket-borealis.jpg"
import borealisP from "../assets/images/mobile/image-pocket-borealis.jpg"
import curiosityG from "../assets/images/desktop/image-curiosity.jpg"
import curiosityP from "../assets/images/mobile/image-curiosity.jpg"
import fisheyeG from "../assets/images/desktop/image-fisheye.jpg"
import fisheyeP from "../assets/images/mobile/image-fisheye.jpg"

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {

    const images = {
        earthG,
        earthP,
        arcadeG,
        arcadeP,
        soccerG,
        soccerP,
        gridG,
        gridP,
        aboveG,
        aboveP,
        borealisG,
        borealisP,
        curiosityG,
        curiosityP,
        fisheyeG,
        fisheyeP
    }

  return <ImageContext.Provider value={{images}}>{children}</ImageContext.Provider>;
};
