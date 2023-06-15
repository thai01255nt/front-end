import React from 'react'
import { LeftMenu } from '../LeftMenu/LeftMenu'
import { TopBar } from '../TopBar/TopBar'
import { Route, Routes } from 'react-router'
import { Home } from './Home/Home'
import { ClientPagination, ClientDetail, Portfolio, Management } from './Clients'
import { CreateUser, ListUser, UserClientMembership } from './Users'
import { ResetPassword, ResetPasswordSuccess } from '../Account'

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
                            <Route path='/clients' element = {<ClientPagination/>}></Route>
                            <Route path='/management/management/:brokerName' element = {<Management/>}></Route>
                            <Route path='/management/portfolio/:brokerName' element = {<Portfolio/>}></Route>
                            <Route path='/clients/:id' element = {<ClientDetail/>}></Route>
                            <Route path='/users' element = {<ListUser/>}></Route>
                            <Route path='/users/create' element = {<CreateUser/>}></Route>
                            <Route path='/userClientMemberships/users/:userID/clients' element = {<UserClientMembership/>}></Route>
                            <Route path='/resetPassword' element = {<ResetPassword/>}></Route>
                            <Route path='/resetPasswordSuccess' element = {<ResetPasswordSuccess/>}></Route>
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
