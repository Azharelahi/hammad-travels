// destinations img
import tour5 from "../assets/images/tour/bali-1.png";
import tour6 from "../assets/images/tour/bangkok.png";
import tour7 from "../assets/images/tour/cancun.png";
import tour8 from "../assets/images/tour/nah-trang.png";
import tour9 from "../assets/images/tour/phuket.png";
import tour10 from "../assets/images/tour/paris.png";
import tour11 from "../assets/images/tour/malaysia.png";

// populars img
import Anchorage from "../assets/images/popular/Anchorage To La Paz.jpg";
import Singapore from "../assets/images/popular/Discover Singapore.png";
import Kiwiana from "../assets/images/popular/Kiwiana Panorama.jpg";
import Quito from "../assets/images/popular/Anchorage To Quito.jpg";
import Cuzco from "../assets/images/popular/Cuzco To Anchorage.jpg";
import Ushuaia from "../assets/images/popular/Anchorage To Ushuaia.jpg";
import Santiago from "../assets/images/popular/Anchorage To Santiago.jpg";
import Explorer from "../assets/images/popular/LA Explorer.jpg";

// tour detail img
import image1 from "../assets/images/new/1.jpg";
import image2 from "../assets/images/new/2.jpg";
import image3 from "../assets/images/new/3.jpg";
import image4 from "../assets/images/new/4.jpg";
import image5 from "../assets/images/new/5.jpg";
import image6 from "../assets/images/new/6.jpg";
import image7 from "../assets/images/new/7.jpg";
import image8 from "../assets/images/new/8.jpg";

