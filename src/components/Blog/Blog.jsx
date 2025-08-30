import React from "react";
import HeaderContent from "../../ui/header";
import { FaHashnode } from "react-icons/fa6";
import BlogCards from "../../ui/Blog/BlogCards";
import { BiRightTopArrowCircle } from "react-icons/bi";

export default function Blog() {
  return (
    <div className="md:pl-5  md:pr-5 pl-3 pr-3   h-full relative">
      <div className="flex flex-col items-center gap-5">
        <HeaderContent
          icon={FaHashnode}
          title={"Blog"}
          subtitle={"Sharing What I Learn"}
        />
        <BlogCards
          link={
            "https://medium.com/@princekashish/understanding-reacts-context-api-simplifying-state-management-3e211ff6be9c"
          }
          Blogtitle={
            "Understanding React’s Context API: Simplifying State Management"
          }
          Blogsubheading={
            "By leveraging React’s Context API, I simplified global state management and eliminated prop drilling, resulting in cleaner, more maintainable code."
          }
          date={"18 Mar 2024"}
        />
      </div>
      <BiRightTopArrowCircle size={30} className="absolute bottom-0 right-4" />
    </div>
  );
}
