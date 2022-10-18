import { Title, Table } from '@mantine/core';
import { ethers } from 'ethers';
import { RLP } from 'ethers/lib/utils';


export function Results({arr}: {arr: Result[]}) {


    const data = arr.map(
        (item) => (
            <tr key={item.nonce}>
                <td>{item.nonce}</td>
                <td>{item.address}</td>
            </tr>
                
        )
    )


    return(
        <>
            <Title order={1}>Results</Title>

            <Table verticalSpacing={'xs'}>
                <thead>
                    <tr>
                        <th>Nonce</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {data}
                </tbody>
            </Table>
        </>
    )
}