import { Dispatch } from "react"
import { ClientActionTypes, LOAD_CLIENTS_PAGING_REQUEST, LOAD_CLIENTS_PAGING_SUCCESS, LOAD_CLIENTS_PAGING_FAILURE, LOAD_CLIENT_DETAIL_REQUEST, LOAD_CLIENT_DETAIL_SUCCESS, LOAD_CLIENT_DETAIL_FAILURE } from "./types"
import { clientService } from "../../services"

export const loadClientPagination = (page: number, pageSize: number, brokerName: string | null) => {
    return async (dispatch: Dispatch<ClientActionTypes>) => {
        dispatch({
            type: LOAD_CLIENTS_PAGING_REQUEST,
        })
        await clientService.loadClientPagination(page = page, pageSize = pageSize, brokerName = brokerName).then((res) => {
            // res.data.data = res.data.data.map((r: any)=> (
            //     {
            //         "Tài khoản": r.idClient,
            //         "Tên": r.nameClient,
            //         "Lãi suất": r.interestRate,
            //         "Phí mua": r.costBuy,
            //         "Phí bán": r.costSell,
            //     }
            // ))
            dispatch({
                type: LOAD_CLIENTS_PAGING_SUCCESS,
                payload: res.data
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
    const extractData = (data: any) => {
        for (var key in data) {
            if (key === "assets") {
                const map = {
                    totalValueLoan: "Tổng tiền vay TB",
                    deposit: "Tiền nộp cọc",
                    realisedPNL: "Lãi lỗ đã thực hiện",
                    expectedPNL: "Lãi lỗ chưa thực hiện",
                    minDeposit: "Cọc phải nộp",
                    nav: "NAV hiện tại",
                    coverageRatio : "Tỷ lệ đảm bảo (%)",
                    remain: "Còn lại",
                    pnl: "Lãi/Lỗ",
                    purchasingPower: "Sức mua",
                } as any
                const records = data[key]
                records.schema = records.schema.map((r: any) => (map[r] ? map[r]: r))
            }
            else if (key === "portfolio") {
                const map = {
                    ticker: "Mã chứng khoán",
                    quantity: "Số lượng",
                    quantityAvailable: "Khả dụng",
                    priceBuy: "Giá mua",
                    priceSell: "Giá bán",
                    totalValueBuy: "Tổng tiền mua",
                    totalValueSell: "Tổng tiền bán",
                    pnl: "Lãi/Lỗ"
                } as any
                const records = data[key]
                records.schema = records.schema.map((r: any) => (map[r] ? map[r]: r))
            }
            else if (key === "deposite") {
                const map = {
                    date: "Ngày",
                    deposit: "Tiền cọc",
                } as any
                const records = data[key]
                records.schema = records.schema.map((r: any) => (map[r] ? map[r]: r))
            }
            else if (key === "expectedPNL") {
                const map = {
                    dateBuy: "Ngày mua",
                    dateSell: "Ngày bán",
                    ticker: "Mã chứng khoán",
                    quantity: "Số lượng",
                    quantityAvailable: "Khả dụng",
                    priceBuy: "Giá mua",
                    priceSell: "Giá bán",
                    totalValueBuy: "Tổng tiền mua",
                    totalValueSell: "Tổng tiền bán",
                    totalValueLoan: "Tổng tiền vay",
                    costBuy: "Phí mua (0.15%)",
                    costSell: "Phí mua (0.25%)",
                    nDayLoan: "Số ngày vay",
                    nDayAdvance: "Số ngày ứng",
                    costLoanFromDayLoan: "Phí vay từ ngày vay",
                    costLoanFromDayAdvance: "Phí vay từ ngày ứng",
                    costLoan: "Phí vay",
                    pnl: "Lãi/Lỗ",
                    depositRatio: "Tỷ lệ cọc",
                    minDeposit: "Cọc phải nộp",
                } as any
                const records = data[key]
                records.schema = records.schema.map((r: any) => (map[r] ? map[r]: r))
            }
            else if (key === "realisedPNL") {
                const map = {
                    dateBuy: "Ngày mua",
                    dateSell: "Ngày bán",
                    ticker: "Mã chứng khoán",
                    quantity: "Số lượng",
                    priceBuy: "Giá mua",
                    priceSell: "Giá bán",
                    totalValueBuy: "Tổng tiền mua",
                    totalValueSell: "Tổng tiền bán",
                    totalValueLoan: "Tổng tiền vay",
                    costBuy: "Phí mua (0.15%)",
                    costSell: "Phí mua (0.25%)",
                    nDayLoan: "Số ngày vay",
                    nDayAdvance: "Số ngày ứng",
                    costLoanFromDayLoan: "Phí vay từ ngày vay",
                    costLoanFromDayAdvance: "Phí vay từ ngày ứng",
                    costLoan: "Phí vay",
                    pnl: "Lãi/Lỗ",
                } as any
                const records = data[key]
                records.schema = records.schema.map((r: any) => (map[r] ? map[r]: r))
            }
        }
        return data
    }
    return async (dispatch: Dispatch<ClientActionTypes>) => {
        dispatch({
            type: LOAD_CLIENT_DETAIL_REQUEST,
        })
        await clientService.loadClientDetail(idClient).then((res) => {
            res.data.data = extractData(res.data.data)
            dispatch({
                type: LOAD_CLIENT_DETAIL_SUCCESS,
                payload: res.data
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
