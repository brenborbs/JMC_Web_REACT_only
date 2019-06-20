import { createReducer } from "../Common/utilReducer";
import sc2 from "../Resources/img/sc2.jpg";
import sc3 from "../Resources/img/sc3.png";
import sc1 from "../Resources/img/sc1.jpg";
import sc4 from "../Resources/img/sc4.jpg";

const initialState = [
  {
    id: "0",
    date: "June 4, 2019",
    imgOne: sc2,
    descImgOne: "Anders Thomsen starting the steel cutting machine",
    imgTwo: sc3,
    descImgTwo:
      "Anders Thomsen closely observing the first steel-plate cutting",
    imgThree: sc1,
    descImgThree:
      "Stena RoRo, who own the ferry, has a large site team in place in Weihai",
    imgFour: sc4,
    descImgFour:
      "The office in Weihai was also inaugurated. Later in the process, Anders will be accompanied by more members of DFDS’ observer site team",
    title:
      "Combined freight and passenger ferry construction initiated in China",
    author: "Article courtesy from group.communication@dfds.com",
    bodOne:
      "We currently have a lot of developments to be excited about in China. We have a huge order of six mega freight ferries from Jinling Shipyard and the second ferry will soon arrive in Turkey.",
    bodTwo:
      "In Guangzhou, we have ordered two combined freight and passenger ferries that will prepare us for our customers’ future needs and requirements.And just last Friday, we reached another milestone as the first steel-plate cutting ceremon at AVIC Shipyard in Weihai, China, initiated the construction of our combined freight and passenger ferry destined for the Channel. The ferry is expected to be delivered to DFDS on a 10-year bareboat charter in mid-2021 and it will be the longest ship on the channel with capacity for 1,000 passengers and crew.",
    bodThree:
      "“The new ferry will be set in operation on the Dover – Calais route. We therefore think it is quite fitting to name her after one of the most beautiful coastal regions in France, Côte d’Opale, which borders Belgium and is situated opposite the cliffs of south-east England,” says Kasper Moos, Head of BU Short Routes & Passenger.",
    bodFour:
      "Initiating construction with one press of a button “At exactly 09:08 (lucky numbers in China), our new colleague, Anders Thomsen, DFDS’ Senior Charterer’s Representative, pushed the button on the steel cutting machine,” says Jesper Aagesen, Director of Newbuilding & Major Conversion. “This started the cutting work on the very first steel plate. There is however still a way to go until the remaining approximately 10,000 tonnes of steel have been welded together but I am very excited to follow the construction from steel cut to delivery.”"
  }
];

export default createReducer(initialState, {});
