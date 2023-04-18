import ReactPaginate from "react-paginate"

export const Pagination=({
    handlePageClick
})=>{
    return(
        <>
             <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={30}
                previousLabel="previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
            />
        </>
    )
}