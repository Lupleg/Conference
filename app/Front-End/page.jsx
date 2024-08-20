import Publications from "@/components/LastUpdated/Publications";
import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";

import { FaCheck } from "react-icons/fa";

export default function FrontendDevelopment() {
  return (
    <div className="flex flex-col items-center container px-4 mx-auto ">
      <h1 className="text-green-700 text-center text-4xl md:text-5xl my-8 lg:text-5xl font-bold tracking-tight ">
        Frontend Development
      </h1>
      <img
        src="https://tolustar.com/wp-content/uploads/2020/02/Front-end-Development.jpeg"
        width={650}
        height={400}
        className="rounded-lg shadow-lg shadow-gray-400  mb-6"
      />

      <div className="max-w-2xl ml-4 flex-1 text-md md:text-lg lg:text-lg">
        <p className="text-gray-800 ">
          This mentorship program is designed to guide aspiring frontend
          developers through a comprehensive learning path over three months.
          The program covers fundamental and advanced topics, practical
          projects, and career guidance to help mentees become proficient in
          frontend development.
        </p>
        <h2 className="text-green-700 text-lg md:text-xl lg:text-xl font-mono font-bold my-4">
          Program Structure:
        </h2>
        <p className="text-gray-800 ">
          The program is divided into three core months, each focusing on a
          specific key part to help you become a successful frontend developer:
        </p>

        <ul className="px-6 py-2 ml-4   list-disc ">
          <li>
            {" "}
            <span className="font-bold">Month 1:</span> Fundamentals and Basic
            Interactivity
          </li>
          <li>
            <span className="font-bold">Month 2:</span> Advanced Concepts and
            Frameworks (React, Vue, Angular)
          </li>
          <li>
            <span className="font-bold">Month 3:</span> Advanced React and
            Professional Development
          </li>
        </ul>

        <h2 className="text-green-600 ml-2  border-l-4 border-orange-500 p-1 bg-orange-100 font-sans text-xl font-bold my-4">
          Weekly Breakdown:
        </h2>
        <ul className="px-6 py-2 list-none  leading-7 text-gray-800">
          <li>
            <span className="font-bold text-md md:text-lg lg:text-xl">
              🛠️ Workshops:
            </span>{" "}
            Interactive sessions led by the mentor covering key topics relevant
            to the program theme for that month. (e.g., Hackathons, HTML/CSS
            Basics, JavaScript Fundamentals, React Hooks and Context API)
          </li>
          <li>
            <span className="font-bold text-md md:text-lg lg:text-xl">
              💬 Group Discussions:{" "}
            </span>{" "}
            Opportunities to connect with fellow program participants, share
            experiences, and ask questions in a supportive environment.
          </li>
          <li>
            <span className="font-bold text-md md:text-lg lg:text-xl">
              🎤 Guest Speaker Sessions:{" "}
            </span>{" "}
            Learn from established freelancers and industry experts who will
            share their insights and practical advice.
          </li>
          <li>
            <span className="font-bold text-md md:text-lg lg:text-xl">
              ✅ Action Steps:{" "}
            </span>{" "}
            Weekly takeaways to ensure you're implementing the learnings and
            making progress towards your goals.
          </li>
          <li>
            <span className="font-bold text-md md:text-lg lg:text-xl">
              👥 One-on-One Coaching:{" "}
            </span>
            Regular individual coaching sessions with the mentor to address your
            specific needs and challenges, and develop a personalized action
            plan.
          </li>
        </ul>

        <ul className="px-6 py-2 list-none  leading-7 text-gray-800 border border-white shadow-lg rounded-lg my-4">
          <li className="flex items-start py-2">
            <span className="text-green-950">
              ✅ Week 1-2: HTML and CSS Basics
            </span>
          </li>
          <li className="flex items-start py-2">
            <span className="text-green-950">
              ✅ Week 3-4: JavaScript Fundamentals
            </span>
          </li>
          <li className="flex text-green-950 py-2">
            <span className="text-green-950">
              ✅ Week 5-6: DOM Manipulation and Event Handling
            </span>
          </li>
          <li className="flex items-start py-2">
            <span className="text-green-950">
              ✅ Week 7-8: Introduction to React
            </span>
          </li>
          <li className="flex items-start py-2">
            <span className="text-green-950">
              ✅ Week 9-10: Advanced React Concepts and Project Work
            </span>
          </li>
          <li className="flex items-start py-2">
            <span className="text-green-950">
              ✅ Week 11-12: Build Tools and Deployment
            </span>
          </li>
        </ul>

        <h2 className="text-black text-lg md:text-xl lg:text-xl    font-mono font-bold p-1 mb-2 ">
          <span className="bg-green-100 rounded-md p-1 px-2 my-6">
            {" "}
            Month 1:{" "}
          </span>
          ⛲️ Foundations
        </h2>
        <p className="text-gray-800 ">
          This month is all about setting yourself up for success as a frontend
          developer. You'll solidify your understanding of HTML and CSS, learn
          the basics of JavaScript, and start building interactive web pages.
        </p>
        <h2 className="text-black font-mono  font-bold my-2 mt-4">
          <span className="bg-orange-100 rounded-md p-2 ">Week 1-2:</span> HTML
          and CSS Basics
        </h2>
        <ul className="py-4 list-disc ml-6 text-gray-800">
          <li>HTML structure, semantic elements, forms</li>
          <li>CSS selectors, box model, flexbox, grid</li>
          <li>Responsive design principles</li>
          <li>Project: Personal portfolio website</li>
        </ul>

        <h2 className="text-black  font-mono font-bold mt-4 my-2">
          <span className="bg-orange-100  rounded-md p-2 ">Week 3-4:</span>{" "}
          JavaScript Fundamentals
        </h2>
        <ul className="py-4 ml-6 list-disc   text-gray-800">
          <li>Variables, data types, operators</li>
          <li>Functions, conditionals, loops</li>
          <li>DOM manipulation, event listeners</li>
          <li>Project: Interactive web elements</li>
        </ul>

        <h2 className="text-black  text-lg md:text-xl lg:text-xl  font-mono font-bold p-1 mb-2 ">
          <span className="bg-green-100  rounded-md p-1 my-4"> Month 2: </span>{" "}
          Advanced concepts and Frameworks{" "}
        </h2>
        <h2 className="text-black   font-mono font-bold my-2 mt-4">
          <span className="bg-orange-100 rounded-md p-1 ">Week 5-6:</span>{" "}
          Advanced JavaScript and ES6+
        </h2>
        <ul className="py-4 ml-8 list-disc  text-gray-800">
          <li>Arrow functions, destructuring, spread operator</li>
          <li>Classes, modules, promises, async/await</li>
          <li>Key: Fetch API, async data handling</li>
          <li>Project: Weather app using APIs</li>
        </ul>

        <h2 className="text-black  font-mono font-bold my-2 mt-4">
          <span className="bg-orange-100 rounded-md p-1 ">Week 7-8:</span>
          Introduction to React
        </h2>
        <ul className="py-4 ml-8 list-disc text-gray-800">
          <li>React fundamentals (components, props, state)</li>
          <li>Hooks (useState, useEffect)</li>
          <li>Routing with React Router</li>
          <li>State management with Context API</li>
          <li>Project: TODO list app</li>
        </ul>

        <h2 className="text-black text-lg md:text-xl lg:text-xl font-mono font-bold my-6">
          <span className="bg-green-100  rounded-md p-1 my-2 mt-4">
            {" "}
            Month 3:{" "}
          </span>{" "}
          Advanced React and Professional Development
        </h2>
        <h2 className="text-black font-mono font-bold my-2 mt-4">
          <span className="bg-orange-100 rounded-md p-1 ">Week 9-10:</span>{" "}
          Advanced React and State Management
        </h2>
        <ul className="py-4 ml-8 list-disc  text-gray-800">
          <li>Performance optimization techniques</li>
          <li>Redux fundamentals and integration with React</li>
          <li>Testing React applications (Jest, React Testing Library)</li>
          <li>Project: Ecommerce Website</li>
        </ul>

        <h2 className="text-black font-mono font-bold my-2 mt-4">
          <span className="bg-orange-100 rounded-md p-1 ">Week 11-12:</span>{" "}
          Build Tools and Deployment
        </h2>
        <ul className="py-4 ml-8 list-disc text-gray-800">
          <li>Webpack, Babel, ESLint</li>
          <li>Version control with Git and GitHub</li>
          <li>CI/CD pipelines, deployment strategies</li>
          <li>Hosting options (Netlify, Vercel)</li>
          <li>Final project: Full-fledged web application</li>
        </ul>

        <h2 className="text-black border-l-4 border-green-600 p-1 bg-green-100 text-lg md:text-xl lg:text-xl font-mono font-bold my-4">
          Additional Resources:
        </h2>
        <p className="text-gray-800   ">
          This mentorship program aims to provide a comprehensive foundation in
          frontend development, focusing on practical skills and
          industry-relevant technologies. The structure allows for flexibility
          to adapt to the mentee's pace and learning style while ensuring steady
          progress towards becoming a proficient frontend developer. Would you
          like me to elaborate on any specific part of this mentorship plan?
        </p>

        <Publications />
      </div>
    </div>
  );
}
