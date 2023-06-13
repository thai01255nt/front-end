export const CreateUser = () => {
    const defaultPassword = Math.random().toString(36).slice(-8)
    return (
        < div className="container-fluid" >
            <div className="row">
                <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Tạo người dùng mới!</h1>
                        </div>
                        <form className="user">
                            <div className="form-group">
                                <input type="text" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address or ID client" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-user" id="exampleInputDefaultPassword" placeholder="Default Password" value={defaultPassword} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-user" id="exampleInputRepeatDefaultPassword" placeholder="Repeat Default Password" value={defaultPassword} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-user" id="exampleInputAdminNameBroker" placeholder="Admin Name Broker" />
                            </div>
                            <a href="login.html" className="btn btn-primary btn-user btn-block">
                                Tạo người dùng
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

