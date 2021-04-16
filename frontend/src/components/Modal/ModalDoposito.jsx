import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CurrencyInput from "react-currency-masked-input";
import { useDispatch } from "react-redux";
import { loadconta } from "../../services/conta/conta.redux";
import { registrarDeposito } from "../../services/registrar-deposito/registrar-deposito";
import { consultarTransacoes } from "../../services/transacao/transacao";
import "./modal.css";
function ModalDeposito({ contaId }) {
  const dispatch = useDispatch();

  const [valor, setValor] = useState({ Deposito: 0 });
  const [modalShow, setModalShow] = useState(false);
  const [operacao, setOperacao] = useState({
    boleto: false,
    transferencia: false,
    preencherValor: true,
  });

  const handleInputChange = (event, valorTotal) => {
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

  return (
    <div>
      <Button className="operacao" onClick={() => setModalShow(true)}>
        Deposito
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
            <span className="ver-mais">Deposito</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="posicao-campo-preenchimento-valor">
          {body}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="modal-butom"
            onClick={() => {
              setModalShow(false);
              setOperacao({
                transferencia: false,
                boleto: false,
                preencherValor: true,
              });
              setBody(inicial());
            }}
          >
            Fechar
          </Button>

          {operacao.transferencia ? (
            <Button
              className="modal-butom"
              onClick={async () => {
                setOperacao({ transferencia: false, boleto: false });
                const { payload } = dispatch(
                  await registrarDeposito(contaId, valor)
                );

                const [responde] = payload;

                dispatch(await loadconta({}));
                dispatch(await consultarTransacoes(contaId));

                setBody(
                  getInformacoesTransferencia(responde.dadosTransferencia)
                );
              }}
            >
              Tranferencia
            </Button>
          ) : null}

          {operacao.boleto ? (
            <Button
              className="modal-butom"
              onClick={async () => {
                setOperacao({ transferencia: false, boleto: false });
                const dado = dispatch(await registrarDeposito(contaId, valor));
                dispatch(await loadconta({}));

                dispatch(await consultarTransacoes(contaId));
                setBody(
                  <div className="body">
                    <span className="informacoes-modal">Linha Digitavel :</span>
                    <span className="boleto">
                      {dado.payload[0].transacaoDeposito.linhaDigitavel}

                      <p className="alet">
                        A transação de deposito por motivos de teste esta sendo
                        refletida no saldo atual mas no bando de dados é salva
                        como `pendente` esperando o pagamento ou transferencia
                        do valor
                      </p>
                    </span>
                  </div>
                );
              }}
            >
              Boleto
            </Button>
          ) : null}

          {operacao.preencherValor ? (
            <Button
              className="modal-butom"
              onClick={async () => {
                if (valor > 0) {
                  setOperacao({
                    boleto: true,
                    transferencia: true,
                    preencherValor: false,
                  });
                  setBody(`R$ ${valor}`);
                }
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

function getInformacoesTransferencia({
  agencia,
  banco,
  cnpj,
  codigo,
  conta,
  nome,
  valor,
}) {
  return (
    <div>
      <p className="informacoes-modal">Informações para depósito</p>
      <div>
        <span>Agencia : </span>
        <span>{agencia}</span>
      </div>

      <div>
        <span>Banco : </span>
        <span>{banco} </span>
      </div>

      <div>
        <span>CNPJ : </span>
        <span>{cnpj}</span>
      </div>

      <div>
        <span>Cod : </span>
        <span>{codigo}</span>
      </div>

      <div>
        <span>Conta : </span>
        <span>{conta}</span>
      </div>

      <div>
        <span>Nome : </span>
        <span>{nome}</span>
      </div>

      <div>
        <span>Valor : </span>
        <span>{valor}</span>
      </div>

      <p className="alet">
        A transação de deposito por motivos de teste esta sendo refletida no
        saldo atual mas no bando de dados é salva como `pendente` esperando o
        pagamento ou transferencia do valor
      </p>
    </div>
  );
}

ModalDeposito.propTypes = {
  contaId: PropTypes.string,
};

export default ModalDeposito;
