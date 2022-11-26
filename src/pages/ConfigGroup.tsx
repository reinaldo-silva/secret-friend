import React from "react";
import { BodyPage } from "../components/BodyPage";
import { PaperPlaneTilt } from "phosphor-react";

const ConfigGroup: React.FC = () => {
  const data = [
    { name: "Diego Devatz", tel: "05517991115889", sended: false },
    { name: "Diego Devatz", tel: "05517992597741", sended: false },
    { name: "Diego Devatz", tel: "17991115889", sended: false },
    { name: "Diego Devatz", tel: "17991115889", sended: false },
    { name: "Diego Devatz", tel: "17991115889", sended: false },
  ];

  return (
    <BodyPage>
      <div className="w-full flex min-full flex-col justify-start items-start p-8">
        <h2 className="text-2xl">Lista de pessoas</h2>
        <ul className="py-4 w-full flex flex-col gap-2">
          <li className="bg-cyan-700 w-full">filtros</li>
          {data.map((item) => (
            <li
              key={item.tel}
              className="bg-red-500/50 w-full p-4 rounded-md flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-bold">{item.name}</p>
                <span className="text-sm text-red-100/75 text-bold">
                  {item.tel}
                </span>
              </div>

              <div>
                <button
                  className="w-auto h-full"
                  onClick={() => {
                    return console.log(
                      "https://api.whatsapp.com/send?phone=" +
                        item.tel +
                        "&text=%20" +
                        "Bomdiapessoal"
                    );
                  }}
                >
                  <PaperPlaneTilt size={32} weight="fill" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </BodyPage>
  );
};

export { ConfigGroup };
