import { type RequestInterface } from "@task/utils/schema";
import Image from "next/legacy/image";

const Content = ({ data }: { data: RequestInterface }) => {
  console.log(data);

  return (
    <div>
      <h1>Content</h1>
      <div className="relative">
        <Image
          className="h-auto max-w-full"
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-yUV2ICUMaNhirZLDkytoNMts/user-BRCrD2gHcFTrOBCgZbMt1OSK/img-zzEzWbiP5QN2vUXHkTuyMA43.png?st=2023-07-01T20%3A38%3A02Z&se=2023-07-01T22%3A38%3A02Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-07-01T20%3A25%3A44Z&ske=2023-07-02T20%3A25%3A44Z&sks=b&skv=2021-08-06&sig=eqDhMQkrriO1RjpRMGx0f9%2BhbJPKoGWKyiV0KkzM%2BfM%3D"
          layout="fill"
          objectFit="contain"
          alt="image description"
        />
      </div>
    </div>
  );
};

export default Content;
