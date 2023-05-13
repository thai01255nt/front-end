import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../stores'
import { useDispatch } from 'react-redux'
import { loadClientDetail } from '../../../stores/clients/actions'
import { Pagination, Table } from '../../../components'
import { useParams } from 'react-router-dom'

export const ClientDetail = () => {
    let { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (id) loadClientDetail(id)(dispatch)
        }, 1000 * 5)
        return () => clearInterval(intervalId)
    }, [dispatch, id])
    const expectedPNL = useSelector((state: AppState) => state.client.detail?.data?.expectedPNL)
    const realisedPNL = useSelector((state: AppState) => state.client.detail?.data?.realisedPNL)
    const deposite = useSelector((state: AppState) => state.client.detail?.data?.deposite)
    const portfolio = useSelector((state: AppState) => state.client.detail?.data?.portfolio)
    const assets = useSelector((state: AppState) => state.client.detail?.data?.assets)
    return (
        < div className="container-fluid" >
            {/* Page Heading */}
            < h1 className="h3 mb-4 text-gray-800" >{`Báo cáo khách hàng ${id}`}</h1 >
            <div className="row">
                <div className="col-lg">
                    <h1 className="h4 mb-2 text-gray-800">assets</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <Table data={assets} hightLightLastRow={false}></Table>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <h1 className="h4 mb-2 text-gray-800">deposite</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <Table data={deposite} hightLightLastRow={true}></Table>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h1 className="h4 mb-2 text-gray-800">portfolio</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <Table data={portfolio} hightLightLastRow={false}></Table>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <h1 className="h4 mb-2 text-gray-800">expectedPNL</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <Table data={expectedPNL} hightLightLastRow={true}></Table>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <h1 className="h4 mb-2 text-gray-800">realisedPNL</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <Table data={realisedPNL} hightLightLastRow={true}></Table>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

