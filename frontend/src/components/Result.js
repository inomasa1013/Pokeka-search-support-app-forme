import "../styles/result.css";
import React, { useEffect } from "react";
import { useTable } from "react-table";

// import _ from "lodash";

export default function Result(props) {
  const columns = [
    { Header: "名前", accessor: "name" },
    { Header: "ダメージ1", accessor: "Attack1damage" },
    { Header: "技名称1", accessor: "Attack1name" },
    { Header: "消費エネルギー1", accessor: "Attack1energy1" },
    { Header: "消費エネルギー2", accessor: "Attack1energy2" },
    { Header: "消費エネルギー3", accessor: "Attack1energy3" },
    { Header: "消費エネルギー4", accessor: "Attack1energy4" },
    { Header: "消費エネルギー5", accessor: "Attack1energy5" },
    { Header: "ダメージ2", accessor: "Attack2damage" },
    { Header: "技名称2", accessor: "Attack2name" },
    { Header: "消費エネルギー1", accessor: "Attack2energy1" },
    { Header: "消費エネルギー2", accessor: "Attack2energy2" },
    { Header: "消費エネルギー3", accessor: "Attack2energy3" },
    { Header: "消費エネルギー4", accessor: "Attack2energy4" },
    { Header: "消費エネルギー5", accessor: "Attack2energy5" },
  ];
  // const data = [{
  //   "cardID": 40000,
  //   "name": "ルージュラ",
  //   "cardURL": "https://www.pokemon-card.com/card-search/details.php/card/40000/regu/XY",
  //   "Attack1name": "げんわくダンス",
  //   "Attack1damage": "30",
  //   "Attack1energy1": "icon-psychic icon",
  //   "Attack1energy2": "icon-none icon",
  //   "Attack1energy3": "",
  //   "Attack1energy4": "",
  //   "Attack1energy5": ""
  // }];
  // console.log(data);
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow
  // } = useTable({
  //   columns,
  //   data
  // });

  return (
    // <>
    //   {/* <table {...getTableProps()}>
    //     <thead>
    //       {headerGroups.map((headerGroup) => (
    //         <tr {...headerGroup.getHeaderGroupProps()}>
    //           {headerGroup.headers.map((column) => (
    //             <th {...column.getHeaderProps()}>{column.render("Header")}</th>
    //           ))}
    //         </tr>
    //       ))}
    //     </thead>

    //     <tbody {...getTableBodyProps()}>
    //       {rows.map((row, i) => {
    //         prepareRow(row);
    //         return (
    //           <tr {...row.getRowProps()}>
    //             {row.cells.map((cell) => {
    //               return (
    //                 <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
    //               );
    //             })}
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table> */}
    // </>
    console.log()
  );
}
