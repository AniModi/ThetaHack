type ConversationStep = {
  speaker: string;
  text: string;
  responses: { text: string; nextStep: number }[];
};

export const wizardConversationSteps: ConversationStep[] = [
  {
    speaker: "Gandalf",
    text: "Greetings, brave adventurer. I sense you seek wisdom and a new quest. What is it you desire?",
    responses: [
      { text: "I seek knowledge about the dungeons.", nextStep: 1 },
      { text: "I am ready for a new mission.", nextStep: 2 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "The dungeons are perilous, filled with traps and creatures. What do you wish to know?",
    responses: [
      { text: "Tell me about the traps.", nextStep: 3 },
      { text: "What creatures lurk in the dungeons?", nextStep: 4 },
      { text: "How can I find treasures?", nextStep: 5 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "Very well. Your mission is to explore the Caves of Shadow. Find the lost relic and return it to me.",
    responses: [
      { text: "Where can I find the Caves of Shadow?", nextStep: 6 },
      { text: "What dangers await me there?", nextStep: 7 },
      { text: "I will embark on this quest at once.", nextStep: -1 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "Traps come in many forms: hidden pits, swinging blades, and magical snares. Tread carefully.",
    responses: [
      { text: "How can I detect these traps?", nextStep: 8 },
      { text: "Thank you for the warning.", nextStep: -1 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "Beware of goblins, skeletons, and the mighty dragon that guards the deepest chamber. Each poses a unique threat.",
    responses: [
      { text: "How can I defeat these creatures?", nextStep: 9 },
      { text: "I will be cautious. Thank you.", nextStep: -1 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "Look for hidden doors and solve ancient puzzles. Treasures are often guarded by fierce enemies.",
    responses: [
      { text: "What kind of puzzles?", nextStep: 10 },
      { text: "I will keep my eyes open. Thank you.", nextStep: -1 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "The Caves of Shadow lie to the north, beyond the Dark Forest. Follow the old road until you see the entrance carved into the mountainside.",
    responses: [
      {
        text: "Thank you, Gandalf. I will find the Caves of Shadow.",
        nextStep: -1,
      },
    ],
  },
  {
    speaker: "Gandalf",
    text: "The caves are filled with monsters and treacherous paths. You must be well-prepared and vigilant.",
    responses: [
      { text: "What should I bring with me?", nextStep: 11 },
      { text: "I will be prepared. Thank you.", nextStep: -1 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "Use a keen eye and listen for changes in the environment. Some adventurers use a staff to test the ground ahead.",
    responses: [{ text: "Thank you for the advice, Gandalf.", nextStep: -1 }],
  },
  {
    speaker: "Gandalf",
    text: "Use their weaknesses to your advantage. Fire against the goblins, holy magic against the undead, and find the dragon's weak spot.",
    responses: [{ text: "Thank you for the guidance, Gandalf.", nextStep: -1 }],
  },
  {
    speaker: "Gandalf",
    text: "The puzzles range from cryptic riddles to mechanisms that require precise timing and coordination.",
    responses: [
      { text: "I will prepare for the puzzles. Thank you.", nextStep: -1 },
    ],
  },
  {
    speaker: "Gandalf",
    text: "Bring healing potions, a sturdy weapon, and some form of light. You may also want to carry a few rations.",
    responses: [
      {
        text: "I will gather these supplies. Thank you, Gandalf.",
        nextStep: -1,
      },
    ],
  },
];

export const ElfConversationSteps: ConversationStep[] = [
  {
    speaker: "Gabriel",
    text: "Greetings, traveler. I am Gabriel the Elf. What brings you to my sanctuary?",
    responses: [
      { text: "I seek your wisdom.", nextStep: 1 },
      { text: "I am looking for a new challenge.", nextStep: 2 },
    ],
  },
  {
    speaker: "Gabriel",
    text: "Wisdom is best earned through experience. Would you be interested in a card battle to test your skills?",
    responses: [
      { text: "Yes, I am ready for a card battle.", nextStep: 3 },
      { text: "Tell me more about card battles.", nextStep: 4 },
    ],
  },
  {
    speaker: "Gabriel",
    text: "A challenge, you say? Very well, let's have a card battle. Are you prepared?",
    responses: [
      { text: "Yes, let's begin the card battle.", nextStep: 3 },
      { text: "What are the rules of the card battle?", nextStep: 5 },
    ],
  },
  {
    speaker: "Gabriel",
    text: "Excellent! Let us begin the card battle. May the best player win!",
    responses: [
      { text: "Let's do this!", nextStep: -1 },
      { text: "I'm not ready yet.", nextStep: 6 },
    ],
  },
  {
    speaker: "Gabriel",
    text: "Card battles are strategic games where players use decks of cards to outwit their opponents. Each card has unique abilities.",
    responses: [
      { text: "Sounds intriguing. Let's have a card battle.", nextStep: 3 },
      { text: "I need more time to prepare.", nextStep: 6 },
    ],
  },
  {
    speaker: "Gabriel",
    text: "The rules are simple: each player takes turns drawing cards and playing them strategically. The first to deplete the opponent's life points wins.",
    responses: [
      { text: "I understand. Let's start the card battle.", nextStep: 3 },
      { text: "I need more time to prepare.", nextStep: 6 },
    ],
  },
  {
    speaker: "Gabriel",
    text: "No worries, Let's have a test battle to help you prepare.",
    responses: [
      { text: "I understand. Let's start the card battle.", nextStep: -1 },
    ],
  },
];
