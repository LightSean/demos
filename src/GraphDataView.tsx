import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { ProductsData } from './models';

export const GraphDataView = ({data}: {data: Array<ProductsData>}) => {
    return (
        <Container>
            <Table size={'xl'} bordered hover striped variant='light'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>פריט</th>
                    <th>כמות</th>
                    <th>נטו כולל מע״מ</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((product, idx) => {
                        return (
                            <tr key={product.name+product.quantity+product.neto}>
                                <td>{idx + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.neto}</td>
                            </tr>
                        )
                    })
                }
                <tr className='table-dark'>
                        <td>{data.length + 1}</td>
                        <td>סה״כ</td>
                        <td>{data.reduce((acc, curr) => acc + parseInt(curr.quantity), 0)}</td>
                        <td>{data.reduce((acc, curr) => acc + parseInt(curr.neto), 0)}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        
    )
}