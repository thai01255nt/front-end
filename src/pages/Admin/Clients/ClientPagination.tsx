import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../stores'
import { useDispatch } from 'react-redux'
import { loadClientPagination } from '../../../stores/clients/actions'
import { Pagination } from '../../../components'
import { useLocation, useNavigate } from 'react-router-dom'

export const ClientPagination = () => {
    const clients = useSelector((state: AppState) => state.client.pagination.data)
    let { search } = useLocation();

    const query = new URLSearchParams(search);
    const brokerName = query.get('brokerName');
    console.log(brokerName)
    const total = useSelector((state: AppState) => state.client.pagination.total)
    const currentPage = useSelector((state: AppState) => state.client.pagination.page + 1)
    const pageSize = useSelector((state: AppState) => state.client.pagination.pageSize)

    const onPageChanged = (page: number) => {
        loadClientPagination(page - 1, pageSize, brokerName)(dispatch)
    }

    const dispatch = useDispatch()
    useEffect(() => {
        loadClientPagination(currentPage - 1, pageSize, brokerName)(dispatch)
    }, [dispatch, currentPage, brokerName])
    let navigate = useNavigate(); 
    const clientElements = clients?.map((client) => {
        return (
            <tr onClick={() => navigate(`/clients/${client.idClient}`)}>
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
    return (
        <>
            <div>
                <h1 className="h3 mb-2 text-gray-800">Danh sách</h1>
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
                                <tfoot>
                                    <tr>
                                        <th>id</th>
                                        <th>idClient</th>
                                        <th>nameClient</th>
                                        <th>nameBroker</th>
                                        <th>interestRate</th>
                                        <th>costBuy</th>
                                        <th>costSell</th>
                                    </tr>
                                </tfoot>
                                <tbody>{clientElements}</tbody>
                            </table>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <Pagination total={total} currentPage={currentPage} pageSize={pageSize} pageLimit={5} onPageChanged={onPageChanged} />
                    </div>
                </div>
            </div>
        </>
    )
}

