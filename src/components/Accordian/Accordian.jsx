import { useState } from "react";
import "./Accordian.css";
import data from "./data";

export const Accordian = () => {
  const [select, setSelect] = useState(null);

  const singleSelection = (id) => {
    setSelect(select === id ? null : id);
  };

  return (
    <>
      <div className="wrapper">
        <div className="accordian">
          {data && data.length ? (
            data.map((dataitem) => {
              return (
                <div
                  onClick={() => singleSelection(dataitem.id)}
                  className="item"
                  key={dataitem.id}
                >
                  <div className="title">
                    <h3>{dataitem.title}</h3>
                    <span>+</span>
                  </div>

                  {select === dataitem.id ? (
                    <div className="content">{dataitem.description}</div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <h1>Data not found</h1>
          )}
        </div>
      </div>
    </>
  );
};
