# Project Title: ReadWave

**Project Creator:** Brus Hoxha  
**GitHub Username:** bhoxha21  
**Email:** bhoxha21@epoka.edu.al  

## Project Details
### Problem Identification:
Reading has become more of a chore for many individuals, losing the joy and excitement it once held. Recognizing this challenge, ReadWave aims to bring back the fun in reading by providing an engaging and personalized platform for book enthusiasts.

### Solution Proposal:
ReadWave is not just a book recommendation system; it's a comprehensive platform designed to inspire a love for reading. Users will start their journey by creating personalized profiles, inputting preferences, and sharing a bit about their reading habits. The system will then guide them through engaging personality questions tailored to unveil their reading passions. Additionally, the platform will feature the top books of the week displayed on the website. The ultimate goal is to create an immersive reading experience, fostering a reading community dedicated to exploration and shared enthusiasm.

### Project Scope:
The platform will include features for users to create profiles, input preferences, track reading progress, and engage in the personality quiz to receive personalized book recommendations. Users can also explore the top books of the week displayed on the website.

### Project Aim:
ReadWave aims to transform reading into an adventurous and communal experience. By blending book recommendations with engaging content and community features, the platform encourages users to read more, share their passion, and explore the diverse world of literature.

## Roles and Tasks
### Roles:
- Planning Analysis
- Design
- Development
- Testing

### Tasks Distribution:
**Planning Analysis:** Brus Hoxha
- Conduct a detailed analysis of user requirements for an engaging book exploration platform.
- Define a plan for developing features that encourage a love for reading.

**Design:** Brus Hoxha
- Design an interactive and visually appealing platform interface.
- Outline the system architecture to support community features, reading challenges, personalized profiles, and displaying the top books of the week.

**Development:** Brus Hoxha
- Implement the user profile creation feature with preferences input.
- Develop the personality quiz feature for personalized book recommendations.
- Create features for tracking reading progress, displaying the top books of the week, and sharing recommendations.

**Testing:** Brus Hoxha
- Conduct rigorous testing to ensure an engaging user experience and seamless functionality.

## Deadline
Submission Deadline: 04.03.2024, 23:59 hours.

# Phase II: User Requirements and Application Specifications

**Submission Deadline:** 18.03.2024, 23:59

## Chosen Development Model: Agile

**Justification:** Agile methodology is chosen for the development of ReadWave due to its iterative nature and adaptability to changes. Employing the Agile approach enables continuous improvement and responsiveness to evolving user needs within the project's scope.

## User Requirements

### a. Stakeholders:

- **Brus Hoxha (Project Creator and Developer):** Responsible for the overall project vision, development, and coordination, ensuring alignment with stakeholder expectations and technical aspects.
- **End-users (Book Enthusiasts):** Interested in accessing personalized book recommendations, fostering engagement and enjoyment of literature.

### b. User Stories:

**User Type: End-user**

- **Requirement:** Users should be able to answer personality questions to receive personalized book recommendations.
  - **Benefit:** Empowers users to discover books that match their personalities, enhancing the reading experience and promoting exploration of diverse literature.
- **Requirement:** Users should be able to explore recommended books and view detailed information about each recommendation.
  - **Benefit:** Provides comprehensive information about recommended books, enabling users to make informed choices and encouraging further exploration of literary works.

## Functional Requirements

### a. Brief Description:

The system should allow users to answer personality questions, receive personalized book recommendations, explore recommended books, and view detailed information about each recommendation.

### b. Acceptance Criteria:

- Users can successfully answer personality questions to generate personalized book recommendations.
- The system generates personalized book recommendations based on user responses.
- Users can explore recommended books and view detailed information, including title, author, genre, summary, and user ratings.

## Non-Functional Requirements

### a. Brief Description:

The system should prioritize user experience, performance, security, and scalability to ensure a seamless and reliable platform for end-users.

### b. Acceptance Criteria:

