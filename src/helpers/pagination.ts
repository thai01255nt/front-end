export interface IPagination<T> {
    total: number,
    page: number,
    pageSize: number,
    data: T[]
}
