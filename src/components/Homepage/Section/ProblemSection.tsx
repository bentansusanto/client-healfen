import { fontHeading } from "@/components/common/FontFamily";
import { ourProblem } from "@/libs/HomeData";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdOutlineSyncProblem } from "react-icons/md";

const ProblemSection = () => {
  return (
    <div className="mt-40 px-5 md:px-8 lg:px-20 xl:px-40">
      <div className="space-y-2">
        <button
          disabled
          data-aos="fade-up"
          className="mx-auto flex items-center space-x-2 rounded-full border border-gray-300 px-6 py-2.5 text-gray-500"
        >
          <div className="text-xl">
            <MdOutlineSyncProblem />
          </div>
          <p className="text-sm">{ourProblem.subheading}</p>
        </button>
        <div className="mx-auto max-w-2xl space-y-3 text-center" data-aos="fade-up">
          <h1
            className={`${fontHeading.className} lg:text-3xl text-2xl font-bold`} style={{lineHeight: "150%"}}
          >
            {ourProblem.heading}
          </h1>
        </div>
      </div>
      <div data-aos="fade-up" className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-5 mt-5">
        {ourProblem.problem?.map((list: any, idx: any) => (
          <div
            key={idx}
            className="flex items-start gap-3 rounded-md border-dashed border border-gray-500 p-3"
          >
            <div className="rounded-full bg-green-500 p-1 text-lg text-white">
              <IoCheckmarkDoneOutline />
            </div>
            <div className="space-y-2">
              <h2 className="text-[16px] font-semibold">{list.title}</h2>
              <p className="text-gray-500">{list.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSection;
