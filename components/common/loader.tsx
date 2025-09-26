import { Loading } from "./icons";

interface LoaderProps {
  mode?: "screen" | "container";
}

const Loader = ({ mode = "screen" }: LoaderProps) => {
  return (
    <div
      className={`flex justify-center items-center absolute top-0 left-0 ${
        mode === "screen" ? "w-screen h-screen" : "w-full h-full"
      }`}
    >
      <Loading className="w-16 h-16 text-slate-600 animate-spin" />
    </div>
  );
};

export default Loader;
