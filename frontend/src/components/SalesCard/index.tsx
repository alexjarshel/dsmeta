import './style.css'
import "../NotificationButton/inedx"
import NotificationButton from '../NotificationButton/inedx'

function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>

                <div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-form-control" type="text" />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-form-control" type="text" />
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

export default SalesCard