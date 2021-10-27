import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function ThirdParty() {
    let history = useHistory();
    const HandleClick = () =>{
        
        history.push('/reports')
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=10')
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log(error))
    }, [])
    console.log(data)
    

    return (
        <div>
             <h2>General Reports</h2>
             <div>
             <button onClick={HandleClick}>User reports</button>
             </div>
             <div className="row">
                 <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>UniqueKey</th>
                                <th>Address</th>
                                <th>Report</th>
                                <th>Borough</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(
                                     results =>
                                     <tr key={results.unique_key}>
                                         <td>{results.unique_key}</td>
                                         <td>{results.incident_address}</td>
                                         <td>{results.descriptor}</td>
                                         <td>{results.borough}</td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    );
}