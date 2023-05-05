import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../stores'
import { useDispatch } from 'react-redux'
import { loadClientPagination } from '../../../stores/clients/actions'
import { Pagination } from '../../../components'

export const Client = () => {
    const clients = useSelector((state:AppState)=> state.client.payload.data)

    const total = useSelector((state:AppState)=> state.client.payload.total)
    const pageSize = useSelector((state:AppState)=> state.client.payload.pageSize)
    const [currentPage, setCurrentPage] = useState(1)

    const onPageChanged = (page: number) => {
        setCurrentPage(page)
        loadClientPagination(page-1, pageSize)(dispatch)
    }

    const dispatch = useDispatch()
    useEffect(() => {
        loadClientPagination(currentPage-1, pageSize)(dispatch)
    }, [dispatch, currentPage])
    const clientElements = clients?.map((client)=>{
        return (
            <tr>
                <td><a href={`/clients/${client.id}`}>{client.id}</a></td>
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
                                        {/* <th>id</th>
                                        <th>idClient</th>
                                        <th>nameClient</th>
                                        <th>nameBroker</th>
                                        <th>interestRate</th>
                                        <th>costBuy</th>
                                        <th>costSell</th> */}
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                        <th>5</th>
                                        <th>6</th>
                                        <th>7</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        {/* <th>id</th>
                                        <th>idClient</th>
                                        <th>nameClient</th>
                                        <th>nameBroker</th>
                                        <th>interestRate</th>
                                        <th>costBuy</th>
                                        <th>costSell</th> */}
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                        <th>5</th>
                                        <th>6</th>
                                        <th>7</th>
                                    </tr>
                                </tfoot>
                                <tbody>{clientElements}</tbody>
                            </table>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <Pagination total={total} pageSize={pageSize} pageLimit={5} onPageChanged={onPageChanged}/>
                        </div>
                </div>
            </div>
        </>
    )
}

