/* eslint-disable @next/next/no-img-element */

export default function NewItem({
  url,
  urlToImage,
  source,
  description,
  publishedAt,
}: InewProps): JSX.Element {
  return (
    <div className=" w-[18rem] transition-all border hover:shadow-md cursor-pointer relative bg-transparent flex flex-col gap-1 h-[22rem] rounded-md">
      <div className="w-full flex items-center justify-center rounded-md">
        <img className="rounded-t-md h-40" src={urlToImage} alt="" />
      </div>
      <div className="px-4  h-24 z-20 bg-transparent gap-2 my-3 flex flex-col">
        <div className="flex flex-col">
          <span className="text-slate-400 text-xs font-light">Source:</span>
          <p className="text-pink text-sm font-normal">{source?.name}</p>
        </div>
        <p className="h-16  z-20  font-light text-sm">
          {description?.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
      </div>
      <div className="flex z-20 bg-transparent px-4 py-1 justify-between items-end">
        <div className="flex flex-col">
          <span className="font-light text-slate-400 text-xs">
            Published at:
          </span>
          <span className=" text-slate-500 text-sm font-light">
            {new Date(publishedAt).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <span className="font-light hover:text-pink transition-all  cursor-pointer underline text-sm">
          <a target="blank" href={url}>
            See more
          </a>
        </span>
      </div>
    </div>
  );
}
