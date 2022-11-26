import React, { ReactNode } from "react";

interface BodyPageProps {
  children: ReactNode;
}

const BodyPage: React.FC<BodyPageProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-cyan-900 flex flex-col items-center justify-start text-zinc-200">
      <header className="flex justify-between w-full p-4 max-w-5xl">
        <h2 className="font-bold uppercase">Amigo secreto</h2>
        <ul className="flex gap-4">
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </header>
      <main className="flex flex-1 w-full">{children}</main>
    </div>
  );
};

export { BodyPage };
