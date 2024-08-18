import Publications from "@/components/LastUpdated/Publications";
import React from "react";
import { LuListStart } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";

export default function FrontendDevelopment() {
  return (
    <div className="flex flex-col items-center container px-4 mx-auto sm:text-xs md:text-sm lg:text-md">
      <h1 className="text-green-700 text-center text-4xl font-bold tracking-tight md:text-5xl mt-10 mb-12">
        Frontend Development
      </h1>
      <img
        src="https://tolustar.com/wp-content/uploads/2020/02/Front-end-Development.jpeg"
        width={700}
        height={400}
        className="rounded-lg shadow-lg shadow-gray-400  mb-6"
      />

      <div className="max-w-2xl ml-4 flex-1 [&amp;&gt;p]:mb-12 [&amp;&gt;h2]:text-xl [&amp;&gt;h2]:font-bold">
        <p className="text-gray-800 text-lg leading-7">
          This mentorship program is designed to guide aspiring frontend
          developers through a comprehensive learning path over three months.
          The program covers fundamental and advanced topics, practical
          projects, and career guidance to help mentees become proficient in
          frontend development.
        </p>
        <h2 className="text-green-700 text-xl font-mono font-bold my-6">
          Program Structure:
        </h2>
        <p className="text-gray-800 text-lg leading-7">
          The program is divided into three core months, each focusing on a
          specific key part to help you become a successful frontend developer:
        </p>
        <ul className="px-6 py-2 text-lg list-disc ">
          <li>Month 1: Fundamentals and Basic Interactivity</li>
          <li>
            Month 2: Advanced Concepts and Frameworks (React, Vue, Angular)
          </li>
          <li>Month 3: Advanced React and Professional Development</li>
        </ul>

        <h2 className="text-green-700 font-mono text-xl font-bold my-6">
          Weekly Breakdown:
        </h2>
        <ul className="px-6 py-2 list-none text-lg leading-7 text-gray-800">
          <li>
            <LuListStart className="inline text-2xl mr-2 text-green-600" />
            Workshops: Interactive sessions led by the mentor covering key
            topics relevant to the program theme for that month. (e.g.,
            Hackathons, HTML/CSS Basics, JavaScript Fundamentals, React Hooks
            and Context API)
          </li>
          <li>
            <LuListStart className="inline mr-2 text-2xl text-green-600" />
            Group Discussions: Opportunities to connect with fellow program
            participants, share experiences, and ask questions in a supportive
            environment.
          </li>
          <li>
            <LuListStart className="inline mr-2 text-2xl text-green-600" />
            Guest Speaker Sessions: Learn from established freelancers and
            industry experts who will share their insights and practical advice.
          </li>
          <li>
            <LuListStart className="inline mr-2 text-2xl text-green-600" />
            Action Steps: Weekly takeaways to ensure you're implementing the
            learnings and making progress towards your goals.
          </li>
          <li>
            <LuListStart className="inline mr-2 text-2xl text-green-600" />
            One-on-One Coaching: Regular individual coaching sessions with the
            mentor to address your specific needs and challenges, and develop a
            personalized action plan.
          </li>
        </ul>

        <ul className="px-6 py-2 list-none text-lg leading-7 text-gray-800 border border-white shadow-lg rounded-lg my-4">
          <li className="flex items-start py-2">
            <FaCheck className="inline text-2xl mr-2 text-green-600" />
            <span className="text-orange-800">
              Week 1-2: HTML and CSS Basics
            </span>
          </li>
          <li className="flex items-start py-2">
            <FaCheck className="inline text-2xl mr-2 text-green-600" />
            <span className="text-orange-800">
              Week 3-4: JavaScript Fundamentals
            </span>
          </li>
          <li className="flex items-start py-2">
            <FaCheck className="inline text-2xl mr-2 text-green-600" />
            <span className="text-orange-800">
              Week 5-6: DOM Manipulation and Event Handling
            </span>
          </li>
          <li className="flex items-start py-2">
            <FaCheck className="inline text-2xl mr-2 text-green-600" />
            <span className="text-orange-800">
              Week 7-8: Introduction to React
            </span>
          </li>
          <li className="flex items-start py-2">
            <FaCheck className="inline text-2xl mr-2 text-green-600" />
            <span className="text-orange-800">
              Week 9-10: Advanced React Concepts and Project Work
            </span>
          </li>
          <li className="flex items-start py-2">
            <FaCheck className="inline text-2xl mr-2 text-green-600" />
            <span className="text-orange-800">
              Week 11-12: Build Tools and Deployment
            </span>
          </li>
        </ul>

        <h2 className="text-green-700 text-xl   font-mono font-bold p-1 mb-2 ">
          <span className="bg-green-100 rounded-md px-2 my-6"> Month 1: </span>
          ⛲️ Foundations
        </h2>
        <p className="text-gray-800 text-lg leading-7">
          This month is all about setting yourself up for success as a frontend
          developer. You'll solidify your understanding of HTML and CSS, learn
          the basics of JavaScript, and start building interactive web pages.
        </p>
        <h2 className="text-green-700 font-mono text-lg font-bold my-6">
          <span className="bg-orange-100 rounded-md p-1 ">Week 1-2:</span> HTML
          and CSS Basics
        </h2>
        <ul className="py-4 list-disc leading-7 text-lg ml-4 text-gray-800">
          <li>HTML structure, semantic elements, forms</li>
          <li>CSS selectors, box model, flexbox, grid</li>
          <li>Responsive design principles</li>
          <li>Project: Personal portfolio website</li>
        </ul>

        <h2 className="text-green-700 text-lg font-mono font-bold my-6">
          <span className="bg-orange-100  rounded-md p-1 ">Week 3-4:</span>{" "}
          JavaScript Fundamentals
        </h2>
        <ul className="py-6 list-disc text-lg  text-gray-800">
          <li>Variables, data types, operators</li>
          <li>Functions, conditionals, loops</li>
          <li>DOM manipulation, event listeners</li>
          <li>Project: Interactive web elements</li>
        </ul>

        <h2 className="text-green-700 text-xl  font-mono font-bold p-1 mb-2 ">
          <span className="bg-green-100 text-xl rounded-md px-1 my-6">
            {" "}
            Month 2:{" "}
          </span>
          Advanced concepts and Frameworks{" "}
        </h2>
        <h2 className="text-green-700  text-lg font-mono font-bold my-6">
          <span className="bg-orange-100 rounded-md p-1 ">Week 5-6:</span>{" "}
          Advanced JavaScript and ES6+
        </h2>
        <ul className="py-6 list-disc text-lg text-gray-800">
          <li>Arrow functions, destructuring, spread operator</li>
          <li>Classes, modules, promises, async/await</li>
          <li>Key: Fetch API, async data handling</li>
          <li>Project: Weather app using APIs</li>
        </ul>

        <h2 className="text-green-700 text-lg font-mono font-bold my-6">
          <span className="bg-orange-100 rounded-md p-1 ">Week 7-8:</span>
          Introduction to React
        </h2>
        <ul className="py-6 list-disc text-lg text-gray-800">
          <li>React fundamentals (components, props, state)</li>
          <li>Hooks (useState, useEffect)</li>
          <li>Routing with React Router</li>
          <li>State management with Context API</li>
          <li>Project: TODO list app</li>
        </ul>

        <h2 className="text-green-700 text-xl font-mono font-bold my-6">
          <span className="bg-green-100 text-xl rounded-md px-2 my-6">
            {" "}
            Month 3:{" "}
          </span>{" "}
          Advanced React and Professional Development
        </h2>
        <h2 className="text-green-700 text-lg font-mono font-bold my-6">
          <span className="bg-orange-100 rounded-md p-1 ">Week 9-10:</span>{" "}
          Advanced React and State Management
        </h2>
        <ul className="py-6 list-disc text-lg text-gray-800">
          <li>Performance optimization techniques</li>
          <li>Redux fundamentals and integration with React</li>
          <li>Testing React applications (Jest, React Testing Library)</li>
          <li>Project: Ecommerce Website</li>
        </ul>

        <h2 className="text-green-700 text-lg font-mono font-bold my-6">
          <span className="bg-orange-100 rounded-md p-1 ">Week 11-12:</span>{" "}
          Build Tools and Deployment
        </h2>
        <ul className="py-6 text-lg list-disc text-gray-800">
          <li>Webpack, Babel, ESLint</li>
          <li>Version control with Git and GitHub</li>
          <li>CI/CD pipelines, deployment strategies</li>
          <li>Hosting options (Netlify, Vercel)</li>
          <li>Final project: Full-fledged web application</li>
        </ul>

        <h2 className="text-green-700 text-xl font-mono font-bold my-6">
          Additional Resources:
        </h2>
        <p className="text-gray-800 text-lg leading-7">
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
