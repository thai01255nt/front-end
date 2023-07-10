import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../stores'
import { useDispatch } from 'react-redux'
import { loadClientDetail } from '../../../stores/clients/actions'
import { Pagination, Table } from '../../../components'
import { useParams } from 'react-router-dom'
import { clientService } from '../../../services'

export const Portfolio = () => {
    let { brokerName } = useParams()
    const [portfolioRes, setPortfolioRes] = useState<Record<any, any>>({})

    useEffect(() => {
        if (brokerName) clientService.loadPortfilio(brokerName).then((res) => {setPortfolioRes(res)
        }, (error) => { setPortfolioRes(error.res) })
        const intervalId = setInterval(() => {
            if (brokerName) clientService.loadPortfilio(brokerName).then((res) => {setPortfolioRes(res)
            }, (error) => { setPortfolioRes(error.res) })
        }, brokerName ? 1000 * 5 : 0)
        return () => clearInterval(intervalId)
    }, [brokerName])

    return (
        < div className="container-fluid" >
            {/* Page Heading */}
            < h1 className="h3 mb-4 text-dark" >{`Báo cáo danh mục: ${brokerName}`}</h1 >
            <div className="row">
                <div className="col-lg">
                    <h1 className="h4 mb-2 text-dark"></h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            {portfolioRes.data?.data ? <Table data={portfolioRes.data.data} hightLightLastRow={false} firstSticky={false}></Table> : <></>}
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

