import { Title, Table } from '@mantine/core';
import { ethers } from 'ethers';
import { RLP } from 'ethers/lib/utils';


export function Results() {

    const sampleInput = [
        {nonce: 1, address: '0x1234'},
        {nonce: 2, address: '0x5678'},
        {nonce: 3, address: '0x9abc'},
        {nonce: 4, address: '0xdef0'},
        {nonce: 5, address: '0x1234'},
        {nonce: 6, address: '0x5678'},
        {nonce: 7, address: '0x9abc'},
    ]

    const sampleData = sampleInput.map(
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
            <Title order={2}>Current nonce: 5</Title>

            <Table verticalSpacing={'xs'}>
                <thead>
                    <tr>
                        <th>Nonce</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {sampleData}
                </tbody>
            </Table>
        </>
    )
}