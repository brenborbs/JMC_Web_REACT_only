import { createReducer } from '../Common/utilReducer';

const initialState = [
  {
    id: '1',
    title: 'Organic zinc-rich paints',
    category: 'Primer',
    summary: 'The organic zinc-rich paints provide less cathodic protection than zinc ethyl silicate paint. To avoid the formation of zinc-soap, it is vital that the binder is alkali-resistant.',
    usage: 'Zinc-rich epoxy paints are mainly used nowadays for primer coats both for new buildings and maintenance and also, for repair of minor damages.',
    prep: 'Thorough surface preparation to Sa 2.5. The surface preparation results in a well-cleaned and rough surface which ensures that the paint adheres firmly to the steel.',
    application: 'They can be applied by brush and rollers. Most efficient way would always be to used airless spray.',
    photo: 'https://www.promain.co.uk/media/catalog/product/cache/1/image/736x460/9df78eab33525d08d6e5fb8d27136e95/3/4/3475-0-rustoleum-6400-metal-primer-promain.jpg'
  },
  {
    id: '2',
    title: 'Inorganic zinc-rich paints',
    category: 'Primer',
    summary: 'These kind of paints are usually two-component products where the zinc powder and the binder are supplied in different containers.',
    usage: 'One of the main reasons why Zinc ethyl silicate is used in the industry because it provides excellent corrosion on steel. It normally serves as a primer coat to be overcoated with barrier paints. These can be usually found on sea chest covers, handrails and ballast tank pipes.',
    prep: 'Blast cleaning to a degree of cleanliness at Sa2.5 to Sa3.0 with a maximum roughness measured at within 50 to 75 microns range.',
    application: 'Best way to apply the paint would be inside a paint shop with a controlled environment. Low humidity would result into low strength of the paint. Most efficient application would be by airless spray for optimal results.',
    photo: 'https://galvanizeit.org/uploads/default/Zinc_Rich_Paint_Touch_Up_01_web.jpg'
  },
  {
    id: '3',
    title: 'Zinc alkali silicate',
    category: 'Primer',
    summary: 'Zinc alkali silicate contains a water-glass type of waterborne silicate binder. Silicates are substances which form part of glass and a number of minerals.',
    usage: 'Zinc-rich epoxy paints are mainly used nowadays for primer coats both for new buildings and maintenance and also, for repair of minor damages.',
    prep: 'Thorough surface preparation to Sa 2.5. The surface preparation results in a well-cleaned and rough surface which ensures that the paint adheres firmly to the steel.',
    application: 'They can be applied by brush and rollers. Most efficient way would always be to used airless spray.',
    photo: 'http://marketbulletin.com.pk/wp-content/uploads/2017/09/Spritztechnik-2a53429a.jpg'
  },
  {
    id: '4',
    title: 'Shop Primers',
    category: 'Primer',
    summary: 'Zinc alkali silicate contains a water-glass type of waterborne silicate binder. Silicates are substances which form part of glass and a number of minerals.',
    usage: 'Zinc-rich epoxy paints are mainly used nowadays for primer coats both for new buildings and maintenance and also, for repair of minor damages.',
    prep: 'Thorough surface preparation to Sa 2.5. The surface preparation results in a well-cleaned and rough surface which ensures that the paint adheres firmly to the steel.',
    application: 'They can be applied by brush and rollers. Most efficient way would always be to used airless spray.',
    photo: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-aels8hhjmgruhrj42rnu3g0bt2-20171206182246.Medi.jpeg'
  },
  

]

export default createReducer(initialState, {})