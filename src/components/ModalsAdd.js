import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const ModalsAdd = (props) => {
  const {shows, handleClose} = props;
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  const handleSave = () => {
    console.log(name, job);
  }
    return (
    <>

      <Modal show={shows} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="mb-3">
    <label type='text' className="form-label">Name: </label>
    <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)}/>
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Job</label>
    <input type="text" className="form-control" value={job} onChange={(event) => setJob(event.target.value)}/>
  </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleSave()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default ModalsAdd;