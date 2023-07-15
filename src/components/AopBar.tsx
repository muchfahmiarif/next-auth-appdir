import Link from "next/link";
import React from "react";

const AopBar = () => {
  return (
    <div>
      <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-slate-300 shadow">
        <Link href={`/`} className="transition-colors hover:text-blue-400">
          Home Page
        </Link>
        <Link href={`/UserPost`} className="transition-colors hover:text-blue-700">
          User Post Page
        </Link>
      </header>
    </div>
  );
};

export default AopBar;
