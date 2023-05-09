import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../../stores'
import { useDispatch } from 'react-redux'
import { loadClientPagination } from '../../../stores/clients/actions'
import { Pagination } from '../../../components'

export const ClientDetail = () => {
    return (
        < div className="container-fluid" >
            {/* Page Heading */}
            < h1 className="h3 mb-4 text-gray-800" > Buttons</h1 >
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="h3 mb-2 text-gray-800">Danh sách</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                    <thead>
                                        <tr>
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
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                            <th>7</th>
                                        </tr>
                                    </tfoot>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                    <h1 className="h3 mb-2 text-gray-800">Danh sách</h1>
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                    <thead>
                                        <tr>
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
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                            <th>7</th>
                                        </tr>
                                    </tfoot>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div>
                        <div className='card-footer'>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                        </div>
                        <div className="card-body">
                            <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                                the markup in the examples below. The examples below also use the
                                <code>.text-white-50</code> helper class on the icons for additional styling,
                                but it is not required.</p>
                            <a href="#" className="btn btn-primary btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-flag" />
                                </span>
                                <span className="text">Split Button Primary</span>
                            </a>
                            <div className="my-2" />
                            <a href="#" className="btn btn-success btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-check" />
                                </span>
                                <span className="text">Split Button Success</span>
                            </a>
                            <div className="my-2" />
                            <a href="#" className="btn btn-info btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-info-circle" />
                                </span>
                                <span className="text">Split Button Info</span>
                            </a>
                            <div className="my-2" />
                            <a href="#" className="btn btn-warning btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-exclamation-triangle" />
                                </span>
                                <span className="text">Split Button Warning</span>
                            </a>
                            <div className="my-2" />
                            <a href="#" className="btn btn-danger btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-trash" />
                                </span>
                                <span className="text">Split Button Danger</span>
                            </a>
                            <div className="my-2" />
                            <a href="#" className="btn btn-secondary btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-arrow-right" />
                                </span>
                                <span className="text">Split Button Secondary</span>
                            </a>
                            <div className="my-2" />
                            <a href="#" className="btn btn-light btn-icon-split">
                                <span className="icon text-gray-600">
                                    <i className="fas fa-arrow-right" />
                                </span>
                                <span className="text">Split Button Light</span>
                            </a>
                            <div className="mb-4" />
                            <p>Also works with small and large button classes!</p>
                            <a href="#" className="btn btn-primary btn-icon-split btn-sm">
                                <span className="icon text-white-50">
                                    <i className="fas fa-flag" />
                                </span>
                                <span className="text">Split Button Small</span>
                            </a>
                            <div className="my-2" />
                            <a href="#" className="btn btn-primary btn-icon-split btn-lg">
                                <span className="icon text-white-50">
                                    <i className="fas fa-flag" />
                                </span>
                                <span className="text">Split Button Large</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

