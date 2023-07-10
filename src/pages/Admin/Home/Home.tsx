import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-dark">Home</h1>
            </div>
            <Link className="d-sm-flex align-items-center justify-content-between mb-4" to="/clients">Danh sách khách hàng</Link>
        </>
    )
}
