import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="hidden lg:block p-6 pb-0">
    <div className="py-4 rounded-md bg-[#F1F5F9] px-20 w-full flex justify-between items-center">
    <div>
        <Image draggable="false" alt="icon" src="./assets/images/icon-with-name.svg" about="icon" height={200} width={130} />
      </div>
      <div>
        <span className="text-[#233D9A]">00112233445</span>
      </div>
    </div>
    </div>

  );
}
