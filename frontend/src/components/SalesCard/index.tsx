import './style.css';
import "../NotificationButton/inedx";
import NotificationButton from '../NotificationButton/inedx';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);


    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>

                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">Id</th>
                                <th className="show576">Data</th>
                                <th>Vendedor </th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total </th>
                                <th>notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">#32</td>
                                <td className="show576">08/10/2021</td>
                                <td>Anakin</td>
                                <td className="show992">11</td>
                                <td className="show992">7</td>
                                <td>R$ 55500.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#32</td>
                                <td className="show576">08/10/2021</td>
                                <td>Anakin</td>
                                <td className="show992">11</td>
                                <td className="show992">7</td>
                                <td>R$ 55500.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#32</td>
                                <td className="show576">08/10/2021</td>
                                <td>Anakin</td>
                                <td className="show992">11</td>
                                <td className="show992">7</td>
                                <td>R$ 55500.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>

            </div>
        </>

    )
}

export default SalesCard;