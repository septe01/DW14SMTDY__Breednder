// Terimakasih Silakan Tunggu Konfirmasi pembayaran

import React, { Component } from "react"; //useState
import { Row, Col, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

class TransaksiModalSukses extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Modal
          show={this.props.action}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="wait-konfirm"
        >
          <h3>Terimaskasih Silahkan Tunggu konfirmasi.</h3>
        </Modal>
      </>
    );
  }
}

export default TransaksiModalSukses;
