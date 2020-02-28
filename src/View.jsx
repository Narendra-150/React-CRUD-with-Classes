import React from "react";

let tDataGenerator = (item, props) => {
  return Object.values(item).map((data, indexx) => {
    let col = Object.keys(data);
    return (
      <tr key={data.id}>
        {col.map((value, index) => (
          <td key={index}>{data[col[index]]}</td>
        ))}
        <td>
          <button onClick={() => props.onEdit(indexx)}>Edit</button>
          <button onClick={() => props.onDelete(indexx)}>Delete</button>
        </td>
      </tr>
    );
  });
};

let View = props => {
  return <tbody>{tDataGenerator(Object.values(props.data), props)}</tbody>;
};

export default View;
