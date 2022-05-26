import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'Page A',
            uv: 590,
            pv: 800,
            amt: 1400,
            cnt: 490,
        },
        {
            name: 'Page B',
            uv: 868,
            pv: 967,
            amt: 1506,
            cnt: 590,
        },
        {
            name: 'Page C',
            uv: 1397,
            pv: 1098,
            amt: 989,
            cnt: 350,
        },
        {
            name: 'Page D',
            uv: 1480,
            pv: 1200,
            amt: 1228,
            cnt: 480,
        },
        {
            name: 'Page E',
            uv: 1520,
            pv: 1108,
            amt: 1100,
            cnt: 460,
        },
        {
            name: 'Page F',
            uv: 1400,
            pv: 680,
            amt: 1700,
            cnt: 380,
        },
    ];
    return (
        <div className='mx-10'>
            <h1 className='text-3xl text-center my-5 font-bold text-primary'>Recent activity chart</h1>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow card rounded-box place-items-center">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
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
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow card rounded-box place-items-center">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        <Scatter dataKey="cnt" fill="red" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
};

export default Chart;