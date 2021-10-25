import React from 'react'
import s from './Paginate.module.scss'
import { NavLink } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink} from 'reactstrap';

const Paginate = ({postPerPage, totalPosts, pagination, currentPage}) => {
    const pageNum = []

    for (let i = 1; i <= Math.round(totalPosts / postPerPage); i++) {
        pageNum.push(i)
    }

    return (
        <Pagination className={s.numbers} aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink first href="#" onClick={() => pagination(1)} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    previous
                    href="#"
                    onClick={() => {currentPage < 1 ? pagination(currentPage - 1) : currentPage = 2}}
                />
            </PaginationItem>
            {
                pageNum.map(number => (
                    <PaginationItem className={s.numbersItem} key={number}>
                        <PaginationLink href='#' onClick={() => pagination(number)}>
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))
            }
            <PaginationItem>
                <PaginationLink
                    next
                    href="#"
                    onClick={() => currentPage > pageNum.length ? pagination(currentPage + 1) : currentPage = pageNum.length}
                />
                </PaginationItem>
                <PaginationItem>
                <PaginationLink
                    last
                    href="#"
                    onClick={() => pagination(pageNum.length)}
                />
            </PaginationItem>
        </Pagination>
    )
}

export default Paginate