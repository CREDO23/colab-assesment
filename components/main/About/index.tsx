export default function About(): JSX.Element {
  return (
    <section className="w-full my-6 flex items-center flex-col gap-10">
      <h3 className=" text-2xl">About me</h3>
      <div className=" font-light flex flex-col gap-4 items-center justify-center text-center">
        <p className=" max-[550px]:w-[21rem] w-[25rem]">
          My passions are Computer Science, problem-solving, science and
          Technology. I spend my free time in reading books or listing musics
          and podcasts.
        </p>
        <p className="w-[30rem] max-[550px]:w-[22rem] ">
          I am a keen and hard-working computer science with 2+ years of work
          experience, designing, implementing, and maintaining a wide range of
          software applications and projects with agile methodology.
        </p>
      </div>
      <div className=" max-[640px]:flex-col flex  max-[640px]:items-center items-start  justify-center gap-8">
        <div className="flex p-1  flex-col items-center  text-center justify-center gap-4">
          <h2>Programing languages</h2>
          <ul className="max-w-md space-y-1 font-light">
            <li>C</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div className="flex p-1 flex-col items-center text-center justify-center gap-4">
          <h2>Skills</h2>

          <ol className="space-y-4 text-center list-none text-gray-500  list-insid">
            <li className=" flex flex-col items-center text-center text-pink">
              Backend
              <ul className="list-none p-1 flex flex-col items-center text-black font-light space-y-1">
                <li className="border">NodeJs</li>
                <li>ExpressJs</li>
              </ul>
            </li>
            <li className=" text-pink">
              Frontend
              <ul className=" text-black font-light space-y-1">
                <li>HTML && CSS / Sass</li>
                <li>NextJs</li>
                <li>ReactJs</li>
                <li>React Native</li>
                <li>TailwindCss / Bootstrap</li>
                <li>Redux & Toolkit / Recoil</li>
              </ul>
            </li>
            <li className=" text-pink">
              Database and ORM
              <ul className=" text-black font-light space-y-1">
                <li>MongoDB / Mongoose</li>
                <li>PostgreSQL / Sequelize</li>
                <li>SQLite3</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="flex p-1 items-center flex-col text-center justify-center gap-4">
          <h2>Tools</h2>
          <ul className="max-w-md space-y-1 font-light">
            <li>Git & Github</li>
            <li>Docker</li>
            <li>Asana / Trello / Notion</li>
            <li>Figma / Canva / Visily</li>
          </ul>
        </div>
      </div>
      <div className=" font-light flex flex-col gap-4 items-center justify-center text-center">
        <p className="max-[550px]:w-[21rem]  w-[25rem]">
          I am currently looking for remote opportunities and challenges, I
          enjoy discussing with other people around the world.
        </p>
        <p className="w-[30rem] max-[550px]:w-[22rem] ">
          Feel free to connect if you&apos;d like, or you can contact me by
          emailing me directly at <span className=" text-pink">bakeratheirry@gmail.com</span>.<br/>My open-source
          projects : <a className=" text-pink" href="https://github.com/CREDO23">Github</a> 
        </p>
      </div>
    </section>
  );
}