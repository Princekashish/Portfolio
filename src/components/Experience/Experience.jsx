import React, { useState } from "react";
import HeaderContent from "../../ui/header";
import { BsStars } from "react-icons/bs";
import Company from "../../ui/Company";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { PopupModal } from "../../ui/Popup";

export default function Experience() {
  const HIGHLIGHT_WORDS = [
    "React.js",
    "RKT",
    "Zustand",
    "Context API",
    "Firebase",
    "GitLab",
    "Stripe",
    "Razorpay",
    "routing",
    "code splitting",
    "performance",
    "authentication",
    "Firestore",
    "user engagement",
  ];
  const highlightedWords = new Set();

  function highlight(text) {
    const regex = new RegExp(`(${HIGHLIGHT_WORDS.join("|")})`, "gi");
    return text.split(regex).map((part, i) => {
      const match = HIGHLIGHT_WORDS.find(
        (word) => word.toLowerCase() === part.toLowerCase()
      );

      if (match) {
        if (!highlightedWords.has(match.toLowerCase())) {
          highlightedWords.add(match.toLowerCase());
          return (
            <strong key={i} className="font-semibold ">
              {part}
            </strong>
          );
        }
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  }
  const company = [
    {
      title: "ReactJS Developer - Intern",
      company: "The Good Game Theory",
      duration: "Sep 2024 - Apr 2025",
      responsibilities: [
        "Developed responsive user interfaces and integrated state management solutions like RKT, Zustand, and Context API. Implemented Firebase for real-time data handling and authentication.",
        "Developed a subscription-based payment system using Razorpay and Stripe, enabling recurring billing and seamless payment integration.",
        "Used GitLab for collaborative development and version control, applying code splitting techniques to enhance performance and user experience.",
      ],
    },
    {
      title: "Web Development - Intern",
      company: "Main Flow",
      duration: "Sep 2023 - Oct 2023",
      responsibilities: [
        "Accelerated user engagement by 25% with React.js UI development. Reduced bounce rates by 40% via routing.",
        "Enhanced website loading speed using code splitting techniques and implemented performance monitoring tools, achieving a 40% decrease in page load times.",
        "Boosted data accessibility and security by 30% with Firebase (Firestore, Authentication), ensuring seamless syncing and robust user authentication.",
      ],
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:pl-5 pl-3 pr-3  md:pr-5  relative h-full">
        <div className="flex flex-col gap-3">
          <HeaderContent
            icon={BsStars}
            title={"Contributions"}
            subtitle={" Work Experience "}
          />
          <div className=" flex  flex-col gap-4">
            <Company
              company={"TheGoodGameTheory"}
              jobTile={"ReactJS Developer"}
              timeline={"Sep 2024 – Apr 2025"}
            />
            <Company
              company={"Main Flow"}
              jobTile={"Web Development "}
              timeline={"Sep 2023 – Oct 2023"}
            />
          </div>
          <BiRightTopArrowCircle
            onClick={() => setOpen(true)}
            size={30}
            aria-expanded={open}
            className="absolute bottom-0  right-4"
          />
        </div>
      </div>

      <PopupModal
        open={open}
        onOpenChange={setOpen}
        title={"Work Experience"}
        className={"max-w-md overflow-hidden py-3 overflow-y-scroll scrollbar-hidden"}
      >
        <div className="flex flex-col gap-4">
          {company.map((job, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[18px] font-medium">{job.company}</h1>
                  <div className="flex items-center gap-2">
                    <p className="font-light "> {job.title}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[9px]  md:text-[13px] text-end">{job.duration}</p>
                </div>
              </div>
              <div>
                <ul className="list-disc pl-6">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="tracking-tight font-thin">
                      {highlight(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </PopupModal>
    </>
  );
}
