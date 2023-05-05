import { useState } from 'react'

type PaginationProps = {
    onPageChanged: Function,
    pageSize: number,
    total: number,
    pageLimit: number,
}

export const Pagination = (props: PaginationProps) => {
    const { pageSize, total, pageLimit } = props
    const [currentPage, setCurrentPage] = useState<number>(1)
    const totalPages = Math.ceil(total / pageSize)
    var startPage = Math.max(currentPage - pageLimit, 1)
    var endPage = Math.min(currentPage + pageLimit, totalPages)

    const range = (from: number, to: number, step = 1) => {
        let i = from
        const range = []
        while (i <= to) {
            range.push(i)
            i += step
        }
        return range
    }
    const pages = range(startPage, endPage)
    const handleClick = (page: number) => {
        setCurrentPage(page)
        props.onPageChanged(page)
    }
    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disable' : ''}`}>
                    <button className="page-link" onClick={()=> handleClick(currentPage)}>
                    Trước
                    </button>
                </li>
                {pages.map((page, index) => {
                    return (
                        <li
                        key={index}
                        className={`page-item ${currentPage === page ? 'active': ''}`}
                        >
                        <button className='page-link' onClick={()=> handleClick(page)} >
                            {page}
                        </button>
                        </li>
                    )
                })}
                <li className={`page-item ${currentPage === totalPages ? 'disable' : ''}`}>
                    <button className="page-link" onClick={()=> handleClick(totalPages)}>
                    Cuối
                    </button>
                </li>
            </ul>
        </nav>

    )
}