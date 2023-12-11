import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import arr from '@/assets/icons/Rectangle 3952.svg'
import Image from "next/image";

const tabs = ["Home", "Search", "About", "FAQ"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (<>
    <div className="px-2 py-2 w-max  backdrop-blur-3xl rounded-lg fixed bottom-4 z-[999999] left-[50%] translate-x-[-50%] hover:text-white bg-black/50 border-[.5px] border-white/20 flex items-center flex-wrap gap-2">
      <div className=" hover:scale-105 transition-all cursor-pointer hover:shadow-white/50 shadow-2xl text-black group duration-150 ease-in-out font-bold w-16 h-10 rounded-lg -left-20 bg-white absolute flex justify-center items-center">
        <span className=" rotate-[135deg] translate-y-1 group-hover:translate-y-0 duration-150 ease-in-out transition-all">
        <Image  src={arr.src} alt="arr" width={14} height={14}/>
        </span>
      </div>
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  </>
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
      className={`${selected
        ? "text-black "
        : "text-slate-300 hover:text-white "
        } text-md  duration-150 px-2.5 font-somarBold py-0.5 rounded-sm relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (<>
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute shadow-lg shadow-white/40 inset-0  bg-white rounded-[4px]"
        ></motion.span>
      </>
      )}
    </button>
  );
};

export default ChipTabs;