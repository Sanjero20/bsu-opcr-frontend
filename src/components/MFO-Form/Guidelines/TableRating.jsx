import { Table } from './Guidelines.styled';

function TableRating() {
  return (
    <Table>
      <tbody>
        {/* Row 1  */}
        <tr>
          <td>Outstanding</td>
          <td>130% and above</td>
          <td>5</td>
        </tr>

        {/* Row 2 */}
        <tr>
          <td>Very Satisfactory</td>
          <td>115%-129%</td>
          <td>4</td>
        </tr>

        <tr>
          <td>Satisfactory</td>
          <td>90%-114%</td>
          <td>3</td>
        </tr>

        <tr>
          <td>Needs Mentoring</td>
          <td>51%-89%</td>
          <td>2</td>
        </tr>

        <tr>
          <td>Needs development</td>
          <td>50% and below</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableRating;
