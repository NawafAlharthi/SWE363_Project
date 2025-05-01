const router = require("express").Router();
const FlashcardDeck = require("../models/FlashcardDeck");
const Flashcard = require("../models/Flashcard");

// --- Flashcard Deck Routes ---

// GET all decks
router.route("/decks").get((req, res) => {
  FlashcardDeck.find()
    .then(decks => res.json(decks))
    .catch(err => res.status(400).json("Error: " + err));
});

// ADD a new deck
router.route("/decks/add").post((req, res) => {
  const { name, description } = req.body;
  const newDeck = new FlashcardDeck({ name, description });

  newDeck.save()
    .then((savedDeck) => res.json(savedDeck))
    .catch(err => res.status(400).json("Error: " + err));
});

// GET a specific deck by ID
router.route("/decks/:id").get((req, res) => {
  FlashcardDeck.findById(req.params.id)
    .then(deck => res.json(deck))
    .catch(err => res.status(400).json("Error: " + err));
});

// DELETE a deck by ID (and its cards)
router.route("/decks/:id").delete(async (req, res) => {
  try {
    await Flashcard.deleteMany({ deckId: req.params.id });
    await FlashcardDeck.findByIdAndDelete(req.params.id);
    res.json("Flashcard deck and associated cards deleted.");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

// UPDATE a deck by ID
router.route("/decks/:id").put((req, res) => {
  FlashcardDeck.findById(req.params.id)
    .then(deck => {
      if (req.body.name !== undefined) deck.name = req.body.name;
      if (req.body.description !== undefined) deck.description = req.body.description;
      deck.save()
        .then((updatedDeck) => res.json(updatedDeck))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// --- Flashcard Routes ---

// GET all cards for a specific deck
router.route("/cards/:deckId").get((req, res) => {
  Flashcard.find({ deckId: req.params.deckId })
    .then(cards => res.json(cards))
    .catch(err => res.status(400).json("Error: " + err));
});

// ADD a new card to a deck
router.route("/cards/add").post((req, res) => {
  const { deckId, front, back } = req.body;
  const newCard = new Flashcard({ deckId, front, back });

  newCard.save()
    .then((savedCard) => res.json(savedCard))
    .catch(err => res.status(400).json("Error: " + err));
});

// GET a specific card by ID
router.route("/cards/:id").get((req, res) => {
  Flashcard.findById(req.params.id)
    .then(card => res.json(card))
    .catch(err => res.status(400).json("Error: " + err));
});

// DELETE a card by ID
router.route("/cards/:id").delete((req, res) => {
  Flashcard.findByIdAndDelete(req.params.id)
    .then(() => res.json("Flashcard deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

// UPDATE a card by ID
router.route("/cards/:id").put((req, res) => {
  Flashcard.findById(req.params.id)
    .then(card => {
      if (req.body.front !== undefined) card.front = req.body.front;
      if (req.body.back !== undefined) card.back = req.body.back;
      card.save()
        .then((updatedCard) => res.json(updatedCard))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;

