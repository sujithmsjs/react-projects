const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Item</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{e.item ?? "undefined"}</td>
            <td>{e.cost ?? "undefined"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
