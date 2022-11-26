import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BodyPage } from "../components/BodyPage";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

const NewGroup: React.FC = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <BodyPage>
      <div className="flex flex-col gap-8">
        <h3 className="text-3xl">Qual vai ser o nome do grupo?</h3>
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();

            !!name && navigate(`/group/configs/${name}`);
          }}
        >
          <TextInput.Root>
            <TextInput.Input
              onChange={(e) => setName(e.currentTarget.value)}
              value={name}
            />
          </TextInput.Root>
          <Button type="submit">Continuar</Button>
        </form>
      </div>
    </BodyPage>
  );
};

export { NewGroup };
