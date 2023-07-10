import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userService } from '../../../services'
import $ from 'jquery'

export const UserClientMembership = () => {
    let { userID } = useParams() as any
    const [clients, setClients] = useState<any[]>([])
    const [user, setUser] = useState<any>([])
    const defaultErrors = {
        idClient: null as any,
    }
    const [errors, setErrors] = useState(defaultErrors)
    useEffect(() => {
        userService.loadUserMembership(userID).then(
            (res) => { setClients(res.data.data) },
            (error) => { }
        )
        userService.loadUserByID(userID).then(
            (res) => { setUser(res.data.data) },
            (error) => { }
        )
    }, [])
    const clientElements = clients?.map((client) => {
        return (
            <tr>
                <td>{client.id}</td>
                <td>{client.idClient}</td>
                <td>{client.nameClient}</td>
                <td>{client.nameBroker}</td>
                <td>{client.interestRate}</td>
                <td>{client.costBuy}</td>
                <td>{client.costSell}</td>
            </tr>
        )
    })
    const onClick = async () => {
        setErrors({idClient: null})
        console.log("asd")
        const idClient = $('#inputIDClient').val() as string;
        await userService.addClientMembership(user.id, idClient).then(
            (res) => { },
            (error) => { if (!error.data?.errors) { alert("unknown error, contact for support") } setErrors(error.data?.errors) }
        )
        await userService.loadUserMembership(userID).then(
            (res) => { setClients(res.data.data) },
            (error) => { }
        )
    }
    return (
        <>
            <div>
                <h1 className="h3 mb-2 text-dark">{`Danh sách được truy cập của người dùng:`}</h1>
                <h1 className="h3 mb-2 text-dark">{` ${user.email}`}</h1>
                <div className="col-lg-2">
                    <div className="form-group">
                        <input type="text" className={"form-control form-control-user " + (errors.idClient ? 'is-invalid' : '')} id="inputIDClient" placeholder="ID client" />
                        {(errors.idClient && <div className='invalid-feedback'>{errors.idClient.join("\n")}</div>)}
                    </div>
                    <a className="btn btn-primary btn-user btn-block" onClick={onClick}>
                        thêm quyền truy cập
                    </a>
                </div>
                <br />
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    {/* <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">PNL</h6>
                    </div> */}
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>idClient</th>
                                        <th>nameClient</th>
                                        <th>nameBroker</th>
                                        <th>interestRate</th>
                                        <th>costBuy</th>
                                        <th>costSell</th>
                                    </tr>
                                </thead>
                                <tbody>{clientElements}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

