import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { maskData, maskValor } from "../../utils";
import "./modal.css";

function ModalListagem({ atualizacoes }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Link to="" className="ver-mais" onClick={() => setModalShow(true)}>
        Ver todas
      </Link>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span className="ver-mais">Ultimas atualizações</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {atualizacoes.map((transacao, index) => {
            return (
              <div key={index} className="item-atualizacao">
                <div className="informacoes">
                  <span>{transacao.tipo}</span>
                  <span> {maskData(transacao.dataHoraTransacao)}</span>
                </div>
                <div className="informacoes">
                  <span>R${maskValor(transacao.valor)}</span>
                  <span>{transacao.status}</span>
                </div>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button className="fechar-modal" onClick={() => setModalShow(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ModalListagem.propTypes = {
  atualizacoes: PropTypes.array,
};

export default ModalListagem;
