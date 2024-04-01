import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/components/fonts";

export default function GlobeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black`}
    >
      <GlobeAsiaAustraliaIcon className="h-10 w-10 rotate-[15deg]" />
      <p className="text-[30px]">RESR</p>
    </div>
  );
}
