import { Dispatch } from "react"
import { ClientActionTypes, LOAD_CLIENTS_PAGING_REQUEST, LOAD_CLIENTS_PAGING_SUCCESS, LOAD_CLIENTS_PAGING_FAILURE, LOAD_CLIENT_DETAIL_REQUEST, LOAD_CLIENT_DETAIL_SUCCESS, LOAD_CLIENT_DETAIL_FAILURE } from "./types"
import { clientService } from "../../services"

export const loadClientPagination = (page: number, pageSize: number, brokerName: string | null) => {
    return async (dispatch: Dispatch<ClientActionTypes>) => {
        dispatch({
            type: LOAD_CLIENTS_PAGING_REQUEST,
        })
        await clientService.loadClientPagination(page = page, pageSize = pageSize, brokerName = brokerName).then((res) => {
            dispatch({
                type: LOAD_CLIENTS_PAGING_SUCCESS,
                payload: res.data.map((r: any)=> {
                    return {
                        "Tài khoản": r.idClient,
                        "Tên": r.nameClient,
                        "Lãi suất": r.interestRate,
                        "Phí mua": r.costBuy,
                        "Phí bán": r.costSell,
                    }
                })
            });
            return {}
        },
            (error) => {
                dispatch({
                    type: LOAD_CLIENTS_PAGING_FAILURE,
                    payload: error.data
                })
                return
            }
        )
        return
    }
}

export const loadClientDetail = (idClient: string) => {
    const extractData = (data: any) =>{
        const results = {} as any
        for (var key in data){
            if (key === "assets"){
                const records = data[key]
                results["BÁO CÁO TÀI SẢN"] = records.map((r: any)=>(
                    {
                        "Tổng tiền vay TB": r.totalValueLoan,
                        "Tiền nộp cọc": r.deposit,
                        "Lãi lỗ đã thực hiện": r.realisedPNL,
                        "Lãi lỗ chưa thực hiện": r.expectedPNL,
                        "Cọc phải nộp": r.minDeposite,
                        "NAV hiện tại": r.nav
                    }
                ))
            }
        }
    }
    return async (dispatch: Dispatch<ClientActionTypes>) => {
        dispatch({
            type: LOAD_CLIENT_DETAIL_REQUEST,
        })
        await clientService.loadClientDetail(idClient).then((res) => {
            dispatch({
                type: LOAD_CLIENT_DETAIL_SUCCESS,
                payload: res.data.map((r: any)=>{
                    
                })
            });
            return {}
        },
            (error) => {
                dispatch({
                    type: LOAD_CLIENT_DETAIL_FAILURE,
                    payload: error.data
                })
                return
            }
        )
        return
    }
}
