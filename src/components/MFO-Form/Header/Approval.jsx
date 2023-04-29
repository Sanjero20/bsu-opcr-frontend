function Approval() {
  return (
    <>
      <tr className="no-pad">
        <td colSpan={3} style={{ paddingLeft: '1rem' }}>
          Approved By:
        </td>
        <td style={{ textAlign: 'center' }}>Date</td>
      </tr>

      <tr>
        <td colSpan={3} />
        <td />
      </tr>
    </>
  );
}

export default Approval;
