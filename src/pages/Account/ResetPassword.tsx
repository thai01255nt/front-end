import React, { useState } from 'react'
import { userService } from '../../services';
import { useNavigate } from 'react-router';


export const ResetPassword = () => {
    const navigator = useNavigate()
    const defaultErrors = {
        oldPassword: null as any,
        newPassword: null as any,
        repeatNewPassword: null as any,
    }
    const [errors, setErrors] = useState(defaultErrors)
    const onClick = async () => {
        const oldPassword = $('#oldPasswordInput').val() as string;
        const newPassword = $('#newPasswordInput').val() as string;
        const repeatNewPassword = $('#repeatNewPasswordInput').val() as string;
        await userService.resetPassword(oldPassword, newPassword, repeatNewPassword).then(
            (res) => { navigator("/resetPasswordSuccess") },
            (error) => { if (!error.data?.errors) { alert("unknown error, contact for support") } setErrors(error.data?.errors) }
        )
    }
    return (
        <div className="container col-lg-7">
            {/* Outer Row */}
            {/* <div className="row justify-content-center"> */}
            <form className="user">
                <div className="form-group">
                    <input
                        type="text"
                        className={"form-control form-control-user " + (errors.oldPassword ? 'is-invalid' : '')}
                        id="oldPasswordInput"
                        aria-describedby="emailHelp"
                        placeholder="mật khẩu cũ"
                        name="oldPassword"
                    />
                    {(errors.oldPassword && <div className='invalid-feedback'>{errors.oldPassword.join("\n")}</div>)}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className={"form-control form-control-user " + (errors.newPassword ? 'is-invalid' : '')}
                        id="newPasswordInput"
                        placeholder="Mật khẩu mới"
                        name="newPassword"
                    />
                    {(errors.newPassword && <div className='invalid-feedback'>{errors.newPassword.join("\n")}</div>)}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className={"form-control form-control-user " + (errors.repeatNewPassword ? 'is-invalid' : '')}
                        id="repeatNewPasswordInput"
                        placeholder="Nhập lại mật khẩu mới"
                        name="repeatNewPassword"
                    />
                    {(errors.repeatNewPassword && <div className='invalid-feedback'>{errors.repeatNewPassword.join("\n")}</div>)}
                </div>
            </form>
            <a className="btn btn-primary btn-user btn-block">
                Đổi mật khẩu
            </a>
            {/* </div> */}
        </div>
    )
}
