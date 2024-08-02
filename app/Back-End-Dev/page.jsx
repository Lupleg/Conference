import Publications from "@/components/LastUpdated/Publications";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { BsCheck2Square } from "react-icons/bs";

export default function BackendDevelopment() {
  return (
    <div className="flex flex-col items-center container px-4 mx-auto">
      <h1 className="bg-gradient-to-br from-red-500 to-purple-600 text-transparent bg-clip-text shadow-lg text-center text-4xl font-bold tracking-tight md:text-5xl mt-10 mb-12 p-4 rounded-lg">
        Backend Development
      </h1>

      <div className="max-w-2xl ml-4 flex-1">
        <p className="text-xl text-gray-700 leading-9 mb-8">
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

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="font-mono font-bold mb-4 text-2xl text-green-700 flex items-center">
            📋 Program Structure:
          </h2>
          <p className="text-xl text-gray-700">
            The program is divided into three core months, each focusing on a
            specific key part to help you become a successful backend developer:
          </p>
          <hr className="border-2 border-midnight-blue my-4" />
          <ul className="px-6 py-2 list-disc list-inside text-xl text-gray-700">
            <li className="flex items-start mb-2">
              <span className="font-bold">Month 1:</span> Fundamentals and Basic
              Web Development
            </li>
            <li className="flex items-start mb-2">
              <span className="font-bold">Month 2:</span> Backend Frameworks and
              Databases
            </li>
            <li className="flex items-start mb-2">
              <span className="font-bold">Month 3:</span> Advanced Topics and
              Project
            </li>
          </ul>

          <hr className="border-2 border-midnight-blue my-4" />
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="font-mono font-bold text-2xl text-green-700 flex items-center mb-4">
            <FaRegCalendarCheck className="mr-2 " />
            Weekly Breakdown:
          </h2>
          <ul className="px-4 py-2 list-none text-lg text-gray-700">
            {" "}
            <li className="pb-4 text-xl leading-8">
              {" "}
              <BsCheck2Square className="inline text-2xl font-bold text-green-700 mr-2" />
              <span className="font-bold text-2xl"> Workshops:</span>{" "}
              Interactive sessions led by the mentor covering key topics
              relevant to the program theme for that month. (e.g., Hackathons,
              APIs, RESTful services, Database operations and optimization,
              Containerization with Docker)
            </li>
            <li className="pb-4 text-xl">
              {" "}
              <BsCheck2Square className="inline text-2xl font-bold text-green-700 mr-2" />
              <span className="font-bold text-2xl"> Group Discussions: </span>{" "}
              Opportunities to connect with fellow program participants, share
              experiences, and ask questions in a supportive environment.
            </li>
            <li className="pb-4 text-xl">
              {" "}
              <BsCheck2Square className="inline text-2xl font-bold text-green-700 mr-2" />
              <span className="font-bold text-2xl">
                {" "}
                Guest Speaker Sessions:
              </span>
              : Learn from established freelancers and industry experts who will
              share their insights and practical
            </li>
            <li className="pb-4 text-xl">
              {" "}
              <BsCheck2Square className="inline text-2xl font-bold text-green-700 mr-2" />
              <span className="font-bold text-2xl"> Action Steps:</span>Weekly
              takeaways to ensure you're implementing the learnings and making
              progress towards your goals.
            </li>
            <li className="pb-4 text-xl">
              {" "}
              <BsCheck2Square className="inline text-2xl font-bold text-green-700 mr-2" />
              <span className="font-bold text-2xl">One-on-One Coaching: </span>
              Regular individual coaching sessions with the mentor to address
              your specific needs and challenges, and develop a personalized
              action plan.
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="font-mono font-bold  my-6 text-2xl">
            <span className="bg-green-200 p-1 mb-2 rounded-md px-2 ">
              Month 1:
            </span>{" "}
            Foundational and basics of web development
          </h2>
          <p className="text-xl leading-8 text-gray-700">
            This month is all about setting yourself up for success as a backend
            developer. You'll learn the core concepts of programming, version
            control, and basic web development technologies to build a strong
            foundation for the rest of the program.
          </p>
          <h3 className="font-mono font-bold mb-4 my-4 text-xl text-green-700 flex items-center">
            <span className="bg-blue-200 p-1 mx-1 rounded-md px-2 ">
              {" "}
              Week 1-2:{" "}
            </span>{" "}
            Programming Fundamentals
          </h3>
          <ul className="px-6 py-2 list-none text-xl text-gray-700">
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Review core programming concepts (variables, data types, control
              structures)
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Object-Oriented Programming principles
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Version control with Git and GitHub
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Command line basics
            </li>
          </ul>

          <h3 className="font-mono font-bold mb-4 mx-2 text-xl text-green-700 flex items-center">
            <span className="bg-blue-200 p-1 rounded-md mx-1 "> Week 3-4:</span>{" "}
            {""} Web Development Basics
          </h3>
          <ul className="px-6 py-2 list-none text-xl text-gray-700">
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              HTTP protocol and request-response cycle
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Introduction to APIs and RESTful services
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Basic frontend technologies (HTML, CSS, JavaScript) for context
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Introduction to backend languages (e.g., Python, Node.js, Java)
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="font-mono font-bold mb-4 text-2xl text-black flex items-center">
            <span className="bg-green-200 rounded-md mr-2  px-2 ">
              Month 2:
            </span>{" "}
            Backend Frameworks and Databases
          </h2>
          <h3 className="font-mono font-bold mb-4 text-xl text-green-700 flex items-center">
            <span className="bg-blue-200 rounded-md px-2 mx-1 p-1 ">
              {" "}
              Week 5-6:
            </span>
            {"  "}
            Backend Frameworks
          </h3>
          <ul className="px-6 py-2 list-none text-xl text-gray-700">
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700  mr-2" />
              Choose a framework (e.g., Django for Python, Express for Node.js,
              Spring for Java)
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Setup and project structure
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Routing and middleware
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Authentication and authorization
            </li>
          </ul>

          <h3 className="font-mono font-bold mb-4 text-xl text-green-700 flex items-center">
            <span className="bg-blue-200 rounded-md mx-1 p-1 px-2 ">
              {" "}
              Week 7-8:
            </span>
            {"  "} Databases
          </h3>
          <ul className="px-6 py-2 list-none text-xl text-gray-700">
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Relational vs. Non-relational databases
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              SQL basics and database design
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              ORM (Object-Relational Mapping) concepts
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Database operations and optimization
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="font-mono font-bold mb-4 text-2xl text-black flex items-center">
            <span className="bg-green-200 rounded-md px-2 mr-2 ">Month 3:</span>{" "}
            Advanced Topics and Project
          </h2>
          <h3 className="font-mono font-bold mb-4 text-xl text-green-700 flex items-center">
            <span className="bg-blue-200 rounded-md px-2 mx-1 p-1 ">
              {" "}
              Week 9-10:
            </span>
            {"  "} Advanced Backend Concepts
          </h3>
          <ul className="px-6 py-2 list-none text-xl text-gray-700">
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              API design and documentation
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Caching strategies
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Message queues and background jobs
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Containerization with Docker
            </li>
          </ul>

          <h3 className="font-mono font-bold mb-4 text-xl text-green-700 flex items-center">
            <span className="bg-blue-200 rounded-md mx-1 p-1 px-2 ">
              {" "}
              Week 11-12:
            </span>
            {"  "} Final Project and Deployment
          </h3>
          <ul className="px-6 py-2 list-none text-xl text-gray-700">
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Design and implement a full-stack application
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Server management and deployment
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Continuous Integration/Continuous Deployment (CI/CD)
            </li>
            <li className="flex items-start leading-8 mb-2">
              <TbArrowBadgeRightFilled className="text-green-700 mr-2" />
              Monitoring and logging
            </li>
          </ul>
        </div>

        <div className="bg-gray-200 p-6 rounded-lg mb-8 shadow-lg">
          <h2 className="font-mono font-bold mb-4 text-2xl text-transparent bg-gradient-to-br from-green-400 to-green-700 bg-clip-text flex items-center">
            📚 Additional Resources:
          </h2>
          <p className="text-xl leading-8 text-gray-800 bg-white p-4 rounded-lg border border-gray-300">
            This program is designed to take a mentee from basic programming
            knowledge to a job-ready backend developer. The curriculum can be
            adjusted based on the mentee's prior experience and learning pace.
            Would you like me to elaborate on any specific part of this
            mentorship program?
          </p>
          <div className="mt-6">
            <Publications />
          </div>
        </div>
      </div>
    </div>
  );
}
