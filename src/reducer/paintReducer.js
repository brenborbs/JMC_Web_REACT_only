import { createReducer } from '../Common/utilReducer';
import photo1 from '../Resources/img/drydockcase.jpg';
import photo2 from '../Resources/img/deckCase.jpg';
import photo3 from '../Resources/img/newCase.jpg';
import photo4 from '../Resources/img/pre_surveycase.png';
import photo5 from '../Resources/img/redCase.png';
import photo6 from '../Resources/img/transCase.png';
   
const initialState = [
  {
    id: '1',
    title: 'Treatment By High Pressure Fresh Water versus Handtooling',
    category: 'Surface Treatment',
    summary: 'HPFW result is more efficient in removing corrosion on the upperdeck and it also removes grease and oil.',
    usage: 'As clearly shown in the photo above, HPFW result is more efficient in removing corrosion on the upperdeck and it also removes grease and oil. It also exposes the bare metal and anchor profile on the surface, thus ensuring proper preparation prior applying the paint primer which is a crucial element within a coating system.',
    prep: 'Even with the disadvantages of HPFW such as condition of the Jet washing equipment and air pressure during washing or treatment, however in the hands of a professional, the surface preparation will automatically be elevated and leaves a much better result than manual hand tooling on the upperdeck.',
    application: 'A lot of times, many ships fall into victims of having to exchange quality over economy which always results in more damage to the deck plate like heavy pitting and high wastage. In the end, the cost to repair the deck will be substantially high and may even require replating for some parts which is additional burden to the owners. Therefore as we have experienced and to avoid such situations, the best practices are always to maintain a proper scheduled maintenance scheme coupled with quality and efficient treatment on the decks.   ',
    photo: photo1 ,
    
  },
  {
    id: '2',
    title: 'High Pressure Fresh Water Treatment on Deck pipes',
    category: 'Surface Treatment',
    summary: 'As faced by many crews in different vessels particularly in tankers, removing corrosion on rounded shapes is very difficult.',
    usage: 'The photo shows a result of an on-going HPFW treatment on the upper deck. As faced by many crews in different vessels particularly in tankers, removing corrosion on rounded shapes is very difficult. While the use of hand tools are common but then again, the result is not as efficient and not expected coming from a good surface preparation standard.',
    prep: 'To add, hand tools cannot penetrate small areas especially behind the pipe supports, u-clamps and bolts. For these, HPFW is more suitable to remove corrosion on these behind and cornered areas. This again leads to the importance of having a good maintenance schedule for the deck pipes.',
    application: 'As what we have done for our clients, while doing the surface treatment on the deck pipes, we have also given the crew a painting seminar and some quick notes on how to lessen the impact on sea-board corrosion while sailing. We have given them important notes to preserve the existing coating on the deck pipes to such condition that it may be intact until the next maintenance schedule arrives.',
    photo: photo2,
    
  },
  {
    id: '3',
    title: 'Secondary Surface Preparation For Erection Joints in New Buildings',
    category: 'New Buildings',
    summary: 'Power tooling to St 3.0 for the remaining erection joints considering that the damages in a particular tank do not exceed maximum 2% when compared to the whole area.',
    usage: 'With many new buildings in major shipyards now under IMO PSPC Ballast Tank rules, part of the standard calls for only power tooling to St 3.0 for the remaining erection joints. Though under the rule, the shipyard is permitted for this kind of treatment considering that the damages in a particular tank do not exceed maximum 2% when compared to the whole area.',
    prep: 'At a glance, this may be practical especially since shipyards are always keeping up with the delivery schedule. But in many ways, power tooling changes some of the anchor profile on the substrate. At times, leaving a more shinnier result looks good but in essence, the constant friction of the disc sanders flattens out some of those anchor profile created during pre-blasting stages on the subtrate.',
    application: 'As we have seen at in-service ships, most corrosions are likely to occur many times on the erection joints and welding seams. So a viable way to avoid this condition would be to have a delicate balance during new building stage of the vessel between power tooling and keeping the anchor profile on the erection joints. Though for some really good shipyards, they have used a particularly handy nozzle and blasting equipment to treat the erection joints.',
    photo: photo3,
    
  },
  {
    id: '4',
    title: 'Good Practices for Removing Corrosion On-Board',
    category: 'On-Board Maintenance',
    summary: 'Even simple surface preparation techniques are needed to acheieved a good and efficient treatment result.',
    usage: 'As shown in the photo, having a set of pneumatic tools to remove is not enough. Some simple surface preparation techniques are needed to acheieved a good and efficient treatment result.',
    prep: 'Good and bad surface preparations are shown clearly side by side. The result of the cup brush and chipper while both being able to remove rust, still leaves enough black scale on the insides and it could not create a feathered-edge on the sides. Feather-edging as a surface preparation technique is important because this can avoid overlapping of the primer and succeeding coats in the system.',
    application: 'On the other hand, the left side shows the result of using an ordinary grinder which leaves a much better preparation result. Edges have been feathered properly and rust was almost completely remove leaving a near white metal result. With this simple demonstration, it clearly proves that having a bit of knowledge with the different results for using grinders versus both cup brush and chipper could lead to efficient and lasting results.',
    photo: photo4 ,
    
  },
  {
    id: '5',
    title: 'A Tank Sample Wherein Risk Level is Very High',
    category: 'Tank Surveys',
    summary: 'The tank has almost more than 70% Hard Scale as described according to IACS PR-33 Owners Hull Inspection.',
    usage: 'The photo shows that the tank has almost more than 70% Hard Scale as described according to IACS PR-33 Owners Hull Inspection and Maintenance Schemes. The tank on the photo is labeled as colored RED under Traffic Light Condition Scoring.',
    prep: 'This condition may seem to be more common for older vessels however as what we have encountered in our projects, such conditions are even posible in 5 year old ships. Corrosion once neglected will surely destroy the steel plate which may also affect the over-all structural integrity of the vessel. To prevent such conditions from happening, it is very important to mix practical and theoritical knowledge in surface treatment standards during in-service of the ship.',
    application: 'Scheduled Surveys and inspections on the tanks coupled with detailed corrosion assestments can prevent these worse conditions from happening. Moreover, if the condition calls for a treatment in the tanks, this should be followed to minimize the corrosion damages and apply protective coating to ensure tank integrity preservation.',
    photo: photo5 ,
    
  },
  {
    id: '6',
    title: 'A Tank Sample where Corrosion is Between Transition from Fair to poor Condition',
    category: 'Tank Surveys',
    summary: 'The tank condition as transition fair to poor coating condition according to IACS Recommendation 87,Guideline For Coating Maintenance and Repairs',
    usage: 'The photo shows the tank condition as transition fair to poor coating condition according to IACS Recommendation 87, Guideline For Coating Maintenance and Repairs for Ballast Tanks and Combined Cargo/Ballast Tanks on Oil tankers. The tank on the photo is at very Poor condition.',
    prep: 'Transition conditions in Tank surveys are a bit trickier since as an inspector, you are judging whether to give the tank a FAIR pass or POOR neglected condition. To add, the owners are also at pressure to get the vessel to sail continously to avoid downtime and perhaps move the next maintenance treatment on the tanks to a later date to earn some additional savings for the meantime.',
    application: 'With the difficult dillema at hand, the best recourse would be to take the general and overall view of the tanks, then take in the percentages. Comparing both sides, if more tank areas or percentages fall on POOR conditions, then it gets this rating. Otherwise, the opposite FAIR rating is given once the sum on the FAIR areas exceed the latter.',
    photo: photo6,
    
  },
  
  

]

export default createReducer(initialState, {})