"use client";
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Portfolio from "./Portfolio";

const SkillList = ({
  tabs: propTabs = [
    { title: "Frontend", value: "frontend", content: <FrontendContent /> },
    { title: "Backend", value: "backend", content: <BackendContent /> },
    { title: "Library", value: "library", content: <LibraryContent /> },
    { title: "Tools", value: "tools", content: <ToolsContent /> },
    { title: "Databases", value: "databases", content: <DatabasesContent /> },
    { title: "Languages", value: "languages", content: <LanguagesContent /> },
  ],
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0] || {});
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <style>
        {`
          .no-visible-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
            -webkit-overflow-scrolling: touch;
          }

          .no-visible-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div
        className={cn(
          "flex flex-wrap justify-center sm:justify-center items-center relative overflow-auto sm:overflow-visible no-visible-scrollbar w-full pt-4",
          containerClassName
        )}
      >
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-6 py-3 rounded text-gray-400 hover:text-purple-500 transition-colors",
              tabClassName,
              active.value === tab.value && "text-purple-600 border-b-2 border-purple-600"
            )}
            style={{ transformStyle: "preserve-3d" }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-3 mb-8 text-center !text-purple-500", contentClassName)}
      />
    </>
  );
};

const FrontendContent = () => (
  <div className="frontend-content p-4 flex flex-col items-center justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">

      <SkillCard logo="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png" />
      <SkillCard logo="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png" />
      <SkillCard logo="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" />
      <SkillCard logo="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
      <SkillCard logo="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-256.png" />
    </div>
  </div>
);

const BackendContent = () => (
  <div className="backend-content p-4 flex flex-col items-center justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
      <SkillCard logo="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png" />
      <SkillCard logo="https://img.icons8.com/color/512/express-js.png" />
      <SkillCard logo="https://images.seeklogo.com/logo-png/48/2/mongodb-logo-png_seeklogo-481256.png?v=1957221918686265648" />
    </div>
  </div>
);

const LibraryContent = () => (
  <div className="library-content p-4 flex flex-col items-center justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
      <SkillCard logo="https://i1.wp.com/www.ux-republic.com/wp-content/uploads/2016/11/logo-redux.png?fit=500%2C500&ssl=1" />
      <SkillCard logo="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/framer-color-icon.png" />
      <SkillCard logo="https://peng-xiao-shuai.github.io/vite-vue-admin/logo.png" />
      <SkillCard logo="https://iconape.com/wp-content/png_logo_vector/netlify-logo.png" />
      <SkillCard logo="https://jquery-plugins.net/image/plugin/mui-react-component-library.png" />
      <SkillCard logo="https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-8sw7kisf.png" />
    </div>
  </div>
);

const ToolsContent = () => (
  <div className="tools-content p-4 flex flex-col items-center justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
      <SkillCard logo="https://code.visualstudio.com/assets/images/code-stable.png" />
      <SkillCard logo="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-256.png" />
      <SkillCard logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38jXgeU5CvHhig8Er9MiDguQcPPh40_uKX6VPGGyD2ytDqqcEfqzTE1lepasmfHUfPEE&usqp=CAU" />
      <SkillCard logo="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-256.png" />
      <SkillCard logo="https://storage.googleapis.com/ai-prod-wagtail/images/Image_ratios_wFa85ot.original.format-webp.webp" />
      <SkillCard logo="https://ui.aceternity.com/logo-dark.png" />
      <SkillCard logo="https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png?v=1958566502779545744" />
    </div>
  </div>
);

const DatabasesContent = () => (
  <div className="databases-content p-4 flex flex-col items-center justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
      <SkillCard logo="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mongodb-256.png" />
      {/* <SkillCard logo="mysql-logo.png" />
      <SkillCard logo="postgresql-logo.png" /> */}
      <SkillCard logo="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-256.png" />
      {/* <SkillCard logo="redis-logo.png" /> */}
    </div>
  </div>
);

const LanguagesContent = () => (
  <div className="languages-content p-4 flex flex-col items-center justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
      <SkillCard logo="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-256.png" />
      {/* <SkillCard logo="typescript-logo.png" /> */}
      <SkillCard logo="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" />
      <SkillCard logo="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-256.png" />
      {/* <SkillCard logo="ruby-logo.png" /> */}
    </div>
  </div>
);

const SkillCard = ({ logo }) => (
  <div className="skill-card flex justify-center items-center p-3 bg-center">
    <div className="bg-purple-950 p-3 rounded shadow opacity-90">
      <img src={logo} alt="Skill Logo" className="h-24 w-24 object-contain opacity-100 rounded-xl " />
    </div>
  </div>
);

const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => tab.value === tabs[0].value;

  return (
    <div className="relative w-full h-screen">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: isActive(tab) ? 1 : 0,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            filter: isActive(tab) ? "none" : "blur(5px)",
          }}
          animate={{ y: isActive(tab) ? [0, 40, 0] : 0 }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}

      <div onClick={<Portfolio />} className="flex absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-50">
        <a
          href="#home"
          // download="Kasinath_Resume.pdf"
          className="p-[3px] relative no-underline  "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"></div>
          <div className="cursor-pointer px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent hover:shadow-lg">
            Go To Top
          </div>
        </a>
      </div>

    </div>
  );
};

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-white">Something went wrong while loading the skill list.</h1>;
    }
    return this.props.children;
  }
}

const SkillListWithErrorBoundary = (props) => (
  <ErrorBoundary>
    <SkillList {...props} />
  </ErrorBoundary>
);

export default SkillListWithErrorBoundary;
