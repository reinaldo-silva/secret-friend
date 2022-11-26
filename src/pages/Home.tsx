import React from "react";
import { Link } from "react-router-dom";
import { BodyPage } from "../components/BodyPage";
import { Button } from "../components/Button";

const Home: React.FC = () => {
  return (
    <BodyPage>
      <div className="flex justify-between items-center max-w-5xl w-full gap-9">
        <h1 className="text-8xl font-bold">Amigo secreto</h1>
        <div className="flex flex-col justify-center items-start gap-4">
          <p>Aproveite o natal em familia com um super amigo secreto!!!</p>
          <Button asChild>
            <Link to="/group/new">Novo sorteio</Link>
          </Button>
        </div>
      </div>
    </BodyPage>
  );
};

export { Home };
