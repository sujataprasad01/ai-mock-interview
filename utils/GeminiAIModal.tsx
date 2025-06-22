// import {
//   GoogleGenAI,
// } from '@google/genai';

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
//   });
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     responseMimeType: 'text/plain',
//   };
//   const model = 'gemini-2.5-pro';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `Job Position: Full Stack Developer, Job Description: React, Nodejs MySql, Years of Experience: 6, Depends on this information please give me 5 Interview question with Answered in Json Format, Give Question and Answered as field in JSON
// `,
//         },
//       ],
//     },
//     {
//       role: 'model',
//       parts: [
//         {
//           text: `**Deconstructing the Request**

// I'm currently dissecting the user's request, focusing on the core technologies and experience level. I've successfully identified the key elements: React, Node.js, MySQL, and six years of experience. Next, I'll identify the user's ultimate task to understand the precise nature of the work desired.


// **Refining Question Categories**

// I'm now refining the brainstorming categories for questions, focusing on React, Node.js, and MySQL. It's becoming clearer that the experience level requires questions about complex scenarios, architectural choices, and performance optimization. For React, I'm thinking about questions on state management, hooks, and performance. Node.js should cover event loop, asynchronous programming, and middleware. Finally, MySQL should focus on schema design, indexing, and query optimization.


// **Prioritizing Question Focus**

// I've shifted my focus to prioritizing the question categories.  For React, I'm thinking about challenging state management scenarios and performance bottlenecks. Node.js questions will delve into asynchronous patterns and potential performance issues. MySQL questions will focus on database design, optimization, and scaling. I am now working on formulating specific questions within these categories to ensure they challenge the experience of a 6-year developer.


// **Developing Question Ideas**

// I'm now generating specific interview questions based on the brainstorming. My approach is to craft questions that go beyond basic definitions, focusing instead on real-world scenarios and problem-solving. For React, I'm thinking about challenging scenarios involving state management and performance. For Node.js, I'll focus on asynchronous programming and potential performance bottlenecks. Finally, I'm developing MySQL questions around database design, optimization, and scaling for a 6-year experience level.


// **Crafting the Questions**

// I'm now deeply immersed in question formulation. I've selected a set of topics and scenarios aligned with a 6-year developer's experience, focusing on React state management, Node.js performance, MySQL optimization, and full-stack architecture. For React, I'm thinking of a question around complex state management solutions and trade-offs. For Node.js, a CPU-intensive task handling question is coming together. A MySQL query optimization scenario is also on the cards, along with a full-stack JWT authentication scenario.


// **Developing and Finalizing**

// I'm now putting the finishing touches on the questions and answers.  I'm making sure each question assesses a realistic scenario and goes deep enough for a 6-year experience level.  The answer to the "complex state" question needs to include the pros and cons of Context API, \`useReducer\`, and libraries like Redux and Zustand. For the Node.js CPU-intensive task, I'm elaborating on the explanation of worker threads. I am confirming the best SQL query optimization and JWT flow in the answers as well. Finally, the question on microservices will discuss scalability, team structure, and deployment.


// **Developing the Final Structure**

// I'm structuring the questions and their answers, ensuring a clear and concise JSON format. Each question-answer pair reflects the expected depth of a 6-year developer. The goal is a comprehensive assessment of their knowledge in React, Node.js, MySQL, and full-stack architecture. I will provide examples on the JSON structure.

// \`\`\`json
// [
//   {
//     "question": "In a large-scale React application, how would you manage complex global state, and what are the trade-offs between using Context API with \`useReducer\` compared to libraries like Redux or Zustand?",
//     "answer": "Answer..."
//   },
//   {
//     "question": "How would you handle a long-running, CPU-intensive task in a Node.js application without blocking the event loop? Discuss the use of worker threads, job queues, and associated performance considerations.",
//     "answer": "Answer..."
//   },
//   {
//     "question": "Describe the process you would follow to diagnose and optimize a slow-running MySQL query. Explain the use of \`EXPLAIN\`, indexing strategies, and query refactoring techniques.",
//     "answer": "Answer..."
//   },
//   {
//     "question": "Design the architecture for a JWT-based authentication system across a React, Node.js, and MySQL stack, detailing the login, token generation, storage, and validation flows. Include security best practices.",
//     "answer": "Answer..."
//   },
//   {
//     "question": "When would you choose a microservices architecture over a monolith for a project using React, Node.js, and MySQL? Discuss the key challenges and benefits of each approach concerning scalability, team structure, and deployment complexity.",
//     "answer": "Answer..."
//   }
// ]
// \`\`\`


