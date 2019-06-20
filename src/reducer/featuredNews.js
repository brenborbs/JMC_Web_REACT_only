import { createReducer } from "../Common/utilReducer";
import Guy from "../Resources/img/newsPhoto1.png";
import HNature from "../Resources/img/hnature.jpg";

const initialState = [
  {
    id: "0",
    img: Guy,
    title:
      "New Consultant to oversee construction of the newbuilding intended for the channel",
    author: "Article from dfds-news.com/dfds-newbuildings",
    date: "May 31, 2019",
    bodyOne:
      "It won’t be long before another newbuilding adventure begins as the construction of our combined passenger and freight ferry officially starts later this month.",
    bodyTwo:
      "Joining us in this adventure is Anders Bouet Thomsen who has been engaged as a consultant via the company JMC-Limited. Anders will take up the role as our Senior Charterer’s Representative in Weihai.",
    bodyThree:
      "It would be wise for ship-owners, and professional technical management companies, to let themselves be supported by independent specialist paint supervision companies, to be properly prepared for dry-docking operations.",
    bodyFour:
      "“One, two, three…DFDS will soon be building new vessels in not less than three locations in China. Maybe it is a bit of an exaggeration, because the third place – in addition to Nanjing (Jinling) and Guangzhou (GSI) – is at Avic Weihai where Stena RoRo has ordered a series of vessels and one of these vessels will be taken on a bareboat charter by DFDS when it is completed in 2021. We will however follow the construction of the vessel by a small site team with observer status, and it is therefore a pleasure to welcome Anders to DFDS. On Thursday 30 May the cutting of the first steel plate will take place, and Anders will then be ready in Weihai. Later on, Anders will be supplemented by more people from DFDS,” says Jesper Aagesen, Director of Newbuilding & Major Conversions.",
    bodyFive:
      "As Naval Architect, Anders brings broad experience in newbuildings, both as a site manager supervising on-site at the shipyard or as a project manager working from HQ. His experience and different jobs have brought him to live all around the world including Germany, Chile, South Korea, Spain, Norway, Brazil, Turkey, and soon he will be able to add China to that list.",
    link:
      "https://www.dfds-news.com/ships/new-consultant-to-oversee-construction-of-the-newbuilding-intended-for-the-channel/"
  },
  {
    id: "1",
    img: HNature,
    title: "Hanseatic Nature passes her sea trial",
    author: "Updates from hl-cruises.com/ships/hanseatic-nature",
    date: "April 27, 2019",
    bodyOne: "Hanseatic Nature nears her service as she passes her sea trial.",
    bodyTwo:
      "Germany’s Hapag-Lloyd Cruises has been busy with newbuilding construction of Hanseatic Nature, the first of three ships in the company’s new expedition class.",
    bodyThree:
      "The 15,650 gross ton vessel will soon sail for Hamburg, for her inaugural cruise to Scotland and Norway.",
    bodyFour:
      "Equipped with the latest environmentally-friendly technologies, the new ship will be powered with marine gasoil (MGO) on approximately 70 percent of its voyages, according to the company.",
    bodyFive:
      "With the supervision of JMC-Limited during the entire construction period, she has passed her sea trial and we are very proud to have worked and helped Hapag Lloyd. We look forward to further cooperation in the future.",
    link: ""
  }
];

export default createReducer(initialState, {});
