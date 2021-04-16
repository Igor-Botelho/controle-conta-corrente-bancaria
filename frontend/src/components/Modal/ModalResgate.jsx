import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CurrencyInput from "react-currency-masked-input";
import { useDispatch } from "react-redux";
import { loadcliente } from "../../services/cliente/cliente.redux";
import { loadconta } from "../../services/conta/conta.redux";
import { registrarResgate } from "../../services/registrar-resgate/registrar-resgate";
import { consultarTransacoes } from "../../services/transacao/transacao";
import "./modal.css";

function ModalResgate({ contaId }) {
  const dispatch = useDispatch();

  const [valor, setValor] = useState({ resgate: 0 });
  const [modalShow, setModalShow] = useState(false);
  const [mensagemValidacao, setMensagemValidacao] = useState("");
  const [resgatado, setResgatado] = useState(false);

  const handleInputChange = (event, valorTotal) => {
    setMensagemValidacao("");
    event.persist();
    setValor(valorTotal);
  };

  const inicial = () => {
    return (
      <CurrencyInput
        className="input-valor"
        type="number"
        placeholder="0.00"
        min="0.01"
        onChange={handleInputChange}
      />
    );
  };

  const [body, setBody] = useState(inicial());

  const resgateAction = async () => {
    const pagamento = dispatch(
      await registrarResgate(contaId, Math.round(valor * 100))
    );

    const [payload] = pagamento.payload;

    if (payload && payload.error) {
      setMensagemValidacao(payload.error);
    } else {
      setMensagemValidacao("");

      dispatch(await loadconta({}));
      const cliente = dispatch(await loadcliente());

      const [contasBancarias] = cliente.payload.contasBancarias;

      dispatch(await consultarTransacoes(contaId));
      setResgatado(true);
      setBody(
        <div>
          <p className="informacoes-modal">
            A transferencia foi realizada para a conta
          </p>
          <p>Banco:{contasBancarias.banco}</p>
          <p>Numero Conta:{contasBancarias.numeroConta}</p>
          <p>Agencia:{contasBancarias.agencia}</p>
          <p>Tipo:{contasBancarias.tipo}</p>
        </div>
      );
    }
  };

  return (
    <div>
      <Button className="operacao" onClick={() => setModalShow(true)}>
        Resgate
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span className="ver-mais">resgate</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="posicao-campo-preenchimento-valor">
          {body}
          <p>{mensagemValidacao}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="modal-butom"
            onClick={() => {
              setMensagemValidacao("");
              setModalShow(false);
              setResgatado(false);
              setBody(inicial());
            }}
          >
            Fechar
          </Button>

          {resgatado === false ? (
            <Button
              className="modal-butom"
              onClick={async () => {
                resgateAction();
              }}
            >
              Confirmar
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ModalResgate.propTypes = {
  contaId: PropTypes.string,
};

export default ModalResgate;
