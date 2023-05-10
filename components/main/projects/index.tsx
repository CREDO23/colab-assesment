import Image from "next/image";
import chataw from "../../../public/projects_images/chataw.png";

export default function Projects(): JSX.Element {
  return (
    <section className="w-full my-6 flex items-center flex-col gap-10">
      <h3 className=" text-2xl">My Recents projects</h3>
      <div className=" w-full">
        <div className=" w-[18rem] flex flex-col gap-4 p-4 h-[25rem] glass-project">
          <h4 className="">Chataw</h4>
          <Image className=" rounded-2xl" src={chataw} alt="chataw" />
        </div>
      </div>
    </section>
  );
}
