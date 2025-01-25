import logo1 from './logo1.jpg'
import backgroundHero from './backgroundHero.avif'
import menu_icon from "./menu_icon.png"
import support_img from "./support_img.png"
import del from "./del.png"
import star_icon from "./star_icon.png"
import pri from "./pri.png"
import back from "./back.jpg"
import vision from "./vision.jpg"
import whatsapp from "./whatsapp.png"


import bass from "./bass.webp"
import trumpet from "./trumpet.jpg"
import trumbone from "./trumbone.jpg"
import tuba from "./tuba.jpg"
import bass2 from "./bass2.jpg"
import sax from "./sax.jpg"
import clarient from "./clarient.jpg"
import bassoon from "./bassoon.jpg"
import flute from "./flute.jpg"
import oboe from "./oboe.jpg"
import marm from "./marm.webp"
import tim from "./tim.avif"
import xyl from "./xyl.jpg"
import cymbal from "./cymbal.webp"
import drum from "./drum.jpg"
import syn from "./syn.jpg"
import viols from "./viola.webp"
import violin from "./violin.jpg"
import piano from "./piano.jpg"
import gitar from "./gitar.webp"
import bassGitar from "./bassGitar.jpg"
import cello from "./cello.webp"
import drumstick from "./drumstick.webp"
import oil from "./oil.webp"
import reed from "./reed.avif"
import string from "./string.jpg"
import strap from "./strap.jpg"




export const assets = {
    logo1,
    backgroundHero,
    menu_icon,
    support_img, pri, del,
    star_icon, back, vision, whatsapp
}


