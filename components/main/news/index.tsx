/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import New from "./NewItem";
import NewSkeleton from "./Skeleton";

export default function News(): JSX.Element {
  const [news, setNews] = useState<InewProps[]>([]);
  const [topic, setTopic] = useState<string>("computer science");

  useEffect(() => {
    (async () => {
      const topics = [
        "economy",
        "social",
        "culture",
        "science",
        "computer science",
        "nature",
        "education",
        "religion",
      ];

      const randomTopic = (topics: string[]) => {
        setTopic(topics[Math.floor(Math.random() * topics.length)]);
      };

      randomTopic(topics);

      const response: { data: IapiResponse } = await axios({
        baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
        url: "everything",
        method: "GET",
        params: {
          apiKey: process.env.NEXT_PUBLIC_API_KEY,
          q: `/${topic}`,
        },
      });

      const randomSet = () => {
        const data = response.data.articles.filter(
          (article) => article.urlToImage
        );
        const selected: InewProps[] = [];

        for (let i = 0; i < 5; i++) {
          let index = Math.floor(Math.random() * data.length - 1);

          selected.push(data[index]);
        }

        setNews(selected);
      };

      randomSet();
    })();
  }, []);

  return (
    <section
      id="projects"
      className="w-full pb-6 z-30 overflow-hidden my-6 flex items-center flex-col gap-14"
    >
      <h3 className=" text-center text-2xl">
        Stay up to date about &quot;{topic}&quot;
      </h3>

      <div className=" flex flex-wrap items-center justify-center gap-12 w-full">
        {news.length ? (
          news.map((item, key) => {
            return (
              <New
                key={key}
                description={item?.description}
                publishedAt={item?.publishedAt}
                url={item?.url}
                urlToImage={item?.urlToImage}
                source={item?.source ?? { name: "unknown" }}
              />
            );
          })
        ) : (
          <NewSkeleton />
        )}
      </div>
      <p className="w-[40rem] text-center font-light max-[550px]:w-[22rem] ">
        I used &quot;newsapi&quot; because it has a wide range of sources,
        providing you with a diverse and comprehensive selection of news stories
        from around the world. This could be particularly useful for those that
        are interested in global events and want to stay up-to-date with news
        from different regions.
      </p>
      <p className="w-[40rem] text-center font-light max-[550px]:w-[22rem] ">
        This API provides real-time updates, ensuring that you are always
        informed of the latest news as it happens. This could be particularly
        useful if you need to stay on top of breaking news stories or if you
        work in a fast-paced industry where up-to-date information is critical.
        I hard-coded some topics for the research : <br /> &quot;economy&quot;,
        &quot;social&quot;, &quot;culture&quot;, &quot;science&quot;,
        &quot;computer science&quot;, &quot;nature&quot;, &quot;education&quot;,
        &quot;religion&quot;.
      </p>
    </section>
  );
}
