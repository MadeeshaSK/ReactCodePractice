import * as React from 'react';
interface CustomerProps {
    name: string;
    address: string;
    salary?: number;
    status?: boolean;
}
const CustomerView : React.FC <CustomerProps> = ({name, address, salary, status = true}) => {
    return (
        <div style ={{border : '1px solid red', padding:'10px', borderRadius:'5px' }}>
            <table border={1}>
                <tr>
                    <td>Name</td>
                    <td>Address</td>
                    <td>Salary</td>
                    <td>Status</td>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{salary}</td>
                    <td>{status ? 'Active' : 'Inactive'}</td>
                </tr>
            </table>
        </div>
    );
}
export default CustomerView;