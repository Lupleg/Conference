import Publications from "@/components/LastUpdated/Publications";
import React from "react";
import { LuListStart } from "react-icons/lu";

export default function FreelanceHustle() {
  return (
    <div className="flex flex-col items-center container px-4 mx-auto bg-gray-50">
      <h1 className="text-[#1F3B4D] text-center text-4xl font-bold tracking-tight md:text-5xl mt-10 mb-6">
        Master Your Freelance Hustle
      </h1>

      <img
        src="https://media.licdn.com/dms/image/D4D12AQEVGn5lqAnhHQ/article-cover_image-shrink_720_1280/0/1699458983353?e=2147483647&v=beta&t=0LfYVU7ii685cu5YGSYU_I79GwvD-8NUVCZhxKWlFHM"
        alt="Freelancing"
        width={700}
        height={200}
        className="rounded-lg shadow-lg mb-8 shadow-gray-400"
      />

      <div className="max-w-2xl flex-1 [&>p]:mb-6 [&>h2]:text-green-800 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:border-l-4 [&>h2]:border-orange-600 [&>h2]:pl-3 [&>h2]:bg-gray-100 [&>h2]:py-2 [&>h2]:mb-4 [&>ul>li]:mb-4">
        <p className="text-lg leading-7">
          The Master Your Freelance Hustle Mentorship is a 3-month program
          designed to help you become a successful freelancer. You will learn
          how to find clients, negotiate contracts, and deliver high-quality
          work on time and on budget. You will also learn how to manage your
          time, set your rates, and build your personal brand. By the end of the
          program, you will have a portfolio of projects that you can show to
          potential clients, and the skills and confidence to succeed as a
          freelancer.
        </p>

        <h2>Program Structure:</h2>
        <p className="text-lg leading-7 ">
          The program is divided into three core months, each focusing on a
          specific stage of your freelance journey:
        </p>
        <ul className="px-4  text-lg list-disc">
          <li>
            {" "}
            <span className="font-bold font-sans">Month 1:</span> Foundations
            (Laying the groundwork for success)
          </li>
          <li>
            <span className="font-bold font-sans">Month 2:</span>Building Your
            Business (Crafting your brand and attracting clients)
          </li>
          <li>
            <span className="font-bold font-sans">Month 3:</span>Scaling &
            Sustainability (Growing your business and achieving long-term
            success)
          </li>
        </ul>

        <h2>Weekly Breakdown:</h2>
        <p className="px-4  text-lg  ">
          Each week will consist of a combination of the following elements:
        </p>
        <ul className="px-2 py-2 text-md md:text-lg xl:text-lg leading-7 list-none">
          <li>
            🎓 <span className="font-bold ">Workshops:</span> Interactive
            sessions led by the mentor covering key topics relevant to the
            program theme for that month. (e.g., Setting Up Your Freelance
            Business, Client Acquisition Strategies, Time Management for
            Freelancers)
          </li>
          <li>
            💬 <span className="font-bold">Group Discussions: </span>
            Opportunities to connect with fellow program participants, share
            experiences, and ask questions in a supportive environment.
          </li>
          <li>
            🎤 <span className="font-bold">Guest Speaker Sessions:</span> Learn
            from established freelancers and industry experts who will share
            their insights and practical advice.
          </li>
          <li>
            ✅ <span className="font-bold">Action Steps:</span> Weekly takeaways
            to ensure you're implementing the learnings and making progress
            towards your goals.
          </li>
          <li>
            🧑‍🏫 <span className="font-bold">One-on-One Coaching:</span> Regular
            individual coaching sessions with the mentor to address your
            specific needs and challenges, and develop a personalized action
            plan.
          </li>
        </ul>

        <h2>Month 1: ⛲️ Foundations</h2>
        <p className="text-lg">
          This month is all about setting yourself up for success as a
          freelancer. You'll solidify your niche, define your goals, and
          establish the core elements of your freelance business.
        </p>
        <ul className="py-4 text-md md:text-lg xl:text-lg ml-4 list-disc">
          <li>
            <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md">
              Week 1:
            </span>{" "}
            Introduction to Freelancing - Understanding the freelance landscape,
            identifying your niche, and setting freelancing goals.
          </li>
          <li>
            <span className="bg-orange-200 text-orange-900 px-2 py-1 rounded-md">
              Week 2:
            </span>{" "}
            Building Your Brand - Crafting a compelling personal brand that
            resonates with your ideal clients.
          </li>
          <li>
            <span className="bg-black text-white px-2 py-1 rounded-md">
              Week 3:
            </span>{" "}
            Setting Up Your Business - Establishing your legal structure,
            financial systems, and essential tools.
          </li>
          <li>
            <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md">
              Week 4:
            </span>{" "}
            Mastering Your Rates & Proposals - Learning to price your services
            competitively and creating winning proposals.
          </li>
        </ul>

        <h2>Month 2: 🔩 Building Your Business</h2>
        <p className="text-lg">
          Now that your foundation is set, Month 2 focuses on attracting
          clients, building strong relationships, and delivering exceptional
          work.
        </p>
        <ul className="py-4 text-md md:text-lg xl:text-lg ml-4 list-disc">
          <li>
            <span className="bg-orange-200 text-orange-900 px-2 py-1 rounded-md">
              Week 5:
            </span>{" "}
            Client Acquisition Strategies - Exploring various methods to attract
            high-quality clients, including networking, cold emailing, and
            online marketplaces.
          </li>
          <li>
            <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md">
              Week 6:
            </span>{" "}
            Building a Strong Client Relationship - Mastering communication,
            managing expectations, and delivering exceptional client service.
          </li>
          <li>
            <span className="bg-black text-white px-2 py-1 rounded-md">
              Week 7:
            </span>{" "}
            Project Management for Freelancers - Developing effective project
            management skills to ensure timely project delivery and client
            satisfaction.
          </li>
          <li>
            <span className="bg-orange-200 text-orange-900 px-2 py-1 rounded-md">
              Week 8:
            </span>{" "}
            Building Your Portfolio & Showcasing Your Work - Creating a
            compelling portfolio website and showcasing your work effectively to
            attract clients.
          </li>
        </ul>

        <h2>Month 3: ✅ Scaling & Sustainability</h2>
        <p className="text-lg">
          Month 3 equips you with the tools to grow your business sustainably
          and achieve your long-term freelance goals.
        </p>
        <ul className="py-4 text-md md:text-lg xl:text-lg ml-4 list-disc">
          <li>
            <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md">
              Week 9:
            </span>{" "}
            Streamlining Your Workflow - Implementing time-saving techniques and
            productivity hacks to optimize your workflow.
          </li>
          <li>
            <span className="bg-orange-200 text-orange-900 px-2 py-1 rounded-md">
              Week 10:
            </span>{" "}
            Building a Sustainable Income Stream - Exploring strategies for
            recurring revenue and diversifying your income sources.
          </li>
          <li>
            <span className="bg-black text-white px-2 py-1 rounded-md">
              Week 11:
            </span>{" "}
            Mastering the Art of Negotiation - Learning to negotiate effectively
            with clients on rates, contracts, and project scope.
          </li>
          <li>
            <span className="bg-gray-200 text-gray-900 px-2 py-1 rounded-md">
              Week 12:
            </span>{" "}
            Building Your Dream Freelance Business - Developing a long-term
            vision for your freelance business and taking steps to achieve your
            goals.
          </li>
        </ul>

        <div className="border-l-4 border-orange-600 p-6 rounded-lg shadow-md">
          <h2 className="text-xl   font-semibold text-orange-600 mb-4">
            Additional Resources:
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Throughout the program, you'll also have access to a comprehensive
            resource library that includes templates, worksheets, and other
            helpful materials to support your learning journey.
          </p>
        </div>

        <Publications />
      </div>
    </div>
  );
}
