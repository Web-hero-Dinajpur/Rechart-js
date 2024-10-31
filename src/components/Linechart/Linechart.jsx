import { LineChart, Line } from 'recharts';
const Linechart = () => {
    const MathMarksData =[
        {id:1, name:'Alice', phy:60, math: 69},
        {id:2, name:'Ganis', phy:78, math: 70},
        {id:3, name:'Fanis', phy:61, math: 65},
        {id:4, name:'Danis', phy:60, math: 41},
        {id:5, name:'Anis', phy:61, math: 62},
        {id:6, name:'Dabil', phy:36, math: 33},
        {id:7, name:'Sabil', phy:70, math: 89},
        {id:8, name:'nabil', phy:50, math: 69},
        {id:9, name:'Habib', phy:33, math: 32}
    ]
    return (
        <div>
            <LineChart width={480} height={480} data={MathMarksData}>
                <Line dataKey="math"></Line>
                <Line dataKey="phy"></Line>
            </LineChart>
        </div>
    );
};

export default Linechart;