- The platform should have a user-friendly and intuitive interface.
- The system should respond promptly to user interactions and requests.
- Security measures such as data encryption and secure authentication methods should be implemented.
- The system architecture should be designed to accommodate potential future growth and scalability requirements.

## Application Specifications

### a. Architecture:

**Overview:** The system will follow a client-server architecture with a web-based front-end and a backend server.
**Components:** Front-end interface, backend server, and database system constitute the core components of the system architecture.
**Interactions:** The front-end communicates with the backend server to process user responses, generate personalized book recommendations, and retrieve detailed book information.

### b. Database Model:

**Tables:** PersonalityQuestions, RecommendedBooks, and BookDetails form the foundational tables of the database model.
**Relationships:** PersonalityQuestions are linked to RecommendedBooks to generate personalized recommendations based on user responses.

### c. Technologies Used:

- **Front-end:** HTML, CSS, JavaScript, React.js constitute the front-end stack.
- **Back-end:** PHP powers the backend infrastructure.
- **Database:** MySQL serves as the database solution.

### d. User Interface Design:

Visual representations of wireframes and mockups to be provided, showcasing the user interface design focusing on ease of navigation, aesthetic appeal, and readability of book information.

### e. Security Measures:

# Phase III: Software Design and Modeling
**Deadline:** April 1st, 2024, 23:59

## System Architecture:
### User Interface (UI):
The User Interface (UI) component of ReadWave has been meticulously crafted using HTML, CSS, and JavaScript, meticulously coded to ensure a seamless and engaging user experience. Rather than relying on Wix, the website has been custom-built from scratch, leveraging these technologies to create visually stunning interfaces and intuitive navigation. This approach allows for greater flexibility and control over the design and functionality of the platform, tailored specifically to the needs of our users.

### Backend Services (Custom APIs and Functions):
The backbone of ReadWave's functionality lies in its custom backend services, developed using PHP and JavaScript. These services handle critical tasks such as user authentication, personalized book recommendations, tracking reading progress, and managing community engagement features. By leveraging custom APIs and Functions, we ensure efficient data processing, seamless user interactions, and integration with external services, providing a robust and scalable solution for managing user data and system operations.

### Database (Custom Database Management):
The heart of ReadWave's data management system is a custom-built database, designed using MySQL and integrated seamlessly into the platform. This database stores structured data related to user profiles, personality quiz responses, recommended books, and community interactions. Through careful design and optimization, we ensure real-time updates, efficient data retrieval, and seamless integration with other platform components, supporting our growth and enhancing user engagement.

### External APIs and Integrations:
In addition to our custom-built components, ReadWave integrates with external APIs and third-party services to enhance its functionality and provide additional features to our users. This includes integration with book catalog APIs to expand our book database and social media APIs for sharing recommendations. These integrations enrich the user experience, providing access to diverse content and fostering engagement within our community.

### Admin Panel (Custom Dashboard):
Our administrators wield powerful tools through a custom-built Admin Panel, accessible directly from our platform. This dashboard empowers them to manage content, monitor user activities, and administer the platform effectively. Integrated with our custom backend services, the Admin Panel enables seamless data management, content moderation, and system monitoring, empowering administrators to make informed decisions and drive platform growth.

### Component Diagram:
#### Class Diagram
- The User Class now includes additional attributes such as userID, username, email, and preferences, facilitating personalized experiences for our users.
- The Book Class represents individual books with attributes such as bookID, title, author, and genre, enabling efficient organization and retrieval of book data.
- The PersonalityQuestion Class contains attributes for personality quiz questions and options, enriching our user engagement features.
- The Recommendation Class stores personalized recommendations for users, enhancing their exploration of our platform's offerings.
- Relationships between classes are carefully defined to ensure seamless interactions and data management.

# Phase IV: Software Testing
**Deadline:** May 6, 11:59 PM

## Introduction to Testing:
Software testing is a critical process in evaluating software to identify defects or bugs. It ensures the reliability and correctness of the software, contributing to its overall quality and user satisfaction.

