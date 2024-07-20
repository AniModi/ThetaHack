type ConversationStep = {
  speaker: string;
  text: string;
  responses: { text: string; nextStep: number }[];
};

export const conversationSteps: ConversationStep[] = [
  {
    speaker: "Gandalf",
    text: "I am here to aid you on your quest. You must seek the ancient artifact.",
    responses: [
      { text: "Where can I find this artifact?", nextStep: 1 },
      { text: "What dangers await me?", nextStep: 2 },
      { text: "Why is this artifact important?", nextStep: 3 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "It is hidden deep within the Forgotten Forest. Beware of the dangers that lurk there.",
    responses: [
      { text: "What kind of dangers?", nextStep: 2 },
      {
        text: "Thank you, Gandalf. I will head there immediately.",
        nextStep: 4,
      },
    ],
  },
  {
    speaker: "Gandalf",
    text: "Many creatures and dark forces reside in the forest. Be well prepared.",
    responses: [
      { text: "What should I take with me?", nextStep: 5 },
      {
        text: "Thank you, Gandalf. I will head there immediately.",
        nextStep: 4,
      },
    ],
  },
  {
    speaker: "Gandalf",
    text: "The artifact holds immense power. In the wrong hands, it could bring great destruction.",
    responses: [
      { text: "How can I protect it?", nextStep: 6 },
      { text: "I understand. I will retrieve it.", nextStep: 4 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "May the light of the Valar guide you.",
    responses: [{ text: "End Conversation", nextStep: -1 }],
  },
  {
    speaker: "Gandalf",
    text: "You should take a sturdy weapon, a shield, and some healing potions.",
    responses: [
      { text: "Where can I find these items?", nextStep: 7 },
      { text: "Thank you, Gandalf. I will gather these items.", nextStep: 4 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "You must keep it hidden and only use it when absolutely necessary.",
    responses: [
      { text: "I will be cautious. Thank you.", nextStep: 4 },
      { text: "Is there anything else I should know?", nextStep: 8 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "You can find them in the village market. Speak to the blacksmith and the healer.",
    responses: [
      { text: "I will do that. Thank you, Gandalf.", nextStep: 4 },
      { text: "Can you accompany me?", nextStep: 9 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "Yes, remember that the forest can play tricks on your mind. Trust your instincts.",
    responses: [
      { text: "I will remember. Thank you.", nextStep: 4 },
      { text: "What kind of tricks?", nextStep: 10 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "I must attend to other matters, but I will be watching over you.",
    responses: [{ text: "I understand. Farewell.", nextStep: 4 }],
  },
  {
    speaker: "Gandalf",
    text: "The forest is known to create illusions and false paths. Stay focused.",
    responses: [
      { text: "I will stay vigilant. Thank you.", nextStep: 4 },
      { text: "Is there any way to counteract these illusions?", nextStep: 11 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "A keen mind and a pure heart can see through the illusions. Have faith in yourself.",
    responses: [{ text: "I will. Thank you.", nextStep: 4 }],
  },
];