export const destinationsData = [
  {
    id: 0,
    name: "Murree",
    distance: "64 km from Islamabad (1.5-hour drive)",
    tours: "7 tours and activities",
    image:
      "https://images.unsplash.com/photo-1585654766816-8a9fe569d445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVycmVlfGVufDB8MXwwfHx8MA%3D%3D",
    link: "murree-tours",
    shortDes: "A beautiful hill station with breathtaking views.",
    detailedDes:
      "Murree is a popular hill station known for its lush green hills, snowfall in winters, and colonial-era architecture. Enjoy the scenic Mall Road, Pindi Point, and Kashmir Point.",
    hotels: [
      "Shangrila Resort Murree",
      "Pearl Continental Bhurban",
      "Lockwood Hotel Murree",
    ],
    convinceMessage:
      "Planning your Murree trip? Leave everything to us and enjoy a hassle-free journey with the best accommodations and guided tours!",
    subImages: [
      {
        url: "https://images.unsplash.com/photo-1580910051072-445b5a050032?w=600&auto=format&fit=crop&q=60",
        description: "Snow-covered streets of Murree.",
      },
      {
        url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&auto=format&fit=crop&q=60",
        description: "Sunset view from Kashmir Point.",
      },
    ],
  },
  {
    id: 1,
    name: "Hunza Valley",
    distance: "600 km from Islamabad (10-12 hours drive)",
    tours: "5 tours and activities",
    image:
      "https://images.unsplash.com/photo-1592298483937-d76c1a24dbca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SHVuemElMjB2YWxsZXl8ZW58MHwxfDB8fHww",
    link: "hunza-valley-tours",
    shortDes: "A paradise on Earth with stunning landscapes.",
    detailedDes:
      "Hunza Valley offers mesmerizing views of the Karakoram mountains, Attabad Lake, Baltit Fort, and the historic Altit Fort. A must-visit for nature and adventure lovers.",
    hotels: ["Eagle’s Nest Hotel", "Hunza Serena Inn", "Hard Rock Hunza"],
    convinceMessage:
      "Experience Hunza like never before! We handle everything from transport to accommodation, so you can enjoy a stress-free vacation.",
    subImages: [
      {
        url: "https://images.unsplash.com/photo-1580910051072-445b5a050032?w=600&auto=format&fit=crop&q=60",
        description: "Snow-covered streets of Hunza valley.",
      },
      {
        url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&auto=format&fit=crop&q=60",
        description: "Sunset view from Hunza valley.",
      },
    ],
  },

  {
    id: 2,
    name: "Skardu",
    distance: "640 km from Islamabad (1-hour flight or 16-hour drive)",
    tours: "6 tours and activities",
    image:
      "https://images.unsplash.com/photo-1626440875119-d9b87c00e5fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2thcmR1fGVufDB8MXwwfHx8MA%3D%3D",
    link: "skardu-tours",
    shortDes: "Gateway to the world’s highest peaks and lakes.",
    detailedDes:
      "Skardu is home to Shigar Fort, Shangrila Resort, Satpara Lake, and the stunning Deosai National Park. Ideal for adventure seekers and trekkers.",
    hotels: ["Shangrila Resort", "Serena Shigar Fort", "Baltistan Continental"],
    convinceMessage:
      "Dreaming of Skardu? Let us take care of everything from flights to lodging, so you can fully immerse in nature’s beauty!",
    subImages: [
      {
        url: "https://images.unsplash.com/photo-1580910051072-445b5a050032?w=600&auto=format&fit=crop&q=60",
        description: "Snow-covered streets of Skardu.",
      },
      {
        url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&auto=format&fit=crop&q=60",
        description: "Sunset view from Skardu.",
      },
    ],
  },
  {
    id: 3,
    name: "Fairy Meadows",
    distance: "540 km from Islamabad (10-hour drive + 3-hour hike)",
    tours: "4 tours and activities",
    image:
      "https://c4.wallpaperflare.com/wallpaper/117/398/461/grayscale-photo-of-wood-dock-wallpaper-preview.jpg",
    link: "fairy-meadows-tours",
    shortDes: "A breathtaking viewpoint of Nanga Parbat.",
    detailedDes:
      "Fairy Meadows is a spectacular green plateau offering an iconic view of Nanga Parbat, the world’s 9th highest peak. Ideal for camping and photography lovers.",
    hotels: ["Fairy Meadows Cottages", "Raikot Sarai", "Parbat Inn"],
    convinceMessage:
      "Let us handle your transport, accommodation, and trek arrangements for a once-in-a-lifetime Fairy Meadows experience!",
    subImages: [
      {
        url: "https://images.unsplash.com/photo-1580910051072-445b5a050032?w=600&auto=format&fit=crop&q=60",
        description: "Snow-covered streets of Fairy Meadows.",
      },
      {
        url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&auto=format&fit=crop&q=60",
        description: "Sunset view from Fairy Meadows.",
      },
    ],
  },
  {
    id: 4,
    name: "Naran & Kaghan",
    distance: "270 km from Islamabad (6-hour drive)",
    tours: "8 tours and activities",
    image:
      "https://c1.wallpaperflare.com/preview/248/376/997/lake-saif-ul-muluk-pakistan-khyber-pakhtunkhwa-naran.jpg",
    link: "naran-kaghan-tours",
    shortDes: "Heavenly green valleys with crystal-clear lakes.",
    detailedDes:
      "Naran and Kaghan are famous for their lush green mountains, Babusar Top, and the stunning Saif-ul-Malook Lake. Perfect for family vacations and adventure trips.",
    hotels: ["Pine Park Hotel", "Naran City Hotel", "Arcadian Sprucewoods"],
    convinceMessage:
      "Plan your Naran & Kaghan getaway with us for a seamless and enjoyable experience!",
    subImages: [
      {
        url: "https://images.unsplash.com/photo-1580910051072-445b5a050032?w=600&auto=format&fit=crop&q=60",
        description: "Snow-covered streets of Murree.",
      },
      {
        url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&auto=format&fit=crop&q=60",
        description: "Sunset view from Kashmir Point.",
      },
    ],
  },
  {
    id: 5,
    name: "Swat Valley",
    distance: "250 km from Islamabad (5-hour drive)",
    tours: "6 tours and activities",
    image:
      "https://images.unsplash.com/photo-1579196900052-a6034632c042?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3dhdCUyMHZhbGxleXxlbnwwfHwwfHx8MA%3D%3D",
    link: "swat-tours",
    shortDes: "The Switzerland of Pakistan.",
    detailedDes:
      "Swat is famous for its breathtaking scenery, Malam Jabba ski resort, Mingora, and the cultural heritage of Buddhist sites.",
    hotels: ["Swat Serena Hotel", "Rock City Resort", "Pameer Hotel"],
    convinceMessage:
      "Want a hassle-free Swat trip? Let us arrange everything from transportation to sightseeing!",
    subImages: [
      {
        url: "https://images.unsplash.com/photo-1580910051072-445b5a050032?w=600&auto=format&fit=crop&q=60",
        description: "Snow-covered streets of Murree.",
      },
      {
        url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&auto=format&fit=crop&q=60",
        description: "Sunset view from Kashmir Point.",
      },
    ],
  },
  {
    id: 6,
    name: "Neelum Valley",
    distance: "190 km from Islamabad (5-hour drive)",
    tours: "5 tours and activities",
    image:
      "https://images.pexels.com/photos/15388314/pexels-photo-15388314/free-photo-of-wooden-house-among-green-mountains.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "neelum-valley-tours",
    shortDes: "A lush green valley in Azad Kashmir.",
    detailedDes:
      "Neelum Valley is known for its mesmerizing rivers, Ratti Gali Lake, and Sharda town with its historic ruins.",
    hotels: ["Neelum Star Hotel", "Green Village Resort", "Shangrila Resort"],
    convinceMessage:
      "Book with us and enjoy a seamless trip to Neelum Valley with all the best spots covered!",
    subImages: [
      {
        url: "https://images.unsplash.com/photo-1580910051072-445b5a050032?w=600&auto=format&fit=crop&q=60",
        description: "Snow-covered streets of Murree.",
      },
      {
        url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&auto=format&fit=crop&q=60",
        description: "Sunset view from Kashmir Point.",
      },
    ],
  },
  {
    id: 7,
    name: "Gorakh Hill Station",
    distance: "400 km from Karachi (8-hour drive)",
    tours: "3 tours and activities",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjZR6uU6ShaTvCGq0McQjCBW1VL0fEeNXSA&s",
    link: "gorakh-hill-tours",
    shortDes: "Sindh’s only hill station with cold weather.",
    detailedDes:
      "Gorakh Hill offers a unique experience in Sindh with its chilly weather, stunning sunsets, and a view of the Milky Way at night.",
    hotels: ["Gorakh Hill Resort", "Dadu Guest House"],
    convinceMessage:
      "Leave the planning to us! Experience Gorakh Hill in comfort with our guided tours and accommodations.",
    subImages: [
      {
        url: "https://images.unsplash.com/photo-1580910051072-445b5a050032?w=600&auto=format&fit=crop&q=60",
        description: "Snow-covered streets of Murree.",
      },
      {
        url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&auto=format&fit=crop&q=60",
        description: "Sunset view from Kashmir Point.",
      },
    ],
  },
];

