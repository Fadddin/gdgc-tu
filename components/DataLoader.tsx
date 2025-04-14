import Image from "next/image";

const DataLoader = () => {
    return (
      <div className="flex flex-col items-center justify-center col-span-full py-12 space-y-6">
        <div className="flex items-center justify-center space-x-4 text-5xl font-extrabold">
          <span className="animate-bounce">
            <Image
              src="/logo.png?height=128&width=128"
              alt="Loading"
              width={128}
              height={128} />
          </span>
        </div>
        <p className="text-blue-400 font-mono tracking-wider">
          LOADING<span className="animate-pulse">...</span>
        </p>
      </div>
    );
  };

  export default DataLoader;