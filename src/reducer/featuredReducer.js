import { createReducer } from "../Common/utilReducer";
import Shell from "../Resources/img/featured.png";
import AutPic from "../Resources/img/martin.png";

const initialState = [
  {
    id: "0",
    img: Shell,
    title: "Surface Treatment During Dry-Docking is a Costly Matter",
    desc:
      "It is far too often seen that ship-owners have too much faith in the paint suppliers. However, it should be remembered that they are interested in selling as much paint as possible.",
    author: "Martin Leif Jennet - Business Owner",
    authorPic: AutPic,
    parOne:
      "For far too many years ship-owners have trusted paint suppliers to take care of their interests in best viable way during dry-dockings. This due to the fact that performance guarantees have been part of the package. However, reading through these performance guarantees, it is often found that they are not really worth anything.",
    parTwo:
      "Coming to a coating defect which is proven to be due to poor product performance, or miss-specified products, it is often impossible to make the paint makers take any responsibility at all. That means the ship-owner will have to carry the cost to rectify the defect, and moreover, carry any extra cost, such as increased fuel consumption, until next required dry-docking.",
    parThree:
      "It would be wise for ship-owners, and professional technical management companies, to let themselves be supported by independent specialist paint supervision companies, to be properly prepared for dry-docking operations.",
    parFour:
      "Preparations could be the scrutiny of the proposed paint specifications. In many cases, the proposed epoxy systems (anti-corrosives), are over-specified regarding paint thickness, and product grade. If a vessel is having a full-blasting every five years, at least on the vertical under-water area, it will not be necessary to apply heavy epoxy systems, and neither to use high grade products, as a base for the anti-fouling, to last until next dry-docking. ",
    parFive:
      "In respect to anti-fouling, it is far too often that only a few parameters such as water temperature/trading area, maximum speed and idle time are used to determine the type and grade of anti-fouling products. More factors should be taken into the equation, to ensure that the proper anti-fouling product is used for optimum performance, in regard to minimizing fouling as well as ensuring lowest possible fuel consumption.",
    parSix:
      "Such scrutiny and correction of the paint specification can lead to savings in paint as well as application cost. Done by professional companies, this is done without jeopardizing paint quality, and will in most cases lead to an improvement in quality.",
    parSeven:
      "Also during a dry-docking, the proper independent action, not wearing the hat of the paint supplier, can help the owner to make further savings. This can amongst others be done by carefully monitoring the paint application process. Making sure that only needed paint is applied, and no patch work is performed, which will lead to increased roughness of the hull, costing extra fuel during vessel service.",
    parEight:
      "There are several other actions which can be taken by independent companies during dry-dockings, these actions sare all items that will benefit the owner after dry-docking completion. Some of them can be beneficial in determining when to make any necessary refurbishment of tanks or holds. ",
    parNine:
      "It would be wise for ship-owners to consider this kind of service by independent companies, as they are not selling any paints, but are paid by owner to ensure best possible quality for least money.",
    parTen:
      "In the majority of dry-dockings, the cost of having independent support, is easily justified by obtained savings, and improvement of the quality which leads to long term savings on fuel and lower maintenance cost.",
    parEleven: "Thank you for your time!"
  }
];

export default createReducer(initialState, {});
