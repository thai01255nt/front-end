import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../stores'
import { AccountState } from '../../stores/account/types'
import { Link } from 'react-router-dom'

export const LeftMenu = () => {
    const account = useSelector<AppState, AccountState>((state) => state.account)
    const [isToggled, setIsToggled] = useState(false)
    const [isNavItemShow, setIsNavItemShow] = useState(false)
    const [navItemShowName, setNavItemShowName] = useState("")

    const systemNav = "Hệ thống"
    const clientsNav = "Khách hàng"
    const managementNav = "Tổng hợp"
    const portfolioNav = "Danh mục"

    const handleComponentShow = (navItemName: string) => {
        if (navItemShowName !== navItemName) {
            setIsNavItemShow(true)
            setNavItemShowName(navItemName)
        } else {
            setIsNavItemShow(false)
            setNavItemShowName("")
        }
    }
    console.log(account.user)
    return (
        <>
            <ul
                className={
                    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" + (isToggled ? " toggled" : "")
                }
                id="accordionSidebar">
                {/* Sidebar - Brand */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Phái sinh <sup>2</sup></div>
                </Link>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span></Link>
                </li>
                {/* Nav Item - Hệ thống Collapse Menu */}
                {
                    account.user?.roleCode === 1582
                    &&
                    <>
                        <hr className="sidebar-divider" />
                        <div className="sidebar-heading">
                            Admin
                        </div>
                        <li className="nav-item">
                            <a
                                className={"nav-link" + (isNavItemShow && navItemShowName === systemNav ? "" : " collapsed")}
                                href='#'
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded={isNavItemShow && navItemShowName === systemNav ? "true" : "false"}
                                aria-controls="collapseTwo"
                                onClick={() => { handleComponentShow(systemNav) }}
                            >
                                <i className="fas fa-fw fa-cog" />
                                <span>{systemNav}</span>
                            </a>
                            <div
                                id="collapseTwo"
                                className={"collapse" + (isNavItemShow && navItemShowName === systemNav ? " show" : "")}
                                aria-labelledby="headingTwo"
                                data-parent="#accordionSidebar"
                            >
                                <div className="bg-white py-2 collapse-inner rounded">
                                    {/* <h6 className="collapse-header"></h6> */}
                                    <Link className="collapse-item" to="/users">Người dùng</Link>
                                    <Link className="collapse-item" to="/clients/membership">Quản lý quyền truy cập</Link>
                                </div>
                            </div>
                        </li>
                    </>
                }
                {/* Nav Item - quản lý Collapse Menu */}
                {
                    (account.user?.roleCode === 1582 || account.user?.adminBorkerID)
                    &&
                    <>
                        <hr className="sidebar-divider" />
                        <div className="sidebar-heading">
                            Quản lý
                        </div>
                        <li className="nav-item">
                            <a
                                className={"nav-link" + (isNavItemShow && navItemShowName === managementNav ? "" : " collapsed")}
                                href='#'
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded={isNavItemShow && navItemShowName === managementNav ? "true" : "false"}
                                aria-controls="collapseTwo"
                                onClick={() => { handleComponentShow(managementNav) }}
                            >
                                <i className="fas fa-fw fa-cog" />
                                <span>{managementNav}</span>
                            </a>
                            <div
                                id="collapseTwo"
                                className={"collapse" + (isNavItemShow && navItemShowName === managementNav ? " show" : "")}
                                aria-labelledby="headingTwo"
                                data-parent="#accordionSidebar"
                            >
                                <div className="bg-white py-2 collapse-inner rounded">
                                    {/* <h6 className="collapse-header"></h6> */}
                                    <Link className="collapse-item" to="/management/management/long_kho_0">long_kho_0</Link>
                                    <Link className="collapse-item" to="/management/management/long_kho_0_t0">long_kho_0_t0</Link>
                                    <Link className="collapse-item" to="/management/management/long_kho_1">long_kho_1</Link>
                                    <Link className="collapse-item" to="/management/management/short_kho_0_new">short_kho_0_new</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className={"nav-link" + (isNavItemShow && navItemShowName === portfolioNav ? "" : " collapsed")}
                                href='#'
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded={isNavItemShow && navItemShowName === portfolioNav ? "true" : "false"}
                                aria-controls="collapseTwo"
                                onClick={() => { handleComponentShow(portfolioNav) }}
                            >
                                <i className="fas fa-fw fa-cog" />
                                <span>{portfolioNav}</span>
                            </a>
                            <div
                                id="collapseTwo"
                                className={"collapse" + (isNavItemShow && navItemShowName === portfolioNav ? " show" : "")}
                                aria-labelledby="headingTwo"
                                data-parent="#accordionSidebar"
                            >
                                <div className="bg-white py-2 collapse-inner rounded">
                                    {/* <h6 className="collapse-header"></h6> */}
                                    <Link className="collapse-item" to="/management/portfolio/long_kho_0">long_kho_0</Link>
                                    <Link className="collapse-item" to="/management/portfolio/long_kho_0_t0">long_kho_0_t0</Link>
                                    <Link className="collapse-item" to="/management/portfolio/long_kho_1">long_kho_1</Link>
                                    <Link className="collapse-item" to="/management/portfolio/short_kho_0_new">short_kho_0_new</Link>
                                </div>
                            </div>
                        </li>
                    </>
                }
                {/* Nav Item - Khach hang Collapse Menu */}
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Menu
                </div>
                <li className="nav-item">
                    <a
                        className={"nav-link" + (isNavItemShow && navItemShowName === clientsNav ? "" : " collapsed")}
                        href='#'
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded={isNavItemShow && navItemShowName === clientsNav ? "true" : "false"}
                        aria-controls="collapseTwo"
                        onClick={() => { handleComponentShow(clientsNav) }}
                    >
                        <i className="fas fa-fw fa-cog" />
                        <span>{clientsNav}</span>
                    </a>
                    <div
                        id="collapseTwo"
                        className={"collapse" + (isNavItemShow && navItemShowName === clientsNav ? " show" : "")}
                        aria-labelledby="headingTwo"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            {/* <h6 className="collapse-header"></h6> */}
                            <Link className="collapse-item" to="/clients?brokerName=long_kho_0">long_kho_0</Link>
                            <Link className="collapse-item" to="/clients?brokerName=long_kho_0_t0">long_kho_0_t0</Link>
                            <Link className="collapse-item" to="/clients?brokerName=long_kho_1">long_kho_1</Link>
                            <Link className="collapse-item" to="/clients?brokerName=short_kho_0_new">short_kho_0_new</Link>
                        </div>
                    </div>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => { setIsToggled(!isToggled) }} />
                </div>
                {/* Sidebar Message */}
                <div className="sidebar-card d-none d-lg-flex">
                    <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                </div>
            </ul >
        </>
    )
}
