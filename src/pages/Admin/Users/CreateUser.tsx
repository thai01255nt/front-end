import { useNavigate } from "react-router-dom"
import { userService } from "../../../services"
import $ from 'jquery'
import { useState } from "react"

export const CreateUser = () => {
    const defaultPassword = Math.random().toString(36).slice(-8)
    const navigate = useNavigate()
    const defaultErrors = {
        email: null as any,
        defaultPassword: null as any,
        repeatDefaultPassword: null as any,
        adminNameBroker: null as any
    }
    const [errors, setErrors] = useState(defaultErrors)
    const onClick = async () => {
        const email = $('#inputEmail').val() as string;
        const defaultPassword = $('#inputDefaultPassword').val() as string;
        const repeatDefaultPassword = $('#inputRepeatDefaultPassword').val() as string;
        let adminNameBroker = $('#inputAdminNameBroker').val() as string | undefined
        adminNameBroker = adminNameBroker === "" ? undefined : adminNameBroker
        // ($('#inputAdminNameBroker').val() || undefined) as string | undefined;
        await userService.createUser(email, defaultPassword, repeatDefaultPassword, adminNameBroker).then(
            (res) => { navigate(`/userClientMemberships/users/${res.data.data.id}/clients`); console.log(res)},
            (error) => { if (!error.data?.errors) { alert("unknown error, contact for support") } setErrors(error.data?.errors) }
        )
    }
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
                                <input type="text" className={"form-control form-control-user " + (errors.email ? 'is-invalid' : '')} id="inputEmail" placeholder="Email Address or ID client" />
                                {(errors.email && <div className='invalid-feedback'>{errors.email.join("\n")}</div>)}
                            </div>
                            <div className="form-group">
                                <input type="text" className={"form-control form-control-user" + (errors.defaultPassword ? 'is-invalid' : '')} id="inputDefaultPassword" placeholder="Default Password" defaultValue={defaultPassword} />
                                {(errors.defaultPassword && <div className='invalid-feedback'>{errors.defaultPassword.join("\n")}</div>)}
                            </div>
                            <div className="form-group">
                                <input type="text" className={"form-control form-control-user" + (errors.repeatDefaultPassword ? 'is-invalid' : '')} id="inputRepeatDefaultPassword" placeholder="Repeat Default Password" defaultValue={defaultPassword} />
                                {(errors.repeatDefaultPassword && <div className='invalid-feedback'>{errors.repeatDefaultPassword.join("\n")}</div>)}
                            </div>
                            <div className="form-group">
                                <input type="text" className={"form-control form-control-user" + (errors.adminNameBroker ? 'is-invalid' : '')} id="inputAdminNameBroker" placeholder="Admin Name Broker" />
                                {(errors.adminNameBroker && <div className='invalid-feedback'>{errors.adminNameBroker.join("\n")}</div>)}
                            </div>
                            <a className="btn btn-primary btn-user btn-block" onClick={onClick}>
                                Tạo người dùng
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

