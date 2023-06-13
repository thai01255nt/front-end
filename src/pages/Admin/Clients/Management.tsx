import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../stores'
import { useDispatch } from 'react-redux'
import { loadClientDetail } from '../../../stores/clients/actions'
import { Pagination, Table } from '../../../components'
import { useParams } from 'react-router-dom'
import { clientService } from '../../../services'



export const Management = () => {
    let { brokerName } = useParams()
    const [managementRes, setManagementRes] = useState<Record<any, any>>({})
    const [total, setTotal] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setpageSize] = useState(20)
    const [loading, setLoading] = useState(false)
    const loadMangement = async (brokerName: string, page: number, pageSize: number) => {
        setLoading(true)
        await clientService.loadMangement(brokerName, currentPage-1, pageSize).then((res) => {
            setManagementRes(res)
            setTotal(res.data.total)
            setCurrentPage(currentPage)
            setpageSize(res.data.pageSize)
        }, (error) => { setManagementRes(error.res) });
        setLoading(false)
    }

    const onPageChanged = (page: number) => {
        if (brokerName) loadMangement(brokerName, page-1, pageSize)
    }
    useEffect(() => {
        if (brokerName) {
            loadMangement
        }
        const intervalId = setInterval(() => {
            if (brokerName && !loading) loadMangement(brokerName, currentPage-1, pageSize)
        }, brokerName ? 1000 * 5 : 0)
        return () => clearInterval(intervalId)
    }, [brokerName])

    return (
        < div className="container-fluid" >
            {/* Page Heading */}
            < h1 className="h3 mb-4 text-gray-800" >{`Báo cáo management: ${brokerName}`}</h1 >
            <div className="row">
                <div className="col-lg">
                    <h1 className="h4 mb-2 text-gray-800"></h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            {managementRes.data?.data ? <Table data={managementRes.data.data} hightLightLastRow={false}></Table> : <></>}
                        </div>
                        <div className='card-footer'>
                            <Pagination total={total} currentPage={currentPage} pageSize={pageSize} pageLimit={5} onPageChanged={onPageChanged} />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

