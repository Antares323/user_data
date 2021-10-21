import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pages = ({postPerPage, totalPosts, paginate}) => {
    const pageNum = []

    for (let i = 1; i <= Math.round(totalPosts / postPerPage); i++) {
        pageNum.push(i)
    }

    return (
        <Pagination aria-label="Page navigation example">
            {
                pageNum.map(number => (
                    <PaginationItem key={number}>
                        <PaginationLink href={number} onClick={() => paginate(number)}>
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))
            }
        </Pagination>
    )
}

export default Pages