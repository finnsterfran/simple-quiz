
const quizData = [
    {    
        question: "Where is Middle C in the Treble Clef?",
        a: "the first line",
        b: "the first ledger line",
        c: "the middle line",
        correct: "a",
    },
    {
        question: "What is another name for the Treble Clef?",
        a: "the G clef",
        b: "the Upper clef",
        c: "the Loopy clef",
        correct: "a",
    },
    {
        question: "What is another name for the Bass Clef?",
        a: "the Lower clef",
        b: "the F clef",
        c: "the Ear clef",
        correct: "b",
    },
    {
        question: "Which of the following is the order of sharps?",
        a: "D-C-A-G-F-E-B",
        b: "A-D-G-E-B=F-C",
        c: "F-C-G-D-A-E-B",
        correct: "c",
    },
    {
        question: "Which of the following is the order of flats?",
        a: "B-E-A-D-G-C-F",
        b: "B-E-F-G-A-C-D",
        c: "C-F-B-E-G-D-A",
        correct: "a",
    },
    {
        question: "How many notes are in a scale?",
        a: "10",
        b: "6",
        c: "8",
        correct: "c",
    },
    {
        question: "How do you turn a natural minor scale into a harmonic minor scale?",
        a: "raise the 8th degree",
        b: "raise the 7th degree",
        c: "raise the 6th degree",
        correct: "b",
    },
    {
        question: "What is the first and last scale degree called?",
        a: "tonic",
        b: "dominant",
        c: "subdominant",
        correct: "a",
    },
    {
        question: "What is the fourth scale degree called?",
        a: "tonic",
        b: "dominant",
        c: "subdominant",
        correct: "c",
    },
    {
        question: "What is the fifth scale degree called?",
        a: "tonic",
        b: "dominant",
        c: "subdominant",
        correct: "b",
    },
    {
        question: "What is another name for an Anacrusis?",
        a: "a raised beat",
        b: "a high beat",
        c: "an up-beat",
        correct: "c",
    },
    {
        question: "Which musical era came right after the Classical Era?",
        a: "the Romantic Era",
        b: "the Baroque Era",
        c: "the Modernist Era",
        correct: "a",
    },
    {
        question: "Which musical era came right after the Modernist Era?",
        a: "the Classical Era",
        b: "the Impressionist Era",
        c: "the Romantic Era",
        correct: "b",
    },
    {
        question: "What is the relative minor key of the C Major scale?",
        a: "A Minor",
        b: "B Minor",
        c: "F Minor",
        correct: "a",
    },
    {
        question: "What is the relative major key of the D Minor scale?",
        a: "E Major",
        b: "F Major",
        c: "G Major",
        correct: "b",
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;

};
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
};

function getSelected() {
    let answer 
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
};

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>`
        }

    }

});