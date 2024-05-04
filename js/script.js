const LAST_QUESTION = 5;
var selectedIndexes = [];
var questionIndex = undefined;
var selectedAnswers = [null, null, null, null, null];

const startTest = () => {
  //generate 5 random questions indexes
  selectedIndexes = [];
  let count = 0;
  while (count < 5) {
    let number = null;
    do {
      number = Math.floor(Math.random() * 10);
    } while (selectedIndexes.includes(number));
    selectedIndexes.push(number);
    count++;
  }

  //show
  questionIndex = 0;
  let questionObj = questions[selectedIndexes[questionIndex]];
  //console.log(questionObj);

  //show new question
  displayQuestion(questionObj);

  //set the question number
  document.getElementById("counter").innerHTML = questionIndex + 1;

  //disable previous button and next button
  document.getElementById("next").style.pointerEvents = "none";
  document.getElementById("next").style.color = "gray";

  document.getElementById("previous").style.pointerEvents = "none";
  document.getElementById("previous").style.color = "gray";

  //hide the intro page an show the test
  document.getElementsByClassName("welcome")[0].style.display = "none";
  document.getElementsByClassName("container")[0].style.display = "flex";

  //don't show test result
  document.getElementById("test-result").style.display = "none";

  //hide restart button
  document.getElementById("restart").style.display = "none";

  //hide the right side
  document.getElementsByClassName("your-answers")[0].style.display = "none";
};

const resetPreviousStyles = () => {
  //reset styles added previously
  document.getElementById("div-ans-a").style.border = "none";
  document.getElementById("div-ans-b").style.border = "none";
  document.getElementById("div-ans-c").style.border = "none";
  document.getElementById("div-ans-d").style.border = "none";
};

const displaySelectedAnswer = (answer) => {
  if (answer === 0) {
    document.getElementById("div-ans-a").style.border = "2px solid blue";
  } else if (answer === 1) {
    document.getElementById("div-ans-b").style.border = "2px solid blue";
  } else if (answer === 2) {
    document.getElementById("div-ans-c").style.border = "2px solid blue";
  } else {
    document.getElementById("div-ans-d").style.border = "2px solid blue";
  }
};

const displayQuestion = (questionObj) => {
  document.getElementById("question").innerHTML = questionObj.question;
  document.getElementById("ans-a").innerHTML = questionObj.answers[0].text;
  document.getElementById("ans-b").innerHTML = questionObj.answers[1].text;
  document.getElementById("ans-c").innerHTML = questionObj.answers[2].text;
  document.getElementById("ans-d").innerHTML = questionObj.answers[3].text;

  //enable previous button if there's a previous question
  if (questionIndex > 0) {
    document.getElementById("previous").style.pointerEvents = "auto";
    document.getElementById("previous").style.color = "black";
  } else {
    document.getElementById("previous").style.pointerEvents = "none";
    document.getElementById("previous").style.color = "gray";
  }

  //enable the next button only if there's an existing answer
  if (selectedAnswers[questionIndex] !== null) {
    document.getElementById("next").style.pointerEvents = "auto";
    document.getElementById("next").style.color = "black";
  } else {
    document.getElementById("next").style.pointerEvents = "none";
    document.getElementById("next").style.color = "gray";
  }

  //next 'next question to finish' if question is the last

  if (questionIndex === LAST_QUESTION - 1) {
    document.getElementById("next").innerHTML = "Finish";
  } else {
    document.getElementById("next").innerHTML = "Next question >";
  }
};

const nextQuestion = () => {
  if (questionIndex < selectedIndexes.length - 1) {
    questionIndex++;
    let questionObj = questions[selectedIndexes[questionIndex]];
    //console.log(questionObj);

    //reset styles added previously
    resetPreviousStyles();

    //show new question
    displayQuestion(questionObj);

    if (selectedAnswers[questionIndex] !== null) {
      //previous answer exist
      //set the selected answer since user can change the answer
      let answer = selectedAnswers[questionIndex];
      displaySelectedAnswer(answer);
    }

    //set the question number
    document.getElementById("counter").innerHTML = questionIndex + 1;
  } else {
    showAllQuestionAndAnswer();
  }
};

const previousQuestion = () => {
  console.log(questionIndex);
  if (questionIndex > 0) {
    questionIndex--;

    let questionObj = questions[selectedIndexes[questionIndex]];
    //console.log(questionObj);

    resetPreviousStyles();

    //show new question
    displayQuestion(questionObj);

    //set the question number
    document.getElementById("counter").innerHTML = questionIndex + 1;

    //set the selected answer since user can change the answer
    let answer = selectedAnswers[questionIndex];
    displaySelectedAnswer(answer);
  }
};

const selectedAnswer = (ans) => {
  //reset styles added previously
  resetPreviousStyles();

  //setSelected answers
  displaySelectedAnswer(ans);

  //when answer is selected, enable the next button
  document.getElementById("next").style.pointerEvents = "auto";
  document.getElementById("next").style.color = "black";

  //user answer so we can display it at the end
  selectedAnswers[questionIndex] = ans;
  //console.log(selectedAnswers);
};