## Purpose of Testing:
My objective with testing is to detect defects early on in the software development lifecycle and ensure that software components perform as intended. Early detection of issues minimizes the cost and effort involved in rectifying defects later in the development process.

## Focus on Testing a Single Component:
During this phase, my focus will be on meticulously testing specific components of the software to ascertain their functionality, reliability, and accuracy. I will meticulously select critical functions and modules from the codebase and devise comprehensive test cases to validate their behavior.

## Preparing Test Cases:
In preparing test cases, I will encompass various scenarios, including normal inputs, edge cases, and invalid inputs for each selected component. This exhaustive approach ensures thorough testing and validation of the software's functionality.

## Choosing Testing Frameworks:
For unit testing in JavaScript, I will employ Jest, a renowned testing framework celebrated for its simplicity and efficacy. Jest offers robust assertion utilities and mocking capabilities, making it an ideal choice for testing JavaScript code.

## Setting up Jest:
To set up Jest, I followed these steps:

**Installation of Node

.js:** Ensure that Node.js is installed on your system. Node.js provides the runtime environment for executing JavaScript code outside the browser.

**Creation of package.json:** Initialize a Node.js project by executing the following command in the terminal:
```bash
npm init -y
```
This command creates a package.json file with default configurations, allowing you to manage dependencies and scripts for your project.

**Installation of Jest:** With your project initialized, install Jest as a development dependency using the following command:
```bash
npm install --save-dev jest
```
This command adds Jest to your project's dependencies, ensuring that it's available for testing purposes while keeping your production dependencies separate.

**Configuration of package.json:** Specify Jest as the test type in the package.json file. Add the following configuration under the "scripts" section:
```json
"scripts": {
  "test": "jest"
}
```
This configuration tells npm to run Jest when the "test" script is invoked.

To execute the tests, run Jest from the terminal. Since Jest is specified as the test type in package.json, you can simply run:
```bash
npm test
```
This command triggers Jest to execute all the tests defined in your test files. Jest displays the results, indicating whether each test passed, failed, or encountered errors.

## Writing Test Code:
Test files for specific functions/modules have already been created:

### getanswers.test.js:
```javascript
const getanswer = require("./getanswer");
const questions = require("./db");

test("get the answer for a given question at index (questions, question_index, answer_index)", () => {
  const expectedAnswer = questions[2].answers[0].text;
  expect(getanswer(questions, 2, 0)).toBe(expectedAnswer);
});
```

### getanswercat.test.js:
```javascript
const getanswercat = require("./getanswercat");
const questions = require("./db");
const expectedAnsCat = questions[0].answers[0].cat;

test("get the answer cat for a given question at index (questions, question_index, answer_index)", () => {
  expect(getanswercat(questions, 2, 0)).toBe(expectedAnsCat);
});
```

### getquestion.test.js:
```javascript
const getquestion = require("./getquestion");
const questions = require("./db");
const expectedQuestion = questions[2].question;

test("get the question at a particular index (question, question_index)", () => {
  expect(getquestion(questions, 2)).toBe(expectedQuestion);
});
```

### getquestionobj.test.js:
```javascript
const getquestionobj = require("./getquestionobj");
const questions = require("./db");
const expectedQuestionobj = questions[0];

test("get the question object at a particular index (question, question_index)", () => {
  expect(getquestionobj(questions, 0)).toBe(expectedQuestionobj);
});
```

### randindexes.test.js:
```javascript
const randindexes = require("./randindexes");

test("generates 5 random question indexes", () => {
  expect(randindexes()).toBe(5);
});
```

### result.test.js:
```javascript
const result = require("./result");

test("get the final result depending on the introvert/extrovert count (introvert, extrovert)", () => {
  expect(result(3, 2)).toBe("You're an Introvert");
});
```

## Test Coverage:
Achieving high test coverage is essential to ensure thorough testing of the software. It helps in identifying areas of the codebase that are not adequately tested, allowing us to improve the overall quality and reliability of the software.

With these steps, I ensured that the software components are thoroughly tested, ensuring their reliability and correctness in the project.
