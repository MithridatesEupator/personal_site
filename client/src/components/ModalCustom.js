import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class ModalCustom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Button outline color="primary" onClick={this.toggle} className="modal-button">
          Open
        </Button>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader className="modal-edges">
            Modal Title
          </ModalHeader>
          <ModalBody className="modal-body">
            This is a test and it should work.
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle} className="modal-edges">
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

}

export default ModalCustom;
