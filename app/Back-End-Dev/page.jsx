import Publications from "@/components/LastUpdated/Publications";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { BsCheck2Square } from "react-icons/bs";

export default function BackendDevelopment() {
  return (
    <div className=" flex flex-col items-center container px-4 mx-auto">
      <h1 className="bg-gradient-to-br from-red-500 to-purple-600 text-transparent bg-clip-text shadow-lg text-center text-2xl  md:text-2xl lg:text-4xl font-bold tracking-tight  mt-10 mb-12 p-4 rounded-lg">
        Backend Development
      </h1>

      <div className="max-w-2xl ml-4 flex-1">
        <p className="text-md md:text-lg lg:text-lg text-gray-700 leading-7 mb-8">
          This mentorship program is designed to guide aspiring backend
          developers through a comprehensive learning path over three months.
          The program covers fundamental and advanced topics, practical
          projects, and career guidance to help mentees become proficient in
          backend development.
        </p>
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220612001912/Back-End-Developer-Roadmap-2022.jpg"
          alt="Advanced Backend"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mb-4"
        />

        <h2 className="font-mono ml-2 mt-2  font-bold mb-4 text-lg md:text-xl lg:text-xl text-green-700 flex items-center">
          📋 Program Structure:
        </h2>
        <p className="text-md md:text-lg ml-2 lg:text-lg text-gray-700">
          The program is divided into three core months, each focusing on a
          specific key part to help you become a successful backend developer:
        </p>
        <ul className=" list-disc  ml-8 py-2   md:text-lg lg:text-lg  text-md  text-gray-700">
          <li className=" items-start ">
            <span className="font-bold text-md ">Month 1:</span> Fundamentals
            and Basic Web Development
          </li>
          <li className=" items-start ">
            <span className="font-bold text-md  ">Month 2:</span> Backend
            Frameworks and Databases
          </li>
          <li className=" items-start mb-2">
            <span className="font-bold text-md ">Month 3:</span> Advanced Topics
            and Project
          </li>
        </ul>

        <h2 className="font-mono ml-1 font-bold text-lg md:text-lg lg:text-xl text-green-700 flex items-center mb-2">
          📅 Weekly Breakdown:
        </h2>
        <ul className="px-4 py-2 list-none text-md md:text-lg lg:text-lg text-gray-700 ">
          {" "}
          <li className="pb-4  ">
            {" "}
            <span className="font-bold text-md md:text-lg lg:text-xl">
              🛠️ Workshops:
            </span>{" "}
            Interactive sessions led by the mentor covering key topics relevant
            to the program theme for that month. (e.g., Hackathons, APIs,
            RESTful services, Database operations and optimization,
            Containerization with Docker)
          </li>
          <li className="pb-4 ">
            {" "}
            <span className="font-bold text-md md:text-lg lg:text-xl">
              💬 Group Discussions:{" "}
            </span>{" "}
            Opportunities to connect with fellow program participants, share
            experiences, and ask questions in a supportive environment.
          </li>
          <li className="pb-4 ">
            {" "}
            <span className="font-bold text-md md:text-lg lg:text-xl">
              🎤 Guest Speaker Sessions:{" "}
            </span>
            Learn from established freelancers and industry experts who will
            share their insights and practical.
          </li>
          <li className="pb-4 ">
            {" "}
            <span className="font-bold text-md md:text-lg lg:text-xl">
              ✅ Action Steps:{" "}
            </span>
            Weekly takeaways to ensure you're implementing the learnings and
            making progress towards your goals.
          </li>
          <li className="pb-4 ">
            {" "}
            <span className="font-bold text-md md:text-lg lg:text-xl">
              👥 One-on-One Coaching:{" "}
            </span>
            Regular individual coaching sessions with the mentor to address your
            specific needs and challenges, and develop a personalized action
            plan.
          </li>
        </ul>

        <h2 className="font-mono font-bold border-l-4 border-green-800 p-2 bg-green-100  my-4 text-lg lg:text-xl md:text-xl">
          <span className=" p-2 mb-2  rounded-md px-2 ">Month 1:</span>{" "}
          Foundational and basics of web development
        </h2>
        <p className="text-md md:text-lg lg:text-lg leading-7 text-gray-700">
          This month is all about setting yourself up for success as a backend
          developer. You'll learn the core concepts of programming, version
          control, and basic web development technologies to build a strong
          foundation for the rest of the program.
        </p>
        <h3 className="font-mono font-bold  my-4 border-l-4 border-orange-600 p-1 bg-orange-100  text-md lg:text-xl md:text-xl  text-black flex items-center">
          <span className="  p-2 mr-1 rounded-md "> Week 1-2: </span>{" "}
          Programming Fundamentals
        </h3>
        <ul className="px-4 ml-4 list-disc text-md lg:text-lg text-gray-700">
          <li className=" items-start  mb-2">
            Review core programming concepts (variables, data types, control
            structures)
          </li>
          <li className=" items-start  mb-2">
            Object-Oriented Programming principles
          </li>
          <li className=" items-start  mb-2">
            Version control with Git and GitHub
          </li>
          <li className=" items-start mb-2">Command line basics</li>
        </ul>

        <h3 className="font-mono font-bold border-l-4 border-orange-600 p-1 bg-orange-100  mb-4 text-lg lg:text-xl md:text-xl text-black flex items-center">
          <span className=" p-2 rounded-md mx-1 "> Week 3-4:</span> {""} Web
          Development Basics
        </h3>
        <ul className="px-4 py-2 ml-4 list-disc text-md md:text-lg lg:text-lg text-gray-700">
          <li className=" items-center   mb-2">
            <span>HTTP protocol and request-response cycle</span>
          </li>

          <li className=" items-start  mb-2">
            Introduction to APIs and RESTful services
          </li>
          <li className="flex items-start  mb-2">
            Basic frontend technologies (HTML, CSS, JavaScript) for context
          </li>
          <li className=" items-start  mb-2">
            Introduction to backend languages (e.g., Python, Node.js, Java)
          </li>
        </ul>

        <h2 className="font-mono font-bold  border-l-4 border-green-800 p-2 bg-green-100 mb-6   my-4 text-lg lg:text-xl md:text-xl">
          <span className=" p-1 mb-2  rounded-md px-2 ">Month 2:</span> Backend
          Frameworks and Databases
        </h2>
        <h3 className="font-mono font-bold  border-l-4 border-orange-600 p-1 bg-orange-100   mb-4 text-lg lg:text-xl md:text-xl text-black flex items-center">
          <span className=" p-1 rounded-md mx-1 "> Week 5-6:</span> {""} Backend
          Framework
        </h3>
        <ul className="px-4 ml-4 py-2 list-disc text-md md:text-lg lg:text-lg text-gray-700">
          <li className=" items-start  mb-2">
            Choose a framework (e.g., Django for Python, Express for Node.js,
            Spring for Java)
          </li>
          <li className=" items-start  mb-2">Setup and project structure</li>
          <li className=" items-start mb-2">Routing and middleware</li>
          <li className=" items-start  mb-2">
            Authentication and authorization
          </li>
        </ul>

        <h3 className="font-mono font-bold mb-4  border-l-4 border-orange-600 p-1 bg-orange-100 text-lg md:text-xl lg:text-xl text-black flex items-center">
          <span className=" rounded-md mx-1 p-1 px-2 "> Week 7-8:</span>
          {"  "} Databases
        </h3>
        <ul className="px-4 ml-4 py-2 list-disc text-md md:text-lg lg:text-lg text-gray-700">
          <li className=" items-start  mb-2">
            Relational vs. Non-relational databases
          </li>
          <li className=" items-start mb-2">SQL basics and database design</li>
          <li className=" items-start  mb-2">
            ORM (Object-Relational Mapping) concepts
          </li>
          <li className=" items-start  mb-2">
            Database operations and optimization
          </li>
        </ul>

        <h2 className="font-mono font-bold  border-l-4 border-green-800 p-2 bg-green-100 mb-6 text-md md:text-xl lg:text-xl text-black flex items-center">
          <span className=" rounded-md mr-1 px-1 py-1     ">Month 3:</span>{" "}
          Advanced Topics and Project
        </h2>
        <h3 className="font-mono font-bold mb-4  border-l-4 border-orange-800 p-1 bg-orange-100 text-md md:text-xl lg:text-xl text-black flex items-center">
          <span className="rounded-md px-1 mx-1 p-1">Week 9-10:</span>
          <span>Advanced Backend Concepts</span>
        </h3>

        <ul className="px-4 ml-4 py-2 list-disc text-md md:text-lg lg:text-lg text-gray-700">
          <li className=" items-start  mb-2">API design and documentation</li>
          <li className=" items-start  mb-2">Caching strategies</li>
          <li className=" items-start  mb-2">
            Message queues and background jobs
          </li>
          <li className=" items-start  mb-2">Containerization with Docker</li>
        </ul>

        <h3 className="font-mono font-bold  border-l-4 border-orange-800 p-1 bg-orange-100  mb-4 text-lg md:text-xl lg:text-xl text-black flex items-center">
          <span className=" md:text-lg p-1  rounded-md mx-1  px-2 ">
            {" "}
            Week 11-12:
          </span>
          {"  "} Final Project and Deployment
        </h3>
        <ul className="px-4 ml-4 py-2 list-disc text-md md:text-lg lg:text-lg   text-gray-700">
          <li className=" items-start  mb-2">
            Design and implement a full-stack application
          </li>
          <li className=" items-start  mb-2">
            Server management and deployment
          </li>
          <li className=" items-start  mb-2">
            Continuous Integration/Continuous Deployment (CI/CD)
          </li>
          <li className=" items-start  mb-2">Monitoring and logging</li>
        </ul>

        <h2 className="font-mono font-bold mb-4 text-lg md:text-xl lg:text-xl  text-black  flex items-center">
          📚 Additional Resources:
        </h2>
        <p className="text-md md:text-lg border-l-4 border-green-200 lg:text-lg leading-7 text-gray-800  p-4 ">
          This program is designed to take a mentee from basic programming
          knowledge to a job-ready backend developer. The curriculum can be
          adjusted based on the mentee's prior experience and learning pace.
          Would you like me to elaborate on any specific part of this mentorship
          program?
        </p>
        <div className="mt-6">
          <Publications />
        </div>
      </div>
    </div>
  );
}
