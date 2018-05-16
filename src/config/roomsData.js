import { defineMessages } from "react-intl";

import { config as CONFIG } from "config/";

const messages = defineMessages({
  room1Type: {
    id: `about.room1Type`,
    defaultMessage: `Superior double bed room`
  },
  room1Desc: {
    id: `about.room1Desc`,
    defaultMessage: `Romm's description`
  },
  room2Type: {
    id: `about.room2Type`,
    defaultMessage: `Standart room twin`
  },
  room2Desc: {
    id: `about.room2Desc`,
    defaultMessage: `Romm's description`
  },
  room3Type: {
    id: `about.room3Type`,
    defaultMessage: `Loft rooftop with jacuzzi`
  },
  room3Desc: {
    id: `about.room3Desc`,
    defaultMessage: `Romm's description`
  },
  room4Type: {
    id: `about.room4Type`,
    defaultMessage: `Suite with kichenette`
  },
  room4Desc: {
    id: `about.room4Desc`,
    defaultMessage: `Romm's description`
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
    description: messages.room3Desc,
    number: 2
  }
];