export const products = [
    // Brass Instruments
    {
        _id: "brass001",
        name: "Professional Bb Trumpet",
        description: "A high-quality brass trumpet with exceptional tonal clarity, featuring monel valves and a lightweight body, ideal for orchestral and jazz performances.",
        price: 1200,
        image: [trumpet],
        category: "Brass",
        date: 1716668445448,
        bestseller: true
    },
    {
        _id: "brass002",
        name: "Intermediate Trombone",
        description: "A versatile tenor trombone with a yellow brass bell, medium-large bore, and smooth slide action, perfect for advancing musicians and ensemble play.",
        price: 950,
        image: [trumbone],
        category: "Brass",
        date: 1716668445449,
        bestseller: false
    },
    {
        _id: "brass003",
        name: "Professional Tuba",
        description: "A robust 4/4 BBb tuba with a large bell, designed for symphonic and concert band performances, featuring exceptional projection and rich, deep tone.",
        price: 5000,
        image: [tuba],
        category: "Brass",
        date: 1716668445450,
        bestseller: false
    },
    {
        _id: "brass004",
        name: "French Horn in F",
        description: "A double horn with detachable bell, featuring gold brass construction and precise rotary valves, delivering exceptional intonation and warmth.",
        price: 3500,
        image: [bass],
        category: "Brass",
        date: 1716668445451,
        bestseller: true
    },
    {
        _id: "brass005",
        name: "Student Euphonium",
        description: "A compact compensating euphonium ideal for beginners and school bands, featuring a rose brass leadpipe and silver-plated pistons.",
        price: 1100,
        image: [bass2],
        category: "Brass",
        date: 1716668445452,
        bestseller: false
    },
    // Woodwind Instruments
    {
        _id: "wood001",
        name: "Professional Concert Flute",
        description: "A handcrafted silver-plated flute with sterling silver head joint, featuring precision-tuned keys and exceptional resonance for professional performers.",
        price: 2800,
        image: [flute],
        category: "Woodwind",
        date: 1716668445453,
        bestseller: true
    },
    {
        _id: "wood002",
        name: "Intermediate Clarinet",
        description: "A professional-level clarinet made from select grenadilla wood, featuring nickel-silver keys and adjustable thumb rest for optimal playing comfort.",
        price: 1500,
        image: [clarient],
        category: "Woodwind",
        date: 1716668445454,
        bestseller: false
    },
    {
        _id: "wood003",
        name: "Alto Saxophone",
        description: "A professional Eb alto saxophone with high-quality brass body, featuring precision-engineered key work and rich, warm tonal characteristics.",
        price: 2200,
        image: [sax],
        category: "Woodwind",
        date: 1716668445455,
        bestseller: true
    },
    {
        _id: "wood004",
        name: "Professional Oboe",
        description: "A handcrafted oboe made from premium African blackwood, featuring silver-plated keys and precise reed configuration for exceptional sound quality.",
        price: 4000,
        image: [oboe],
        category: "Woodwind",
        date: 1716668445456,
        bestseller: false
    },
    {
        _id: "wood005",
        name: "Professional Bassoon",
        description: "A meticulously crafted maple wood bassoon with silver-plated keys, offering rich harmonic complexity and exceptional dynamic range.",
        price: 6000,
        image: [bassoon],
        category: "Woodwind",
        date: 1716668445457,
        bestseller: false
    },
    // Percussion Instruments
    {
        _id: "perc001",
        name: "Professional Snare Drum",
        description: "A versatile maple wood snare drum with chrome-plated hardware, die-cast hoops, and precision snare wire system for crisp, responsive sound.",
        price: 800,
        image: [drum],
        category: "Percussion",
        date: 1716668445458,
        bestseller: true
    },
    {
        _id: "perc002",
        name: "Professional Cymbal Set",
        description: "A comprehensive bronze cymbal set including crash, ride, hi-hat, and splash cymbals, crafted for optimal tone and durability in various musical styles.",
        price: 1200,
        image: [cymbal],
        category: "Percussion",
        date: 1716668445459,
        bestseller: false
    },
    {
        _id: "perc003",
        name: "Concert Timpani Set",
        description: "A set of four professional copper timpani with balanced, machine-hammered bowls and precision tuning mechanisms for exceptional orchestral performance.",
        price: 15000,
        image: [tim],
        category: "Percussion",
        date: 1716668445460,
        bestseller: true
    },
    {
        _id: "perc004",
        name: "Professional Xylophone",
        description: "A concert-grade rosewood xylophone with aluminum resonators, offering exceptional tonal clarity and perfect for symphonic and educational settings.",
        price: 3500,
        image: [xyl],
        category: "Percussion",
        date: 1716668445461,
        bestseller: false
    },
    {
        _id: "perc005",
        name: "Professional Marimba",
        description: "A five-octave concert marimba with premium rosewood bars and precisely tuned resonators, delivering rich, resonant sound for professional performances.",
        price: 12000,
        image: [marm],
        category: "Percussion",
        date: 1716668445462,
        bestseller: false
    },
    // String Instruments
    {
        _id: "str001",
        name: "Acoustic Guitar",
        description: "A handcrafted spruce top acoustic guitar with rosewood back and sides, featuring premium electronics and exceptional resonance and playability.",
        price: 1800,
        image: [gitar],
        category: "Strings",
        date: 1716668445463,
        bestseller: true
    },
    {
        _id: "str002",
        name: "Electric Bass Guitar",
        description: "A professional-grade five-string electric bass with active pickups, featuring a maple neck and mahogany body for versatile, powerful sound.",
        price: 2500,
        image: [bassGitar],
        category: "Strings",
        date: 1716668445464,
        bestseller: false
    },
    {
        _id: "str003",
        name: "Professional Violin",
        description: "A meticulously crafted hand-carved spruce and maple violin, featuring precision-graduated top and back, designed for professional concert performance.",
        price: 7000,
        image: [violin],
        category: "Strings",
        date: 1716668445465,
        bestseller: true
    },
    {
        _id: "str004",
        name: "Professional Viola",
        description: "A masterfully constructed viola with hand-selected spruce top and flamed maple back, offering rich, warm tonal characteristics for chamber music.",
        price: 6500,
        image: [viols],
        category: "Strings",
        date: 1716668445466,
        bestseller: false
    },
    {
        _id: "str005",
        name: "Professional Cello",
        description: "A concert-grade cello crafted from premium European spruce and maple, featuring exceptional tonal depth and responsive dynamic range.",
        price: 10000,
        image: [cello],
        category: "Strings",
        date: 1716668445467,
        bestseller: false
    },
    // Keyboard Instruments
    {
        _id: "key001",
        name: "Grand Piano",
        description: "A professional concert grand piano with hand-crafted soundboard, featuring precision action and exceptional tonal complexity for concert halls.",
        price: 80000,
        image: [piano],
        category: "Keyboard",
        date: 1716668445468,
        bestseller: true
    },
    {
        _id: "key002",
        name: "Digital Synthesizer",
        description: "A cutting-edge synthesizer with advanced sound generation, multiple oscillators, comprehensive modulation options, and professional-grade audio interface.",
        price: 2500,
        image: [syn],
        category: "Keyboard",
        date: 1716668445469,
        bestseller: false
    },

    {
        _id: "acc001",
        name: "Professional Drumsticks",
        description: "Premium maple wood drumsticks with carefully balanced weight and perfect grip, ideal for professional drummers across various musical styles.",
        price: 25,
        image: [drumstick], 
        category: "Accessories",
        date: 1716668445470,
        bestseller: true
    },
    {
        _id: "acc002",
        name: "Guitar String Set",
        description: "High-quality nickel-wound electric guitar strings with exceptional tone and durability, offering crisp sound and long-lasting performance.",
        price: 15,
        image: [string], 
        category: "Accessories",
        date: 1716668445471,
        bestseller: false
    },
    {
        _id: "acc003",
        name: "Trumpet Valve Oil",
        description: "Professional-grade lubricant specifically designed for brass instrument valves, ensuring smooth action and preventing corrosion.",
        price: 10,
        image: [oil], 
        category: "Accessories",
        date: 1716668445472,
        bestseller: false
    },
    {
        _id: "acc004",
        name: "Professional Clarinet Reed Set",
        description: "Premium handcrafted clarinet reeds made from select Marseille cane, offering consistent quality and superior tonal response.",
        price: 35,
        image: [reed],
        category: "Accessories",
        date: 1716668445473,
        bestseller: true
    },
    {
        _id: "acc005",
        name: "Saxophone Neck Strap",
        description: "Ergonomically designed padded neck strap with adjustable length and premium leather attachments for maximum comfort during performance.",
        price: 45,
        image: [strap], 
        category: "Accessories",
        date: 1716668445474,
        bestseller: false
    }
]