// **Formulating Final Question Drafts**

// I'm now finalizing the answers and formatting the JSON output, adding security best practices where applicable. The questions cover complex state management with React, Node.js worker threads and CPU-intensive tasks, MySQL query optimization, full-stack JWT authentication, and the decision to use microservices. I'm confident that the questions are now tailored to a six-year experience level.


// `,
//         },
//         {
//           text: `\`\`\`json
// [
//   {
//     "question": "In a large-scale React application, how would you manage complex global state? Discuss the pros and cons of using the built-in Context API with useReducer versus a dedicated library like Redux or Zustand.",
//     "answer": "For a developer with 6 years of experience, a nuanced answer is expected.\\n\\n**Context API + useReducer:**\\n*   **Pros:** It's built into React, so no external dependencies are needed. It's great for state that doesn't change very frequently and is perfect for medium-complexity scenarios like theme management or user authentication status. The \`useReducer\` hook helps manage complex state logic in a predictable way, similar to Redux.\\n*   **Cons:** The primary drawback is performance. Any component consuming the context will re-render whenever *any* value in the context changes, even if the specific piece of data it cares about hasn't. This can lead to significant performance issues in large applications with frequently updating state. It also lacks the robust middleware and dev tools that come with dedicated libraries.\\n\\n**Redux/Zustand (Dedicated Libraries):**\\n*   **Pros:** These libraries are built for performance. They use specific selectors (e.g., \`useSelector\` in Redux) that ensure components only re-render when the exact slice of state they subscribe to changes. Redux offers a powerful ecosystem with middleware for handling side effects (Thunk/Saga) and excellent Redux DevTools for time-travel debugging. Zustand offers a simpler, less boilerplate approach while still providing high performance.\\n*   **Cons:** They add another dependency to the project. Redux, in particular, is known for its boilerplate and learning curve, though this has been greatly reduced by Redux Toolkit.\\n\\n**Conclusion for a Senior Dev:** For a large-scale application, I would typically start with Context for simple, low-frequency state. However, for complex, high-frequency global state (like application data, complex form states, etc.), I would strongly advocate for a dedicated library like Redux Toolkit or Zustand to prevent performance bottlenecks and maintain a scalable and debuggable state management architecture."
//   },
//   {
//     "question": "Imagine a Node.js API endpoint that needs to perform a long-running, CPU-intensive task, like processing a large image or generating a complex report. How would you handle this without blocking the event loop and making the entire server unresponsive?",
//     "answer": "Blocking the event loop is a critical anti-pattern in Node.js. With 6 years of experience, I've encountered this and would implement one of two primary strategies:\\n\\n**1. Worker Threads (for in-process parallelism):**\\n*   **How it Works:** The \`worker_threads\` module, native to Node.js, allows you to run JavaScript code in a separate thread. I would create a main endpoint that receives the request and immediately offloads the CPU-intensive task to a worker thread. The main thread remains free to handle other incoming requests.\\n*   **Communication:** The main thread and worker thread communicate via a messaging channel. The main thread would send the necessary data (e.g., image path) to the worker, and the worker would send a message back upon completion (or failure).\\n*   **When to Use:** This is ideal for tasks that are CPU-bound (not I/O-bound) and need to be handled within the same application process. It's a great solution for improving performance without the complexity of a separate service.\\n\\n**2. Job/Message Queues (for a more robust, distributed approach):**\\n*   **How it Works:** This is a more scalable and resilient architectural pattern. The API endpoint's role would be to simply accept the request and push a 'job' onto a message queue (like RabbitMQ, SQS, or a Redis-based queue like BullMQ). A separate pool of 'worker' services would listen to this queue, pick up jobs, and process them independently of the API server.\\n*   **Benefits:** This decouples the task from the initial HTTP request, making the system highly scalable (you can add more worker services as needed) and resilient (if a worker fails, the job can be retried). The user gets an immediate response from the API (e.g., 'Your report is being generated and will be available shortly').\\n*   **When to Use:** This is the preferred method for very long-running tasks, mission-critical operations, or in a microservices architecture where you want to distribute the load effectively."
//   },
//   {
//     "question": "You've been tasked with diagnosing and optimizing a slow-running MySQL query in a production environment. Describe your step-by-step process.",
//     "answer": "Diagnosing a slow query requires a systematic approach. Here's my process:\\n\\n**Step 1: Identify the Slow Query.**\\nFirst, I'd use the MySQL Slow Query Log or a performance monitoring tool like Percona Monitoring and Management (PMM) or New Relic to identify the exact query that is causing the bottleneck and understand its frequency and impact.\\n\\n**Step 2: Analyze the Query Execution Plan with \`EXPLAIN\`.**\\nThis is the most critical step. I would run \`EXPLAIN SELECT ...\` on the problematic query. I'd pay close attention to:\\n*   \`type\`: I want to see \`ref\`, \`eq_ref\`, or \`range\`. If I see \`ALL\` (a full table scan), it's a major red flag.\\n*   \`key\`: This shows which index is being used. If it's \`NULL\`, no index is being used, which is often the primary problem.\\n*   \`rows\`: This gives an estimate of how many rows MySQL must scan. A high number here is an indicator of inefficiency.\\n*   \`Extra\`: Look for 'Using filesort' or 'Using temporary', which indicates that MySQL has to perform extra work, often due to a lack of proper indexing for \`ORDER BY\` or \`GROUP BY\` clauses.\\n\\n**Step 3: Evaluate and Optimize Indexes.**\\nBased on the \`EXPLAIN\` output, my primary action is usually related to indexing.\\n*   **Add Missing Indexes:** If the \`WHERE\` clause, \`JOIN\` conditions, or \`ORDER BY\` clauses are on un-indexed columns, I would add appropriate indexes.\\n*   **Use Composite Indexes:** For queries filtering on multiple columns, a composite (multi-column) index can be far more effective than multiple single-column indexes.\\n*   **Check Index Cardinality:** Ensure that the indexed columns have high cardinality (a high number of unique values), as indexes on low-cardinality columns (like a 'gender' column) are often less effective.\\n\\n**Step 4: Refactor the Query Itself.**\\nIf indexing isn't enough, I would look at rewriting the query. This could involve:\\n*   Breaking down a complex \`JOIN\` into multiple, simpler queries.\\n*   Avoiding \`SELECT *\` and only selecting the columns the application actually needs.\\n*   Restructuring subqueries or replacing them with \`JOIN\`s where possible.\\n\\n**Step 5: Check Application-Level Logic.**\\nSometimes the problem isn't a single query, but an N+1 query problem, where the application is making many small queries in a loop instead of one larger, more efficient query. I would analyze the application code that executes the query to ensure it's fetching data efficiently."
//   },
//   {
//     "question": "Describe the complete, end-to-end flow of a secure JWT-based authentication system for a React/Node.js application. Where is the token stored on the client, and what are the security implications of that choice?",
//     "answer": "This is a fundamental pattern for a full-stack developer. Here is the end-to-end flow:\\n\\n**1. User Login:**\\n*   The user submits their credentials (e.g., email/password) from a React login form to a Node.js API endpoint (e.g., \`/api/auth/login\`).\\n\\n**2. Server-Side Validation & Token Generation:**\\n*   The Node.js server receives the credentials.\\n*   It hashes the provided password and compares it to the stored hash in the MySQL database for that user.\\n*   If the credentials are valid, the server generates a JSON Web Token (JWT). This token's payload contains non-sensitive user information (like \`userId\`, \`role\`) and an expiration time (\`exp\`).\\n*   The token is signed on the server using a secret key (stored securely as an environment variable) to prevent tampering.\\n\\n**3. Sending the Token to the Client:**\\n*   The server sends the signed JWT back to the React client in the response body of the login request.\\n\\n**4. Client-Side Token Storage:**\\n*   The React application receives the JWT and must store it for use in subsequent requests. This is a critical decision with security implications:\\n    *   **localStorage/sessionStorage:** \\n        *   **Pros:** Easy to implement.\\n        *   **Cons:** Vulnerable to Cross-Site Scripting (XSS) attacks. If a malicious script runs on your site, it can read the token from \`localStorage\` and impersonate the user.\\n    *   **HTTP-Only Cookie:**\\n        *   **Pros:** Much more secure against XSS because JavaScript cannot access it. The browser automatically sends the cookie with every request to the server.\\n        *   **Cons:** Vulnerable to Cross-Site Request Forgery (CSRF) attacks. This requires implementing CSRF protection (e.g., using a synchronized token pattern).\\n*   **My Recommendation:** For a senior dev, the answer is an HTTP-Only cookie for the JWT, combined with a robust CSRF token implementation. This provides the best balance of security.\\n\\n**5. Authenticated Requests:**\\n*   For every subsequent request to a protected API route, the React client (or browser automatically, if using cookies) includes the JWT in the \`Authorization\` header (e.g., \`Authorization: Bearer <token>\`).\\n\\n**6. Server-Side Token Verification:**\\n*   The Node.js server has middleware on all protected routes. This middleware extracts the JWT from the request header.\\n*   It verifies the token's signature using the same secret key. If the signature is invalid, it means the token has been tampered with, and the request is rejected (401 Unauthorized).\\n*   It also checks the token's expiration date. If expired, the request is rejected.\\n*   If the token is valid, the request is allowed to proceed to the controller, and user information from the token's payload can be used (e.g., attaching \`req.user\`)."
//   },
//   {
//     "question": "You are starting a new project with React, Node.js, and MySQL. When would you advocate for a Monolith architecture versus a Microservices architecture? What are the key database-related challenges you anticipate with Microservices?",
//     "answer": "The choice between a Monolith and Microservices is a major architectural decision that depends on business and technical context, not just trends.\\n\\n**When to Advocate for a Monolith:**\\n*   **Early-Stage Projects/MVPs:** A monolith is much faster to develop and deploy initially. There's less operational overhead, no network latency between components, and simpler debugging and testing.\\n*   **Small Teams:** When the entire team can fit 'in one room' and has a deep understanding of the entire codebase, a monolith is easier to manage.\\n*   **Simple, Well-Defined Domain:** If the application's domain is not overly complex and is unlikely to be broken down into highly independent business capabilities, a monolith is a perfectly valid and efficient choice.\\n\\n**When to Advocate for Microservices:**\\n*   **Large, Complex Applications:** When the application can be broken down into distinct, independent business domains (e.g., user management, order processing, inventory, notifications).\\n*   **Large or Multiple Teams:** Allows different teams to work independently on their respective services, using the tech stack best suited for that service. This enables parallel development and deployment.\\n*   **Scalability Requirements:** You can scale individual services independently. If the 'product-search' service is getting hammered, you can scale just that service without touching the 'user-profile' service.\\n*   **High Fault Tolerance:** An issue in one service (if designed correctly) won't bring down the entire application.\\n\\n**Key Database-Related Challenges with Microservices:**\\nThis is where experience with the full stack, including the database, is crucial.\\n\\n**1. Data Decentralization and Consistency:**\\n*   **The Challenge:** The core principle of microservices is 'one database per service'. This means the User service has its database, and the Order service has its. How do you handle a transaction that needs to span both? For example, creating an order requires validating that the user exists.\\n*   **The Solution:** You can't use traditional ACID transactions across databases. Instead, you must use patterns like the **Saga Pattern**. This involves a sequence of local transactions. If one step fails, a series of compensating transactions are run to undo the preceding work, ensuring eventual consistency. This adds significant complexity.\\n\\n**2. Querying Data Across Services:**\\n*   **The Challenge:** How do you get a user's name and all their orders in a single view when that data lives in two separate databases owned by two different services?\\n*   **The Solution:** You cannot simply \`JOIN\` tables. Common solutions include:\\n    *   **API Composition:** The front-end or an API Gateway makes separate calls to the User service and the Order service and combines the data.\\n    *   **CQRS (Command Query Responsibility Segregation):** Maintain a separate, denormalized read-database that is optimized for queries. Services publish events when their data changes, and a listener updates this read-model. This provides fast reads but introduces eventual consistency and more infrastructure."
//   }
// ]
// \`\`\``,
//         },
//       ],
//     },
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export const chatSession = model.startChat({
  generationConfig,
  safetySettings,
});

