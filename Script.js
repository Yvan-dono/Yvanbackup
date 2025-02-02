const createFlashCardBtn = document.querySelector('.create-card-btn'); // Sélectionne le bouton pour créer des flashcards
const studyFlashCardsBtn = document.querySelector('.study-card-btn'); // Sélectionne le bouton pour étudier les flashcards

const mainContainer = document.querySelector('.flash-card-outer-container'); // Sélectionne le conteneur principal des flashcards
const innerContainer = document.querySelector('.flash-card-container'); // Sélectionne le conteneur interne des cartes flash

const studyScreen = document.querySelector('.study-flashcards-screen'); // Sélectionne l'écran d'étude des cartes flash
const frontSideCard = document.querySelector('.front-side-card'); // Sélectionne la carte côté recto
const backSideCard = document.querySelector('.back-side-card'); // Sélectionne la carte côté verso

const previousBtn = document.querySelector('.prev-card-btn'); // Sélectionne le bouton pour la carte précédente
const nextBtn = document.querySelector('.next-card-btn'); // Sélectionne le bouton pour la carte suivante
const showBacksideBtn = document.querySelector('.back-side-btn'); // Sélectionne le bouton pour afficher le verso de la carte
const showFrontSideBtn = document.querySelector('.front-side-btn'); // Sélectionne le bouton pour afficher le recto de la carte
const editFlashCardBtn = document.querySelector('.edit-card-btn'); // Sélectionne le bouton pour éditer les cartes

let count = 0; // Initialise le compteur de cartes à 0
const questions = []; // Initialise un tableau pour stocker les questions
const answers = []; // Initialise un tableau pour stocker les réponses

createFlashCardBtn.addEventListener("click", () => {
    createNewFlashCard(); // Ajoute un événement au clic pour créer une nouvelle flashcard
});

studyFlashCardsBtn.addEventListener("click", () => {
    createArrays(); // Crée les tableaux de questions et de réponses
    showFlashCard(); // Affiche la carte flash actuelle
    studyScreen.style.display = 'flex'; // Affiche l'écran d'étude des flashcards
    mainContainer.style.display = 'none'; // Masque le conteneur principal des flashcards
});

editFlashCardBtn.addEventListener("click", () => {
    studyScreen.style.display = 'none'; // Masque l'écran d'étude des flashcards
    mainContainer.style.display = 'flex'; // Affiche le conteneur principal des flashcards
    clearArrays(); // Vide les tableaux de questions et de réponses
});

showBacksideBtn.addEventListener("click", () => {
    frontSideCard.style.display = 'none'; // Masque la carte côté recto
    backSideCard.style.display = 'flex'; // Affiche la carte côté verso
    showFrontSideBtn.style.display = 'flex'; // Affiche le bouton pour afficher le recto de la carte
    showBacksideBtn.style.display = 'none'; // Masque le bouton pour afficher le verso de la carte
});

showFrontSideBtn.addEventListener("click", () => {
    frontSideCard.style.display = 'flex'; // Affiche la carte côté recto
    backSideCard.style.display = 'none'; // Masque la carte côté verso
    showFrontSideBtn.style.display = 'none'; // Masque le bouton pour afficher le recto de la carte
    showBacksideBtn.style.display = 'flex'; // Affiche le bouton pour afficher le verso de la carte
});

function showFlashCard() {
    frontSideCard.innerHTML = questions[count]; // Affiche la question actuelle sur la carte côté recto
    backSideCard.innerHTML = answers[count]; // Affiche la réponse actuelle sur la carte côté verso
}

previousBtn.addEventListener("click", () => {
    count--; // Décrémente le compteur de cartes
    if (count < 0) count = questions.length - 1; // Si le compteur est inférieur à 0, le réinitialise à la dernière carte
    showFlashCard(); // Affiche la flashcard actuelle
});

nextBtn.addEventListener("click", () => {
    count++; // Incrémente le compteur de cartes
    if (count >= questions.length) count = 0; // Si le compteur dépasse le nombre de cartes, il y a aura une réinitialisation à la première carte
    showFlashCard(); // Affiche la flashcard actuelle
});

