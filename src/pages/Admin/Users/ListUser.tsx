import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../stores'
import { useDispatch } from 'react-redux'
import { loadUserPagination } from '../../../stores/users/actions'
import { Pagination } from '../../../components'
import { useLocation, useNavigate } from 'react-router-dom'

export const ListUser = () => {
    const users = useSelector((state: AppState) => state.user.pagination.data)
    const total = useSelector((state: AppState) => state.user.pagination.total)
    const currentPage = useSelector((state: AppState) => state.user.pagination.page + 1)
    const pageSize = useSelector((state: AppState) => state.user.pagination.pageSize)

    const onPageChanged = (page: number) => {
        loadUserPagination(page - 1, pageSize)(dispatch)
    }

    const dispatch = useDispatch()
    useEffect(() => {
        loadUserPagination(currentPage - 1, pageSize)(dispatch)
    }, [dispatch, currentPage])
    let navigate = useNavigate(); 
    const userElements = users?.map((user) => {
        return (
            <tr onClick={() => navigate(`/userClientMemberships/users/${user.id}/clients`)}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.adminNameBroker}</td>
            </tr>
        )
    })
    return (
        <>
            <div>
                <h1 className="h3 mb-2 text-dark">Danh sách</h1>
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
                                        <th>email</th>
                                        <th>role</th>
                                        <th>adminNameBroker</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>id</th>
                                        <th>email</th>
                                        <th>role</th>
                                        <th>adminNameBroker</th>
                                    </tr>
                                </tfoot>
                                <tbody>{userElements}</tbody>
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

