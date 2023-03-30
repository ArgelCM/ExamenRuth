const Pagination = ({ currentPage, totalPages, setCurrentPage, totalItems, pageSize }) => {

  const start = (currentPage - 1) * pageSize + 1;
  const end = start + (pageSize - 1);
  // const visibleCount = end > totalItems ? totalItems - (start - 1) : pageSize;

  let pages = [];
  let showFirstDots = false;
  let showLastDots = false;

  // Si hay menos de 5 páginas, mostrar todas las páginas
  if (totalPages <= 4) {
    pages = [...Array(totalPages)].map((_, i) => i + 1);
  } else {
    // Mostrar las páginas adecuadas en función de la página actual
    if (currentPage <= 3) {
      pages = [1, 2, 3, 4];
      showLastDots = true;
    } else if (currentPage > 3 && currentPage < totalPages - 2) {
      pages = [currentPage - 1, currentPage, currentPage + 1];
      showFirstDots = true;
      showLastDots = true;
    } else {
      pages = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      showFirstDots = true;
    }
  }

  return (
    <div className="row">
      <div className="col-md-6 align-self-center">
        <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">
          Resultados {start} a {end > totalItems ? totalItems : end} de {totalItems}
        </p>
      </div>
      <div className="col-md-6">
        <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
          <ul className="pagination mt-4 float-end">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <span className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</span>
            </li>
            {showFirstDots && <li className="page-item disabled"><span className="page-link">...</span></li>}
            {pages.map(page => (
              <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                <span className="page-link" onClick={() => setCurrentPage(page)}>{page}</span>
              </li>
            ))}
            {showLastDots && <li className="page-item disabled"><span className="page-link">...</span></li>}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <span className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};





export default Pagination;
