import { type ResponseInterface } from "@task/utils/schema";
import Image from "next/legacy/image";

const Content = ({ data }: { data: ResponseInterface }) => {
  console.log(data);

  return (
    <div className="flex">
      <div>
        <Image
          width={512}
          height={512}
          src={data.url}
          alt="image description"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          We invest in the world’s potential
        </h1>
        <p className="mb-6 text-lg font-semibold text-gray-900 sm:px-16 lg:text-xl xl:px-48">
          Description : {data.description}
        </p>
        <p className="mb-6 text-lg font-semibold text-gray-900 sm:px-16 lg:text-xl xl:px-48">
          Caption : {data.caption}
        </p>

        <div className="flex w-full justify-evenly">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
              # Hash Tags:
            </h2>
            <ol className="max-w-md list-inside list-decimal space-y-1 font-semibold text-gray-700">
              {data.hashTags.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
              # Tags
            </h2>
            <ol className="max-w-md list-inside list-decimal space-y-1 font-semibold text-gray-700">
              {data.tags.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
