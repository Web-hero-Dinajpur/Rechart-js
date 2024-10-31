import { Line, LineChart, XAxis, YAxis } from "recharts";

const XYchart = () => {
    const MathMarksData =[
        {id:1, name:'Alice', phy:40, ict:43, math: 49},
        {id:2, name:'Ganis', phy:58, ict:33, math: 50},
        {id:3, name:'Fanis', phy:51, ict:63, math: 45},
        {id:4, name:'Danis', phy:60, ict:43, math: 61},
        {id:5, name:'Anis', phy:61, ict:53, math: 62},
        {id:6, name:'Dabil', phy:36, ict:43, math: 33},
        {id:7, name:'Sabil', phy:70, ict:73, math: 78},
        {id:8, name:'nabil', phy:50, ict:35, math: 59},
        {id:9, name:'Habib', phy:35, ict:53, math: 42}
    ]
    return (
        <div>
            <LineChart width={600} height={400} data={MathMarksData}>
                <XAxis dataKey="nem"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="phy" stroke="brown"></Line>
                <Line dataKey="math" stroke="blue"></Line>
                <Line dataKey="ict" stroke="red"></Line>
            </LineChart>
        </div>
    );
};

export default XYchart;