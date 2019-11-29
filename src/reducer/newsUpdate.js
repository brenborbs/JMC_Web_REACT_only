import { createReducer } from "../Common/utilReducer";
import sc2 from "../Resources/img/sc2.jpg";
import sc3 from "../Resources/img/sc3.png";
import sc1 from "../Resources/img/sc1.jpg";
import sc4 from "../Resources/img/sc4.jpg";
import PhotoOct1 from "../Resources/img/upoct2019-1.png";
import PhotoOct2 from "../Resources/img/upoct2019-2.png";

const initialState = [
  {
    id: "1",
    date: "October 22, 2019",
    imgOne: PhotoOct1,
    descImgOne: "Anders Thomsen starting the steel cutting machine",
    imgTwo: PhotoOct2,
    descImgTwo:
      "Senior Charterer’s Representative Anders B Thomsen at the keel-laying ceremony",
    imgThree: sc1,
    descImgThree:
      "Stena RoRo, who own the ferry, has a large site team in place in Weihai",
    imgFour: sc4,
    descImgFour:
      "The office in Weihai with Anders as Senior Charterer’s Representative and working together with our site team",
    title:
      "New ferry for the Channel reaches another milestone in construction",
    author: "Article courtesy from group.communication@dfds.com",
    bodOne:
      "Last Tuesday the traditional keel-laying ceremony took place at Avic Shipyard in Weihai,China, to officially celebrate the next stage of construction of our combined freight and passenger ferry destined for the Channel. She will be named Côte d’Opale.",
    bodTwo:
      "The keel once made up the backbone of a ship, connecting bow to stern and extending the length of the ship. When the keel was laid at the ceremony, it signified the birth of the ship and the yard workers could start building the hull around the keel.",
    bodThree:
      "Nowadays, the traditional keel has been replaced by huge sections that are welded together to form the hull of a ship. However, the tradition lives on and last Tuesday, a section was lowered in the drydock at Avic Shipyard in Weihai, China, to represent the keel-laying for our combined freight and passenger ferry.",
    bodFour:
      "Together with representatives of the shipyard, Stena RoRo and DFDS’ own Senior Charterer’s Representative, Anders B Thomsen, was in attendance at the ceremony too. Stena RoRo is owner of the vessel and DFDS will take the ferry on a 10-year  bareboat charter with delivery from China by the end of June 2021. The 214 metres long ferry will be the longest ship on the Channel with capacity for 1,000 passengers and crew together with 160 trailers. She is intended for use on the Dover – Calais route and is therefore named after one of the most beautiful coastal regions in France, Côte d’Opale, which borders Belgium and is situated opposite the cliffs of south-east England."
  },
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
