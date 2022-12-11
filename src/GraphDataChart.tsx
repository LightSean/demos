import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { ProductsData } from './models';

export const GraphDataChart = ({data}: {data: Array<ProductsData>}) => {
    const graphData = data.map(product => {
        return {
            name: product.name,
            נטו: product.neto
        }
    })

    return (
        <Container style={{direction:'ltr', height:500}}>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                data={graphData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="נטו" fill="#FFB900" />
                </BarChart>
            </ResponsiveContainer>
        </Container>
        
        
      
    )
}