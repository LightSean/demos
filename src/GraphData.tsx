import { Fragment, useState } from 'react';
import { GraphDataInput } from "./GraphDataInput"
import { GraphDataView } from "./GraphDataView"
import { GraphDataChart } from './GraphDataChart';
import { ProductsData } from './models';
import { subDays } from 'date-fns';



export const GraphData = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(subDays(new Date(), 10));

    let initialData = [
        {
            name: 'פריט כללי',
            quantity: '45',
            neto: '1233.3'
        },
        {
            name: 'שם ארוך שם ארוך שם ארוך שם ארוך שם ארוך שם ארוך שם ארוך',
            quantity: '42',
            neto: '123.3'
        }
    ] as Array<ProductsData>



    const moreData = [
        {
            name: ' 2 פריט כללי',
            quantity: '11',
            neto: '1.3'
        },
        {
            name: ' 3 פריט כללי',
            quantity: '51',
            neto: '80.8'
        },
        {
            name: ' 4 פריט כללי',
            quantity: '5',
            neto: '3.5'
        },
        {
            name: ' 5 פריט כללי',
            quantity: '52',
            neto: '1.3'
        },
        {
            name: ' 6 פריט כללי',
            quantity: '56',
            neto: '1.3'
        }
    ] as Array<ProductsData>

    if(endDate < subDays(new Date(), 7)) {
        initialData = [...initialData, ...moreData]    
    }

    const data = initialData.sort((a, b) => {
        if(parseInt(a.neto) < parseInt(b.neto)) {
            return 1
        } else if (parseInt(a.neto) > parseInt(b.neto)) {
            return -1
        }
        return 0;
    })

    return (
        <Fragment>
            <GraphDataInput startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
            <div className="border mt-3 mb-3"></div>
            <GraphDataView data={data}/>
            <GraphDataChart data={data}/>
        </Fragment>
        
    )
}