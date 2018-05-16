import { defineMessages } from "react-intl";
import { config as CONFIG } from "config";

const messages = defineMessages({
  block1: {
    id: "about.block1",
    defaultMessage:
      "We are a couple of new French managers and our hotel is located close to Maenam Beach and Walking Street, where you'll find lots of bars and restaurants and a colorful market every Thursday night."
  },
  block2: {
    id: "about.block2",
    defaultMessage:
      'We welcome you in a green and quiet with a functioning "Guest House", where the atmosphere will be friendly and family. Good mood, smiles and laughter will be the watchwords. We will do everything to make your stay enjoyable and that you keep the best memories. You will be able to pass here in a few minutes from the tumult of the Main Road to the silence of a small tropical garden.'
  },
  block3: {
    id: "about.block3",
    defaultMessage:
      "The reception is open from 8 a.m to 6.30 p.m, check-in from 2 p.m and check-out until 11 a.m. Tell us your approximate time of arrival so that we can do everything to accommodate you as best as possible."
  },
  block4: {
    id: "about.block4",
    defaultMessage:
      "Six of our rooms have private balconies and all are equipped with air conditioning, cable TV and mini bar. Some also have kitchenettes with dining tables and / or outdoor spa baths. Wi-Fi is available throughout the property."
  },
  block5: {
    id: "about.block5",
    defaultMessage:
      "We will serve you hearty breakfasts in the lounge or even at the bar if you wish, from 8.30 a.m to 10 p.m. For a more early hour, ask us 24 hours in advance and we will try to organize it for you. If you have not opted for breakfast, you can still enjoy it by ordering the day before, before 5 p.m , priced at 250 THB per person."
  },
  block6: {
    id: "about.block6",
    defaultMessage:
      "Our animal friends are welcome for free. Jasmine, our lovely English Setter dog, will be happy to keep them company if you wish."
  },
  block7: {
    id: "about.block7",
    defaultMessage:
      "Finally, we can arrange for you the rental of cars and scooters, as well as your transfers."
  }
});

export const data = [
  {
    text: messages.block1,
    img: `${CONFIG.CDN}/img/walkingstreetmaenam.jpg`,
    pos: "right"
  },
  {
    text: messages.block2,
    img: `${CONFIG.CDN}/img/pool.jpg`,
    pos: "left"
  },
  {
    text: messages.block3,
    img: `${CONFIG.CDN}/img/desk.jpg`,
    pos: "right"
  },
  {
    text: messages.block4,
    img: `${CONFIG.CDN}/img/room.jpg`,
    pos: "left"
  },
  {
    text: messages.block5,
    img: `${CONFIG.CDN}/img/breakfast.jpg`,
    pos: "right"
  },
  {
    text: messages.block6,
    img: `${CONFIG.CDN}/img/dog.jpg`,
    pos: "left"
  },
  {
    text: messages.block7,
    img: `${CONFIG.CDN}/img/scooters.jpg`,
    pos: "right"
  }
];
