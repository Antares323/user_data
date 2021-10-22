import React from 'react'
import { NavLink } from 'react-router-dom';
import { Pagination, PaginationItem} from 'reactstrap';

const Paginate = ({postPerPage, totalPosts, pagination}) => {
    const pageNum = []

    for (let i = 1; i <= Math.round(totalPosts / postPerPage); i++) {
        pageNum.push(i)
    }

    return (
        <Pagination aria-label="Page navigation example">
            {
                pageNum.map(number => (
                    <PaginationItem key={number}>
                        <NavLink to={"/" + number} onClick={() => pagination(number)}>
                            {number}
                        </NavLink>
                    </PaginationItem>
                ))
            }
        </Pagination>
    )
}

export default Paginate