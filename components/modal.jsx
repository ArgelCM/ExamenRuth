import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";

const Edit = (props) => {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

console.log(props.fields.card_set)










  return (
    <>
      <FaRegEye className="text-success mx-2" onClick={handleShow} />

      <div className="modal " style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Visualizar carta #{props.id}</h5>
              <button type="button" className="btn-close" onClick={handleClose} aria-label="Close">
              </button>
            </div>
            <div className="modal-body">

              <div className="row">
                <div className="col-4">

                  <div className="card" >
                    <img src={props.fields.card_images[0].image_url} className="card-img-top" alt="100"/>
                      <div className="card-body">
                        <h5 className="card-title">{props.fields.name}</h5>
                        <p>{props.fields.desc}</p>
                      </div>
                      <ul className="list-group list-group-flush">
                        { props.fields.atk != null &&
                        <li className="list-group-item">{props.fields.atk}</li>
                      }
                        { props.fields.race != null &&

<li className="list-group-item">{props.fields.race}</li>
                        }
                        { props.fields.attribute != null &&
                        <li className="list-group-item">{props.fields.attribute}</li>
                        
                      }
                      { props.fields.archetype != null &&
                        <li className="list-group-item">{props.fields.archetype}</li>
                        
                      }
                      
                      { props.fields.linkval != null &&
                        
                        <li className="list-group-item">{props.fields.linkval}</li>
                      }
                      { props.fields.def != null &&
                        <li className="list-group-item">{props.fields.def}</li>
                        
                      }
                      </ul>
                  </div>

                </div>
                <div className="col-8">

                </div>

              </div>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Edit;