export const popularsData = [
  {
    id: 0,
    title: "Misgar Trophy Hunting And Safari",
    image: Singapore,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "Rail Tour"],
    days: "5 days - 4 nights",
    price: 100,
    afterDiscount: 92,
    rating: 3,
    reviews: 5,
  },
  {
    id: 1,
    title: "Kirthar Trophy Hunting And Safari",
    image: Kiwiana,
    location: "European Way, Southampton, United Kingdom",
    category: ["River Cruise", "Wildlife"],
    days: "2 days - 1 nights",
    price: 87,
    afterDiscount: 82,
    rating: 4,
    reviews: 9,
  },
  {
    id: 2,
    title: "Dream Journey of North",
    image: Quito,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "River Cruise"],
    days: "2 days - 1 nights",
    price: 87,
    afterDiscount: 82,
    rating: 4,
    reviews: 9,
  },
  {
    id: 3,
    title: "Magnificent Hunza Valley",
    image: Anchorage,
    location: "European Way, Southampton, United Kingdom",
    category: ["River Cruise", "Rail Tour"],
    days: "unlimited",
    price: 434,
    afterDiscount: 0,
    rating: 5,
    reviews: 20,
  },
  {
    id: 4,
    title: "Baloch Richness",
    image: Cuzco,
    location: "European Way, Southampton, United Kingdom",
    category: ["River Cruise", "Tour & Cruise"],
    days: "1 days - 9 hours",
    price: 395,
    afterDiscount: 0,
    rating: 3,
    reviews: 12,
  },
  {
    id: 5,
    title: "Coastal Adventure",
    image: Ushuaia,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "Wildlife"],
    days: "5 days - 4 nights",
    price: 93,
    afterDiscount: 0,
    rating: 3,
    reviews: 12,
  },
  {
    id: 6,
    title: "Experience the Karakoram Highway",
    image: Santiago,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "Wildlife"],
    days: "1 day - 1 night",
    price: 42,
    afterDiscount: 0,
    rating: 5,
    reviews: 18,
  },
  {
    id: 7,
    title: "Wild Deosai And Skardu",
    image: Explorer,
    location: "European Way, Southampton, United Kingdom",
    category: ["Rail Tour", "Tour & Cruise"],
    days: "1 night",
    price: 99,
    afterDiscount: 0,
    rating: 4,
    reviews: 22,
  },
];
const mountainDestinations = {
  gilgitBaltistan: {
    name: "Gilgit-Baltistan",
    destinations: [
      {
        image:
          "https://images.unsplash.com/photo-1550586678-f7225f03c44b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVuemElMjB2YWxsZXklMkMlMjBodW56YSUyQyUyMHBha2lzdGFufGVufDB8fDB8fHww",
        name: "Hunza Valley",
        description:
          "Famous for its breathtaking landscapes, Baltit and Altit Forts, and the stunning Attabad Lake.",
        attractions: [
          "Baltit Fort",
          "Altit Fort",
          "Attabad Lake",
          "Eagle’s Nest Viewpoint",
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1602741805960-8fa6d8c6d988?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2h1bmplcmFiJTIwcGFzc3xlbnwwfHwwfHx8MA%3D%3D",
        name: "Khunjerab Pass",
        description:
          "The highest paved border crossing in the world, offering breathtaking mountain views and a gateway to China via the Karakoram Highway.",
        attractions: [
          "Highest ATM in the World",
          "China-Pakistan Border",
          "Snow-Capped Peaks",
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1595507205672-ae65e9fda540?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2thcmR1fGVufDB8fDB8fHww",
        name: "Skardu",
        description:
          "Home to the beautiful Shangrila Resort, Shigar Fort, and the mesmerizing Deosai Plains.",
        attractions: [
          "Shangrila Resort",
          "Shigar Fort",
          "Satpara Lake",
          "Deosai National Park",
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1572099666274-6559498526bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmVhcnklMjBtZWFkb3dzfGVufDB8fDB8fHww",
        name: "Fairy Meadows",
        description:
          "A picturesque spot near Nanga Parbat, offering stunning views and trekking opportunities.",
        attractions: [
          "Nanga Parbat Base Camp",
          "Fairy Meadows Cottages",
          "Beyal Camp",
        ],
      },
    ],
  },
  khyberPakhtunkhwa: {
    name: "Khyber Pakhtunkhwa",
    destinations: [
      {
        image:
          "https://images.unsplash.com/photo-1599543552889-a5f37428e72c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dhdCUyMGtwa3xlbnwwfHwwfHx8MA%3D%3D",
        name: "Swat Valley",
        description:
          "Known as the 'Switzerland of Pakistan,' famous for its lush green valleys and Malam Jabba ski resort.",
        attractions: ["Fizagat Park", "Kalam Valley", "Mahodand Lake"],
      },
      {
        image:
          "https://images.unsplash.com/photo-1572707582365-0ee1c8e71173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmFyYW4lMjBrYWdoYW58ZW58MHx8MHx8fDA%3D",
        name: "Kaghan Valley",
        description:
          "A scenic valley with beautiful lakes, including Saif-ul-Malook and Lulusar Lake.",
        attractions: ["Saif-ul-Malook Lake", "Lulusar Lake", "Babusar Top"],
      },
      {
        image:
          "https://images.unsplash.com/photo-1596464148416-e0916276a9f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a3VtcmF0fGVufDB8fDB8fHww",
        name: "Dir and Kumrat Valley",
        description:
          "A hidden paradise with lush green landscapes, waterfalls, and a peaceful environment.",
        attractions: ["Jahaz Banda", "Panjkora River", "Katora Lake"],
      },
    ],
  },
  azadKashmir: {
    name: "Azad Kashmir",
    destinations: [
      {
        image:
          "https://images.unsplash.com/photo-1651135135875-a6d458a9462d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmVlbGFtJTIwdmFsbGV5fGVufDB8fDB8fHww",
        name: "Neelum Valley",
        description:
          "Famous for its blue rivers, lush green mountains, and picturesque villages.",
        attractions: ["Sharda", "Arang Kel", "Ratti Gali Lake"],
      },
      {
        image:
          "https://images.unsplash.com/photo-1638395726483-44ce023bacd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmF3YWxha290fGVufDB8fDB8fHww",
        name: "Rawalakot",
        description:
          "A serene valley also known as the 'Pearl Valley' of Kashmir.",
        attractions: ["Banjosa Lake", "Toli Pir", "Poonch River"],
      },
    ],
  },
};
export const beachDestinations = {
  sindh: {
    name: "Sindh",
    destinations: [
      {
        image:
          "https://media.istockphoto.com/id/2152420888/photo/camel-riding-along-the-coast-a-tranquil-experience-at-sea-view-beach-karachi-pakistan.jpg?s=612x612&w=0&k=20&c=PkIjGAhnfTnA5dcHfVt9nx5SRx5HyUmbHODDxU3I7GA=",
        name: "Clifton Beach",
        description:
          "A popular beach in Karachi with camel rides, food stalls, and scenic views of the Arabian Sea.",
        attractions: ["Camel & Horse Riding", "Sunset View", "Food Stalls"],
      },
      {
        image:
          "https://media.istockphoto.com/id/1335305981/photo/good-morning.jpg?s=612x612&w=0&k=20&c=FXM-W4twaIbBjQxwqS2ypDbsRWLNBmFE33LIY8OP-X4=",
        name: "Hawke's Bay Beach",
        description:
          "A serene beach near Karachi, famous for its crystal-clear waters and turtle nesting areas.",
        attractions: ["Turtle Watching", "Swimming", "Beach Huts"],
      },
      {
        image:
          "https://media.istockphoto.com/id/465540233/photo/paradise-point-beach-karachi-sind-pakistan.jpg?s=612x612&w=0&k=20&c=w6HaAEEaZC__zNemSYF8bkAj5ji-Apo1WNhF4tUP51g=",
        name: "Paradise Point",
        description:
          "A natural rock formation and popular picnic spot along the Karachi coastline.",
        attractions: ["Rock Formations", "Boating", "Jet Skiing"],
      },
    ],
  },
};

export default mountainDestinations;
export const desertDestinations = {
  sindh: {
    region: "Sindh",
    destinations: [
      {
        name: "Thar Desert",
        image:
          "https://media.istockphoto.com/id/1024816978/photo/master-in-desert.jpg?s=612x612&w=0&k=20&c=_BoQ5m0CFydeOHX97KkVhRSvIgO10WmcssIfb-FUHPk=",
        description:
          "One of the largest deserts in Pakistan, known for its golden sand dunes and vibrant culture.",
        attractions: ["Sand Dunes", "Camel Safari", "Folk Music"],
      },
    ],
  },
  punjab: {
    region: "Punjab",
    destinations: [
      {
        name: "Cholistan Desert",
        image:
          "https://media.istockphoto.com/id/1497969711/photo/derawar-fort-bahawalpur.jpg?s=612x612&w=0&k=20&c=Yp6H_9TwfGj_aYCTAOA0YFExOzKXeH9IxV409ZWVTIY=",
        description:
          "A vast desert in Punjab, home to the famous Derawar Fort and traditional nomadic lifestyle.",
        attractions: ["Derawar Fort", "Jeep Rally", "Traditional Handicrafts"],
      },
    ],
  },
  balochistan: {
    region: "Balochistan",
    destinations: [
      {
        name: "Kharan Desert",
        image:
          "https://media.istockphoto.com/id/674370214/photo/kenya-from-the-air.jpg?s=612x612&w=0&k=20&c=kpg1H2zpIVOFz_TTjUzFAqVmkV7rIevrpZFasaj7MjQ=",
        description:
          "A remote and mesmerizing desert with unique landscapes, once used for nuclear testing.",
        attractions: ["Vast Sand Landscapes", "Wildlife", "Camping"],
      },
    ],
  },
};
export const forestDestinations = {
  gilgit_baltistan: {
    region: "Gilgit-Baltistan",
    destinations: [
      {
        name: "Deosai National Park",
        image:
          "https://plus.unsplash.com/premium_photo-1670959934143-f646ac034d1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVvc2FpJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
        description:
          "Known as the ‘Land of Giants’, Deosai is a high-altitude forest with breathtaking landscapes.",
        attractions: ["Wildlife", "Camping", "Hiking"],
      },
    ],
  },
  khyber_pakhtunkhwa: {
    region: "Khyber Pakhtunkhwa",
    destinations: [
      {
        name: "Ayubia National Park",
        image:
          "https://images.unsplash.com/photo-1602600049562-ab0a1645ce3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXl1YmlhJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww",
        description:
          "A dense pine forest with scenic hiking trails, home to leopards and a variety of bird species.",
        attractions: ["Hiking Trails", "Chair Lifts", "Wildlife"],
      },
      {
        name: "Kumrat Valley",
        image:
          "https://images.unsplash.com/photo-1605687711416-adb293b8fbe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S3VtcmF0JTIwVmFsbGV5fGVufDB8fDB8fHww",
        description:
          "A stunning valley with thick forests, waterfalls, and rivers, offering a perfect retreat for nature lovers.",
        attractions: ["Camping", "Trekking", "River Rafting"],
      },
    ],
  },
  punjab: {
    region: "Punjab",
    destinations: [
      {
        name: "Changa Manga Forest",
        image:
          "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8fDB8fHww",
        description:
          "One of the largest man-made forests in the world, offering boating, cycling, and wildlife exploration.",
        attractions: ["Boating", "Cycling", "Wildlife Park", "Picnic Spots"],
      },
    ],
  },
};

export const tourDetails = {
  title: "Beautiful Bali with Malaysia",
  des: ` Bali, also known as the land of gods has plenty to offer to travelers from across the globe. As it so contrasted oh estimating instrument. Size like body some one had.  Are conduct viewing boy minutes warrant the expense?  Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.  Lively use looked latter regard had. Do he it part more  last in. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this is packed with practical hands-on examples that you can  follow step by step.`,
  price: "280.00",
  rating: " 4.5",
  reviews: "365 reviews",
  tourInfo: [
    '<strong className="font-bold"> Place Covered</strong>: Bali - Ubud',
    ' <strong className="font-bold">Duration:</strong>5 Days, 4 Nights',
    '<strong className="font-bold">Start Point:</strong> Ngurah International Airport',
    '<strong className="font-bold">End Point:</strong>  Ngurah International Airport',
  ],

  highlights: [
    " Experience a delightful tropical getaway with a luxurious stay and witness the picture-perfect beaches, charming waterfalls and so much more",
    " Dependent on so extremely delivered by. Yet no jokes  worse her why. Bed one supposing breakfast day fulfilled off depending questions.",
    " Whatever boy her exertion his extended. Ecstatic  followed handsome drawings entirely Mrs one yet  outweigh.",
    "Meant balls it if up doubt small purse. Required his  you put the outlived answered position. A pleasure exertion if believed provided to.",
  ],

  itinerary: [
    {
      title: `<span class="me-1 fw-bold">Day 1:</span>  Airport Pick Up `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },

    {
      title: `<span class="me-1 fw-bold">Day 2:</span>  Temples & River Cruise `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in. `,
    },
    {
      title: `<span class="me-1 fw-bold">Day 3:</span>  Massage & Overnight Train`,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 4:</span>  Khao Sok National Park `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 5:</span>  Travel to Koh Phangan `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
    {
      title: `<span class="me-1 fw-bold">Day 6:</span> Morning Chill & Muay Thai Lesson `,
      des: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
  ],

  included: [
    "Comfortable stay for 4 nights in your preferred category Hotels",
    "Professional English speaking guide to help you explore the cities",
    "Breakfast is included as mentioned in Itinerary.",
    "Per Peron rate on twin sharing basis",
    "Entrance Tickets to Genting Indoor Theme Park    ",
    "All Tours & Transfers on Seat In Coach Basis ",
    "Visit Bali Safari & Marine Park with Jungle Hopper Pass    ",
  ],
  exclusion: [
    "Lunch and dinner are not included in CP plans",
    "Any other services not specifically mentioned in the inclusions",
    "Medical and Travel insurance",
    "Airfare is not included ",
    "Early Check-In & Late Check-Out ",
    "Anything which is not specified in Inclusions    ",
  ],

  images: [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
    {
      original: image5,
      thumbnail: image5,
    },

    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    },
    {
      original: image8,
      thumbnail: image8,
    },
  ],
};

export const location = [
  "Bali",
  "Tokyo",
  "Bangkok",
  "Cancun",
  "Nha Trang",
  "Phuket",
  "Malaysia",
  "Paris",
];

export const Categories = [
  "History",
  "Calture",
  "Netural",
  "Urban Tour",
  "Relax",
];

export const Duration = ["1-3 Days", "3-5 Days", "5-7 Days", "7-10 Day"];
export const PriceRange = [
  "$ 0 - $50",
  "$ 50 - $ 100",
  "$ 100 - $ 200",
  "$ 200 - ₹ $ 400",
  "$ 400 - ₹ $ 800",
];

export const Ratings = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
