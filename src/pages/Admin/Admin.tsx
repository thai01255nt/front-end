import React from 'react'
import { LeftMenu } from '../LeftMenu/LeftMenu'
import { TopBar } from '../TopBar/TopBar'
import { Route, Routes } from 'react-router'
import { Home } from './Home/Home'
import { ClientPNL, User } from './Clients'
export const Admin = () => {
    return (
        <>
            <LeftMenu />
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    <TopBar />
                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        <Routes>
                            <Route path='/' element = {<Home/>}></Route>
                            <Route path='/users' element = {<User/>}></Route>
                            <Route path='/clients/pnl' element = {<ClientPNL/>}></Route>
                        </Routes>
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
                {/* Footer */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright © Your Website 2021</span>
                        </div>
                    </div>
                </footer>
                {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
        </>
    )
}
