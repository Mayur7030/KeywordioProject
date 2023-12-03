import React, { useState } from "react";
import "./dashboard.css";
import tabledata from "./tableData.json";
import DonutLargeTwoToneIcon from "@mui/icons-material/DonutLargeTwoTone";
import TableChartTwoToneIcon from "@mui/icons-material/TableChartTwoTone";
import Malfemaletable from "./malfemaletable";

function Dashboard() {
  const [data, setData] = useState(tabledata);
  const [order, setOrder] = useState("ASC");

  const [shown, setShown] = useState(false);
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

  const clickPie = () => {
    setShown(false);
  };
  const clicktable = () => {
    setShown(true);
  };
  console.log(data);
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">APP LOGO</div>
        <div className="menu">
          <li>
            <ul>DASHBOARD</ul>

            <ul>CREATE ADS</ul>
          </li>
        </div>
      </div>
      <div className="mainContainer">
        <div className="left">
          <table>
            <thead>
              <th className="adinsight">Ad Insights</th>
            </thead>
            <thead>
              <th onClick={() => sorting("Campaigns")}>Campaigns ˅</th>
              <th>Clicks</th>
              <th>Cost</th>
              <th>Conversions</th>
              <th>Revenue</th>
            </thead>
            <tbody>
              {data.map((d) => {
                return (
                  <tr key={d.id}>
                    <td>{d.Campaigns}</td>
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
        <div className="right">
          <div className="heading">
            <div className="rightlogo">Ad Insights</div>
            <div className="rightsrightsection">
              <select name="Click" id="">
                <option value="Click">Click</option>
                <div>?</div>
              </select>
            </div>
          </div>
          <div className="piechart">
            {shown ? (
              <Malfemaletable  style={{"width":"100%"}}/>
            ) : (
              <img
                src="https://blog.avast.com/hs-fs/hubfs/avast-blog/Reality-Check-Charts-Viruses-1.png?width=1020&height=435&name=Reality-Check-Charts-Viruses-1.png"
                alt="img"
              />
            )}

       

            <div className="righticons">
              <DonutLargeTwoToneIcon
                onClick={clickPie}
                style={{ color: "blue" }}
              />
              <TableChartTwoToneIcon
                onClick={clicktable}
                style={{ color: "blue" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