function createArrays() {
    const questionInputTextArea = document.querySelectorAll('.question-input'); // Sélectionne toutes les zones de texte des questions
    const answerInputTextArea = document.querySelectorAll('.answer-input'); // Sélectionne toutes les zones de texte des réponses

    questionInputTextArea.forEach(questionInput => {
        const questionValue = questionInput.value; // Récupère la valeur de la zone de texte de la question
        questions.push(questionValue); // Ajoute la question au tableau des questions
    });

    answerInputTextArea.forEach(answerInput => {
        const answerValue = answerInput.value; // Récupère la valeur de la zone de texte de la réponse
        answers.push(answerValue); // Ajoute la réponse au tableau des réponses
    });
}

function clearArrays() {
    questions.length = 0; // Vide le tableau des questions
    answers.length = 0; // Vide le tableau des réponses
}

function createNewFlashCard() {
    const flashCardContainerDiv = document.createElement('div'); // Crée un nouveau div pour le conteneur de la carte flash

    const questionContainerDiv = document.createElement('div'); // Crée un nouveau div pour le conteneur de la question
    const questionLabel = document.createElement('label'); // Crée un nouveau label pour la question
    const textAreaQuestion = document.createElement('textarea'); // Crée une nouvelle zone de texte pour la question

    const answerContainerDiv = document.createElement('div'); // Crée un nouveau div pour le conteneur de la réponse
    const answerLabel = document.createElement('label'); // Crée un nouveau label pour la réponse
    const textAreaAnswer = document.createElement('textarea'); // Crée une nouvelle zone de texte pour la réponse

    flashCardContainerDiv.classList.add('flash-card-container'); // Ajoute la classe 'flash-card-container' au div du conteneur de la carte flash

    questionContainerDiv.classList.add('question-container'); // Ajoute la classe 'question-container' au div du conteneur de la question
    questionLabel.setAttribute('for', 'question-input'); // Définit l'attribut 'for' du label de la question
    questionLabel.innerHTML = 'Frontside:'; // Définit le texte du label de la question

    answerContainerDiv.classList.add('answer-container'); // Ajoute la classe 'answer-container' au div du conteneur de la réponse
    answerLabel.setAttribute('for', 'answer-input'); // Définit l'attribut 'for' du label de la réponse
    answerLabel.innerHTML = 'Back side:'; // Définit le texte du label de la réponse

    textAreaQuestion.setAttribute('name', 'question-input'); // Définit l'attribut 'name' de la zone de texte de la question
    textAreaQuestion.setAttribute('class', 'question-input'); // Définit la classe de la zone de texte de la question
    textAreaQuestion.setAttribute('cols', '35'); // Définit le nombre de colonnes de la zone de texte de la question
    textAreaQuestion.setAttribute('rows', '6'); // Définit le nombre de lignes de la zone de texte de la question

    textAreaAnswer.setAttribute('name', 'answer-input'); // Définit l'attribut 'name' de la zone de texte de la réponse
    textAreaAnswer.setAttribute('class', 'answer-input'); // Définit la classe de la zone de texte de la réponse
    textAreaAnswer.setAttribute('cols', '35'); // Définit le nombre de colonnes de la zone de texte de la réponse
    textAreaAnswer.setAttribute('rows', '6'); // Définit le nombre de lignes de la zone de texte de la réponse

    questionContainerDiv.appendChild(questionLabel); // Ajoute le label de la question au div du conteneur de la question
    questionContainerDiv.appendChild(textAreaQuestion); // Ajoute la zone de texte de la question au div du conteneur de la question
    flashCardContainerDiv.appendChild(questionContainerDiv); // Ajoute le div du conteneur de la question au div du conteneur de la flashcard

    answerContainerDiv.appendChild(answerLabel); // Ajoute le label de la réponse au div du conteneur de la réponse
    answerContainerDiv.appendChild(textAreaAnswer); // Ajoute la zone de texte de la réponse au div du conteneur de la réponse
    flashCardContainerDiv.appendChild(answerContainerDiv); // Ajoute le div du conteneur de la réponse au div du conteneur de la flashcard

    mainContainer.appendChild(flashCardContainerDiv); // Ajoute le div du conteneur de la flashcard au conteneur principal
}
