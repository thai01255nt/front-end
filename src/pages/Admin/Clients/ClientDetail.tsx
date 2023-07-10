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
    const expectedPNL = useSelector((state: AppState) => state.clientDetail.detail?.data?.expectedPNL)
    const realisedPNL = useSelector((state: AppState) => state.clientDetail.detail?.data?.realisedPNL)
    const deposite = useSelector((state: AppState) => state.clientDetail.detail?.data?.deposite)
    const portfolio = useSelector((state: AppState) => state.clientDetail.detail?.data?.portfolio)
    const assets = useSelector((state: AppState) => state.clientDetail.detail?.data?.assets)
    useEffect(() => {
        if (id) loadClientDetail(id)(dispatch)
        const intervalId = setInterval(() => {
            if (id) loadClientDetail(id)(dispatch)
        }, id ? 1000 * 5 : 0)
        return () => clearInterval(intervalId)
    }, [dispatch, id])

    return (
        < div className="container-fluid" >
            {/* Page Heading */}
            < h1 className="h3 mb-4 text-dark" >{`Báo cáo khách hàng ${id}`}</h1 >
            <div className="row">
                <div className="col-lg">
                    <h1 className="h4 mb-2 text-dark">BÁO CÁO TÀI SẢN</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <Table data={assets} hightLightLastRow={false} firstSticky={false}></Table>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <h1 className="h4 mb-2 text-dark">THEO DÕI NỘP CỌC</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <Table data={deposite} hightLightLastRow={true} firstSticky={false}></Table>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h1 className="h4 mb-2 text-dark">DANH MỤC CỔ PHIẾU HIỆN TẠI</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <Table data={portfolio} hightLightLastRow={true} firstSticky={false}></Table>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <h1 className="h4 mb-2 text-dark">DANH MỤC LỢI NHUẬN KỲ VỌNG</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <Table data={expectedPNL} hightLightLastRow={true} firstSticky={false}></Table>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <h1 className="h4 mb-2 text-dark">DANH MỤC LỢI NHUẬN ĐÃ TẤT TOÁN</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <Table data={realisedPNL} hightLightLastRow={true} firstSticky={false}></Table>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

