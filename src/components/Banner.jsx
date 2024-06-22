import { useEffect } from "react";
import avatar from "../../public/Avatar.png";
import "../styles/Banner.css";

const Banner = () => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll(".animated-paragraph");
    let current = 0;

    const updateParagraphs = () => {
      paragraphs.forEach((paragraph, index) => {
        if (index === current) {
          paragraph.classList.add("text-active");
          paragraph.classList.remove("text-inactive");
        } else {
          paragraph.classList.remove("text-active");
          paragraph.classList.add("text-inactive");
        }
      });
      current = (current + 1) % paragraphs.length;
    };

    updateParagraphs();
    const interval = setInterval(updateParagraphs, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="avatar-section md:flex justify-start items-center gap-10 relative md:left-[-160px] h-[508px]">
      <div className="md:w-[50%] md:rounded-r-lg rounded-lg overflow-hidden relative ">
        <img src={avatar} alt="avatar-ai" className="overflow-hidden" />
      </div>
      <div className="avatar-section-para">
        <h1 className="md:text-5xl text-3xl mt-5 font-bold">
          How it works
        </h1>
        <p className="animated-paragraph text-5xl mt-10 font-bold">
          Select an Avatar
        </p>
        <p className="animated-paragraph text-4xl mt-3 font-bold">
          Create or Generate Script
        </p>
        <p className="animated-paragraph text-4xl mt-3 font-bold">
          Select AI Voices
        </p>
        <p className="animated-paragraph text-4xl mt-3 font-bold">Publish</p>
      </div>
    </div>
  );
};

export { Banner };
