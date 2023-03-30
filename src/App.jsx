import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pagination from '../components/Pagination';
import Edit from '../components/modal';
import Search from '../components/Search';
import CardItem from '../components/CardItem';
import { getCards } from '../components/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState("");
  const [update, setupdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };



  useEffect(() => {





    const fetchData = async () => {
      setLoading(true);


      let url = '';
      if (search === null || search === undefined) {
        url = ` https://db.ygoprodeck.com/api/v7/cardinfo.php?page=${currentPage}&pageSize=${pageSize}`;
      } else {
        // url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=10&offset=1`;
        url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${search}&offset=${currentPage}&num=${pageSize}`;
      }

      console.log(url)


      try {
        const query = url;
        const response = await fetch(query);
        if (response.status === 404) {
          setCurrentPage(1)
          return <p>Ningún resultado encontrado</p>;
        } else {
          const data = await response.json();
          setItems(data.data);
          setTotalItems(data.meta.total_rows);
          setTotalPages(data.meta.total_pages);

        }
        setLoading(false);
      }
      catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, update, pageSize, search]);

  const columns = [
    { title: "id", field: "id" },
    { title: "name", field: "name" },
    { title: "type", field: "type" },
    { title: "frameType", field: "frameType" }
  ];



  return (
    <>
      <div className="row col-9 m-auto mt-5">
        <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="card shadow">
            <div className="card-header py-3">
              <div className="row">
                <div className="col-xxl-9">
                  <p className="text-primary m-0 fw-bold">
                    Información de de cartas
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="row mt-3">
                  <div className="col-md-6 text-nowrap">
                    <div id="dataTable_length" className="dataTables_length">
                      <label className="form-label">
                        Show&nbsp;
                        <select
                          className="d-inline-block form-select form-select-sm"
                          id="numeromax"
                          value={pageSize}
                          onChange={(event) => setPageSize(event.target.value)}
                        >
                          <option value="10" selected>
                            10
                          </option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6 col-xxl-6">
                    <div id="dataTable_filter" className="text-md-end dataTables_filter px-0" ><label class="form-label"><input class="form-control form-control-sm" type="search" aria-controls="dataTable" placeholder="Buscar" name="search" onChange={handleSearch} /></label></div>
                  </div>
                </div>
                {loading && <div class="text-center">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>}
                {!loading && (
                  <div>
                    <div className="table-responsive">
                      <table className="table table-striped my-0">
                        <thead>
                          <tr>
                            {columns.map((col, index) => (
                              <th key={index}>{col.title}</th>
                            ))}
                            <th className="text-center">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {items != null &&

                            items.map((item, index) => (
                              <tr key={index}>
                                {columns.map((col, index) => (
                                  <td key={index}>{item[col.field]}</td>
                                ))}

                                <td className="text-center col-2">



                                <Edit    id={item.id} fields={item} />
                                </td>


                              </tr>


                            ))
                          }

                        </tbody>
                      </table>
                    </div>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      setCurrentPage={setCurrentPage}
                      totalItems={totalItems}
                      pageSize={pageSize}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default App;
