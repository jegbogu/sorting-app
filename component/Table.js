import { green } from '@mui/material/colors';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {  field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
   
];



const Table = () => {
  return ( 
    <div style={{ height: 400, width: '100%', backgroundColor: 'grey' }}>
      <DataGrid
        backgroundColor={grey}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
       
    </div>
   );
}
 
export default Table;