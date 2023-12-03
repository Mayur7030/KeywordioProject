import React from "react";
import malefemaledata from "./mfdata.json";
import { useState } from "react";

function Malfemaletable() {
  const [data, setData] = useState(malefemaledata);
  const [order, setOrder] = useState("ASC");


  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DEC");
    }
    if (order === "DEC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="table">
      <table>
        <thead>
          <th className="adinsight">Ad Insights</th>
        </thead>
        <thead>
          <th onClick={() => sorting("Group")}>Group ˅</th>
          <th>Clicks</th>
          <th>Cost</th>
          <th>Conversions</th>
          <th>Revenue</th>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr key={d.id}>
                <td>{d.Group}</td>
                <td>{d.Click}</td>
                <td>{d.Cost}</td>
                <td>{d.Coversions}</td>
                <td>{d.Revenue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Malfemaletable;
