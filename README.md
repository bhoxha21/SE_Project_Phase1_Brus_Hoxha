# Project Title: ReadWave

**Project Creator:** Brus Hoxha  
**GitHub Username:** bhoxha21  
**Email:** bhoxha21@epoka.edu.al  

## Project Details
### Problem Identification:
Reading has become more of a chore for many individuals, losing the joy and excitement it once held. Recognizing this challenge, ReadWave Explorer aims to bring back the fun in reading by providing an engaging and personalized platform for book enthusiasts.

### Solution Proposal:
ReadWave Explorer is not just a book recommendation system; it's a comprehensive platform designed to inspire a love for reading. Users will start their journey by creating personalized profiles, inputting preferences, and sharing a bit about their reading habits. The system will then guide them through engaging personality questions tailored to unveil their reading passions. Additionally, the platform will feature fun and educational book-related mini-games, including book trivia, word puzzles, and character quizzes. Users can earn rewards or unlock special features by participating and excelling in these games. The ultimate goal is to create an immersive reading experience, fostering a reading community dedicated to exploration and shared enthusiasm.

### Project Scope:
The platform will include features for users to create profiles, input preferences, track reading progress, and engage in book-related mini-games. Users can also share book recommendations within the community, participate in reading challenges, and join discussions.

### Project Aim:
ReadWave Explorer aims to transform reading into an adventurous and communal experience. By blending book recommendations with engaging content, community features, and book-related mini-games, the platform encourages users to read more, share their passion, and explore the diverse world of literature.

## Roles and Tasks
### Roles:
- Planning Analysis
- Design
- Development
- Testing

### Tasks Distribution:
**Planning Analysis:** Brus Hoxha
- Conduct a detailed analysis of user requirements for an engaging book exploration platform.
- Define a plan for developing features that encourage a love for reading, including book-related mini-games.

**Design:** Brus Hoxha
- Design an interactive and visually appealing platform interface.
- Outline the system architecture to support community features, reading challenges, personalized profiles, and book-related mini-games.

**Development:** Brus Hoxha
- Implement the user profile creation feature with preferences input.
- Develop the personality quiz feature for personalized book recommendations.
- Create features for tracking reading progress, sharing recommendations, participating in reading challenges, and engaging in book-related mini-games.

**Testing:** Brus Hoxha
- Conduct rigorous testing to ensure an engaging user experience and seamless functionality.

## Deadline
Submission Deadline: 04.03.2024, 23:59 hours.

# Phase II: User Requirements and Application Specifications

**Submission Deadline:** 18.03.2024, 23:59

## Chosen Development Model: Agile

**Justification:** Agile methodology is chosen for the development of ReadWave Explorer due to its iterative nature and adaptability to changes. Employing the Agile approach enables continuous improvement and responsiveness to evolving user needs within the project's scope.

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
The User Interface (UI) component of ReadWave Explorer has been meticulously crafted using HTML, CSS, and JavaScript, meticulously coded to ensure a seamless and engaging user experience. Rather than relying on Wix, the website has been custom-built from scratch, leveraging these technologies to create visually stunning interfaces and intuitive navigation. This approach allows for greater flexibility and control over the design and functionality of the platform, tailored specifically to the needs of our users.

### Backend Services (Custom APIs and Functions):
The backbone of ReadWave Explorer's functionality lies in its custom backend services, developed using PHP and JavaScript. These services handle critical tasks such as user authentication, personalized book recommendations, tracking reading progress, and managing community engagement features. By leveraging custom APIs and Functions, we ensure efficient data processing, seamless user interactions, and integration with external services, providing a robust and scalable solution for managing user data and system operations.

### Database (Custom Database Management):
The heart of ReadWave Explorer's data management system is a custom-built database, designed using MySQL and integrated seamlessly into the platform. This database stores structured data related to user profiles, personality quiz responses, recommended books, and community interactions. Through careful design and optimization, we ensure real-time updates, efficient data retrieval, and seamless integration with other platform components, supporting our growth and enhancing user engagement.

### External APIs and Integrations:
In addition to our custom-built components, ReadWave Explorer integrates with external APIs and third-party services to enhance its functionality and provide additional features to our users. This includes integration with book catalog APIs to expand our book database, social media APIs for sharing recommendations, and third-party services for hosting mini-games. These integrations enrich the user experience, providing access to diverse content and fostering engagement within our community.

### Admin Panel (Custom Dashboard):
Our administrators wield powerful tools through a custom-built Admin Panel, accessible directly from our platform. This dashboard empowers them to manage content, monitor user activities, and administer the platform effectively. Integrated with our custom backend services, the Admin Panel enables seamless data management, content moderation, and system monitoring, empowering administrators to make informed decisions and drive platform growth.

### Component Diagram:
#### Class Diagram
- The User Class now includes additional attributes such as userID, username, email, and preferences, facilitating personalized experiences for our users.
- The Book Class represents individual books with attributes such as bookID, title, author, and genre, enabling efficient organization and retrieval of book data.
- The PersonalityQuestion Class contains attributes for personality quiz questions and options, enriching our user engagement features.
- The Recommendation Class stores personalized recommendations for users, enhancing their exploration of our platform's offerings.
- Relationships between classes are carefully defined to ensure seamless interactions and data management.
