import React from 'react';
import DataTable from 'react-data-table-component';
import data from '../data/data.json'

 
const columns = [
{
    name: 'ID',
    selector: 'id',
    sortable: true,
    },
    {
    name: 'Name',
    selector: 'name',
    sortable: true,
    },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
  },
  {
    name: 'Gender',
    selector: 'gender',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'Phone No.',
    selector: 'phoneNo',
    sortable: false,
  }
];

 
function Table() {
    return (
        <DataTable
        title="Employee Details"
        columns={columns}
        data={data}
        />
    )
};

export default Table;
 