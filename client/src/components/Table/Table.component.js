import React from "react";
import { TableRow } from "..";

export const Table = props => {
  const { data } = props;
  if (data && data.length === 0 || !data) {
    return (
      <p> Нет данных</p>
    );
  }
  return (
    <>
      <table className="responsive-table">
        <thead>
          <tr>
              <th>Number</th>
              <th>Square, m<sup>2</sup></th>
              <th>Status</th>
              <th></th>
          </tr>
        </thead>

        <tbody id="table-body">
          {
            data.map(item => <TableRow data={{...item}} key={item.id} />)
          }
        </tbody>
      </table>
    </>
  );
}