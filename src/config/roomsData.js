import { defineMessages } from "react-intl";

import { config as CONFIG } from "config/";

const messages = defineMessages({
  room1Type: {
    id: `about.room1Type`,
    defaultMessage: `Superior double bed room`
  },
  room1Title: {
    id: `about.room1Title`,
    defaultMessage: `A bedroom with living room on the second floor.`
  },
  room1Desc: {
    id: `about.room1Desc`,
    defaultMessage: `With a surface around 47m2, they are located on the 2nd floor, have a nice balcony with sea view. They have a king size bed, their own bathroom with walk-in shower and water hot. A lounge area, with dining area, sink, mini fridge, microwave, kettle For your comfort it also has air conditioning, a flat screen TV with cable Samui, and a safe . This room can accommodate a maximum of 2 extra beds`
  },
  room2Type: {
    id: `about.room2Type`,
    defaultMessage: `Standart room twin`
  },
  room2Title: {
    id: `about.room2Title`,
    defaultMessage: `A simple and quiet room, in ground garden.`
  },
  room2Desc: {
    id: `about.room2Desc`,
    defaultMessage: `With a surface around 23m2, it is located in rez of garden and swimming pool. With a simple but pleasant comfort it is provided with 2 single beds, has its own bathroom with walk-in shower and hot water. It has air conditioning, a mini fridge, a flat-screen TV with Samui cable, a kettle and a safe. Due to its small size this room can not accept extra bed`
  },
  room3Type: {
    id: `about.room3Type`,
    defaultMessage: `Loft rooftop with jacuzzi`
  },
  room3Title: {
    id: `about.room3Title`,
    defaultMessage: `A large loft spirit room on the third floor.`
  },
  room3Desc: {
    id: `about.room3Desc`,
    defaultMessage: `With a surface around 50m2, it is located on the 3rd and last floor. These loft-style rooms open onto a pretty living room with dining area and have floor-to-ceiling windows overlooking a terrace with jacuzzi overlooking the sea. They feature a king-size bed, a bathroom with a shower and a hairdryer. Italian and hot water. A lounge area, with dining area, sink, mini fridge, microwave, kettle. For your comfort it also has air conditioning, a flat-screen TV with Samui cable, an ironing set and a safe. This room with its "honeymoon" spirit can not accommodate any extra bed.`
  },
  room4Type: {
    id: `about.room4Type`,
    defaultMessage: `Suite with kichenette`
  },
  room4Title: {
    id: `about.room4Title`,
    defaultMessage: `A small and practical apartment on the first floor`
  },
  room4Desc: {
    id: `about.room4Desc`,
    defaultMessage: `Of a surface around 43 m2, they are located on the 1st floor, have a nice balcony with view on the trees right in front of the beach of Maenam, we do not see the sea of ​​these rooms but according to the wind we can hear the surf waves. They have a king size bed, their own bathroom with walk-in shower and hot water. A kitchenette allowing for extra kitchen, with sink, refrigerator, microwave, kettle, coffee machine, and simple crockery for 3 people, as well as a table and chairs. For your comfort, it also has air conditioning, a flat screen TV with Samui cable and a safe. This room can accommodate 1 extra bed with surcharge.`
  }
});

export const data = [
  {
    id: `2`,
    imgs: [
      `${CONFIG.CDN}/img/rooms/2/1.jpg`,
      `${CONFIG.CDN}/img/rooms/2/2.jpg`,
      `${CONFIG.CDN}/img/rooms/2/3.jpg`
    ],
    slug: `twin`,
    type: messages.room2Type,
    title: messages.room2Title,
    description: messages.room2Desc,
    number: 1
  },
  {
    id: `4`,
    imgs: [
      `${CONFIG.CDN}/img/rooms/4/1.jpg`,
      `${CONFIG.CDN}/img/rooms/4/2.jpg`,
      `${CONFIG.CDN}/img/rooms/4/3.jpg`,
      `${CONFIG.CDN}/img/rooms/4/4.jpg`,
      `${CONFIG.CDN}/img/rooms/4/5.jpg`,
      `${CONFIG.CDN}/img/rooms/4/6.jpg`,
      `${CONFIG.CDN}/img/rooms/4/7.jpg`
    ],
    slug: `suite`,
    type: messages.room4Type,
    title: messages.room4Title,
    description: messages.room4Desc,
    number: 2
  },
  {
    id: `1`,
    imgs: [
      `${CONFIG.CDN}/img/rooms/1/1.jpg`,
      `${CONFIG.CDN}/img/rooms/1/2.jpg`,
      `${CONFIG.CDN}/img/rooms/1/3.jpg`,
      `${CONFIG.CDN}/img/rooms/1/4.jpg`,
      `${CONFIG.CDN}/img/rooms/1/5.jpg`,
      `${CONFIG.CDN}/img/rooms/1/6.jpg`,
      `${CONFIG.CDN}/img/rooms/1/7.jpg`,
      `${CONFIG.CDN}/img/rooms/1/8.jpg`
    ],
    slug: `superior`,
    type: messages.room1Type,
    title: messages.room1Title,
    description: messages.room1Desc,
    number: 2
  },
  {
    id: `3`,
    imgs: [
      `${CONFIG.CDN}/img/rooms/3/1.jpg`,
      `${CONFIG.CDN}/img/rooms/3/2.jpg`,
      `${CONFIG.CDN}/img/rooms/3/3.jpg`,
      `${CONFIG.CDN}/img/rooms/3/4.jpg`
    ],
    slug: `rooftop`,
    type: messages.room3Type,
    title: messages.room3Title,
    description: messages.room3Desc,
    number: 2
  }
];
