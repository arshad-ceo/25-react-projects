import { useState } from "react";
import "./Accordian.css";
import data from "./data";

export const Accordian = () => {
  const [select, setSelect] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const singleSelection = (id) => {
    return setSelect(select === id ? null : id);
  };

  const multiSelection = (id) => {
    const tmp = [...multiSelect];
    const i = tmp.indexOf(id);
    console.log(i);
    i === -1 ? tmp.push(id) : tmp.splice(i, 1);

    return setMultiSelect(tmp);
  };

  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => {
            return (
              setEnableMultiSelection(!enableMultiSelection),
              enableMultiSelection ? setMultiSelect([]) : setSelect(null)
            );
          }}
        >
          {enableMultiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </button>
        <div className="accordian">
          {data && data.length ? (
            data.map((dataitem) => {
              return (
                <div
                  onClick={() => {
                    enableMultiSelection
                      ? multiSelection(dataitem.id)
                      : singleSelection(dataitem.id);
                  }}
                  className="item"
                  key={dataitem.id}
                >
                  <div className="title">
                    <h3>{dataitem.title}</h3>
                    <span>+</span>
                  </div>

                  {select === dataitem.id ||
                  multiSelect.indexOf(dataitem.id) !== -1 ? (
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
