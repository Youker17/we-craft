import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const tabs = ["Home", "Search", "About", "FAQ"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="px-8 py-4 w-max  rounded-3xl fixed bottom-4 z-[999999] left-[50%] translate-x-[-50%] hover:text-white bg-black/80 border border-white flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-black font-bold"
          : "text-slate-300 hover:text-white "
      } text-md transition-colors px-2.5 py-0.5 rounded-3xl relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 1.5 }}
          className="absolute inset-0 z-0 bg-white rounded-3xl"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;