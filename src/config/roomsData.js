import { defineMessages } from "react-intl";

const messages = defineMessages({
  room1Type: {
    id: "about.room1Type",
    defaultMessage: "Room's type"
  },
  room1Desc: {
    id: "about.room1Desc",
    defaultMessage: "Romm's description"
  },
  room2Type: {
    id: "about.room2Type",
    defaultMessage: "Room's type"
  },
  room2Desc: {
    id: "about.room2Desc",
    defaultMessage: "Romm's description"
  },
  room3Type: {
    id: "about.room3Type",
    defaultMessage: "Room's type"
  },
  room3Desc: {
    id: "about.room3Desc",
    defaultMessage: "Romm's description"
  },
  room4Type: {
    id: "about.room4Type",
    defaultMessage: "Room's type"
  },
  room4Desc: {
    id: "about.room4Desc",
    defaultMessage: "Romm's description"
  }
});

export const data = [
  {
    id: "1",
    imgs: [
      "/img/IMG_TEST.jpg",
      "/img/moakBedRoom1.jpeg",
      "/img/moakBedRoom2.jpeg",
      "/img/moakBedRoom3.jpeg"
    ],
    type: messages.room1Type,
    description: messages.room1Desc,
    number: 2
  },
  {
    id: "2",
    imgs: [
      "/img/moakBedRoom1.jpeg",
      "/img/moakBedRoom2.jpeg",
      "/img/moakBedRoom3.jpeg"
    ],
    type: messages.room2Type,
    description: messages.room2Desc,
    number: 1
  },
  {
    id: "3",
    imgs: [
      "/img/moakBedRoom1.jpeg",
      "/img/moakBedRoom2.jpeg",
      "/img/moakBedRoom3.jpeg"
    ],
    type: messages.room3Type,
    description: messages.room3Desc,
    number: 2
  },
  {
    id: "4",
    imgs: [
      "/img/moakBedRoom1.jpeg",
      "/img/moakBedRoom2.jpeg",
      "/img/moakBedRoom3.jpeg"
    ],
    type: messages.room4Type,
    description: messages.room4Desc,
    number: 2
  }
];