//function to show the chosen question and answer. For summary at the end of the test
const showElement = (questionObj, chosenAnswer, index) => {
  let element = "";

  switch (chosenAnswer) {
    case 0:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a" style="border: 2px solid blue">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    case 1:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b" style="pointer-events: none; border: 2px solid blue">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c" >
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    case 2:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c" style="border: 2px solid blue">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="none; margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    case 3:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px; border: 2px solid blue">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
      break;
    default:
      element = `<div id="question-count">Question <span id="counter"></span>${index}/5</div>
        <div id="question">${questionObj.question}</div>
        <div class="ans" id="div-ans-a">
          <span class="my-alpha">A</span><span id="ans-a">${questionObj.answers[0].text}</span>
        </div>
        <div class="ans" id="div-ans-b">
          <span class="my-alpha">B</span><span id="ans-b">${questionObj.answers[1].text}</span>
        </div>
        <div class="ans" id="div-ans-c">
          <span class="my-alpha">C</span><span id="ans-c">${questionObj.answers[2].text}</span>
        </div>
        <div class="ans" id="div-ans-d" style="margin-bottom: 40px">
          <span class="my-alpha">D</span><span id="ans-d">${questionObj.answers[3].text}</span>
        </div>
        `;
  }

  return element;
};

const showAllQuestionAndAnswer = () => {
  //store the count for later comparison
  let introvertCount = 0;
  let extrovertCount = 0;

  //get the questions and selected answer in order to display the summary
  for (let i = 0; i < selectedIndexes.length; i++) {
    let questionObj = questions[selectedIndexes[i]];
    let answer = selectedAnswers[i];
    let element = showElement(questionObj, answer, i + 1);
    document.getElementById("answers").innerHTML += element;

    let cat = questionObj.answers[answer].cat;
    if (cat === "introvert") {
      introvertCount++;
    } else {
      extrovertCount++;
    }
  }

  //console.log(introvertCount);
  //console.log(extrovertCount);

  showPersonalities(introvertCount, extrovertCount);

  //hide the previous and finish button and show restart button
  document.getElementById("next").style.display = "none";
  document.getElementById("previous").style.display = "none";
};

const showPersonalities = (introvert, extrovert) => {
  if (introvert > extrovert) {
    //show image
    document.getElementById("image").src = "images/introvert.png";

    document.getElementById("trait-title").innerText = "You are an Introvert";

    //append personality traits
    let element = `<li>Quiet: The Power of Introverts in a World That Can't Stop Talking" by Susan Cain explores the strengths and potential of introverts in a predominantly extroverted society.</li>
    <li>The Introvert Advantage: How to Thrive in an Extrovert World" by Marti Olsen Laney provides insights into the unique traits and abilities of introverts and offers strategies for navigating social and professional settings.</li>
    <li>The Highly Sensitive Person: How to Thrive When the World Overwhelms You" by Elaine N. Aron discusses the characteristics of highly sensitive individuals, including many introverts, and offers guidance on managing their unique sensitivities.</li>
    <li>
    Quiet Power: The Secret Strengths of Introverted Kids" by Susan Cain is a guide for parents and educators on understanding and nurturing the strengths of introverted children.
    </li>

    <li>
    Introvert Doodles: An Illustrated Look at Introvert Life in an Extrovert World" by Maureen Marzi Wilson offers a lighthearted and relatable illustrated exploration of the introverted experience.


    </li>
    <li>The Introverted Leader: Building on Your Quiet Strength" by Jennifer B. Kahnweiler offers advice and strategies for introverted individuals in leadership positions, highlighting the strengths they bring to the table.</li>`;
    document.getElementById("personalities").innerHTML += element;
  } else {
    //show image
    document.getElementById("image").src = "images/extrovert.png";
    document.getElementById("trait-title").innerText = "You are an Extrovert";

    //append personality traits
    let element = `<li>"Where'd You Go, Bernadette" by Maria Semple - This comedic novel follows the quirky Bernadette Fox, an eccentric and adventurous woman whose disappearance prompts her daughter to embark on a journey to find her..</li>
    

    <li>
    "The Hitchhiker's Guide to the Galaxy" by Douglas Adams - A humorous science fiction novel that follows the misadventures of Arthur Dent as he travels through space after Earth's destruction. It's filled with quirky characters, absurd situations, and witty humor.
    </li>

    <li>
    "Eat, Pray, Love" by Elizabeth Gilbert - A memoir that chronicles the author's journey of self-discovery through Italy, India, and Indonesia. It explores themes of travel, spirituality, and personal growth through engaging storytelling.
    </li>
    <li>"Wild" by Cheryl Strayed - This memoir recounts the author's solo hike along the Pacific Crest Trail, exploring themes of adventure, self-reliance, and personal transformation.</li>
    <li>"Big Magic: Creative Living Beyond Fear" by Elizabeth Gilbert - Gilbert shares insights and inspiration for living a creative and fulfilling life, encouraging readers to embrace curiosity, take risks, and pursue their passions.</li>
    <li>"Yes Man" by Danny Wallace - This memoir follows the author's experiment of saying "yes" to every opportunity that comes his way for a year. It's a humorous and uplifting exploration of embracing life's possibilities and seizing opportunities for adventure and connection.</li>`;
    document.getElementById("personalities").innerHTML += element;
  }

  //show test result
  document.getElementById("test-result").style.display = "flex";

  //show restart button
  document.getElementById("restart").style.display = "block";

  //show the right side
  document.getElementsByClassName("your-answers")[0].style.display = "block";
};

const restartQuestion = () => {
  window.location.reload();
};
