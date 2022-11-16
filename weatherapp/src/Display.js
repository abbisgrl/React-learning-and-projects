import React, { useState, useEffect } from "react";
import axios from 'axios';

const Display = (props) => {
    const { term } = props
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=b6e9810ea1034394b4471124221611`, {
                params: {
                    q: term,
                    aqi: 'no',
                    days: 4
                }
            });
            setData(result.data);
        }
        fetchAPI();
    }, [term]);

    // console.log(data.current)
    if (Object.keys(data).length !== 0) {
        return (
            <>
                {console.log(data)}
                <h1>Your City Weather</h1>
                <div id="mainBox">
                    <div id="current">
                        <img src={data.current.condition.icon} />
                        <div id="details">
                            <h3>Today</h3>
                            <h1>{data.location.name}</h1>
                            <p>{`${data.current.temp_c}°C`}</p>
                            <p>{data.current.condition.text}</p>

                        </div>
                    </div>
                    <div id="forecast">
                        {
                            data.forecast.forecastday.map((item) => {
                                return <div id="futureBox">
                                    <div>{item.date}</div>
                                    <img src={item.day.condition.icon} />
                                    <p style={{ marginBottom: -16 }}>{`Max:${item.day.maxtemp_c}°C`}</p>
                                    <p>{`Min:${item.day.mintemp_c}°C`}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </>
        )

    } else {
        return (
            <></>
        )
    }
}

export default Display;