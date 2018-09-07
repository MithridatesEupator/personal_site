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
          {this.props.buttonName}
        </Button>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader className="modal-edges">
            Experiences
          </ModalHeader>
          <ModalBody className="modal-body">
          <ul>
            <li>
              Javascript
              <ul>
                <li>
                  React.js
                  </li>
                  <li>
                  node.js
                  </li>
                </ul>
            </li>
            <li>
              Java
            </li>
            <li>
              C#
            </li>
            <li>
              python
              <ul>
                <li>
                Django
                </li>
              </ul>
            </li>
          </ul>
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
