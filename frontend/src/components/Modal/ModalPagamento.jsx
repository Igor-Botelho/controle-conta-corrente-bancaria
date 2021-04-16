import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CurrencyInput from "react-currency-masked-input";
import { useDispatch } from "react-redux";
import { loadconta } from "../../services/conta/conta.redux";
import { registrarPagamento } from "../../services/registrar-pagamento/registrar-pagamento";
import { consultarTransacoes } from "../../services/transacao/transacao";
import "./modal.css";

function ModalPgamento({ contaId }) {
  const dispatch = useDispatch();

  const [valor, setValor] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [mensagemValidacao, setMensagemValidacao] = useState("");
  const [valorPagamento, setValorPagamento] = useState({ pagamento: 0 });
  const [pagamentoRealizado, setPagamentoRealizado] = useState(false);

  const handleInputChange = (event, linhaDigitavel) => {
    event.persist();

    setValor(linhaDigitavel);
    setMensagemValidacao("");

    setValor((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const inicial = () => {
    return (
      <div>
        <input
          className="input-valor"
          type="number"
          onChange={handleInputChange}
          placeholder="Digite o numero do boleto"
        />
        <ul className="boleto-exemplo-titulo">
          <li>
            <p className="boleto-exemplo-geral">
              <small>Boleto exemplo com valor fixo:</small>
              <br />
              <b>00194444505123456987012159632500085920000000100</b>
            </p>
          </li>
          <li>
            <p className="boleto-exemplo-geral">
              <small>Boleto exemplo com valor digitavel:</small>
              <br />
              <b>00194444505123456987012159632500085920000000000</b>
            </p>
          </li>
        </ul>
      </div>
    );
  };

  const registraBoleto = async (ValorAPagar) => {
    const pagamento = dispatch(
      await registrarPagamento(contaId, ValorAPagar * 100)
    );

    const [payload] = pagamento.payload;

    if (payload && payload.error) {
      setMensagemValidacao(payload.error);
    } else {
      setBody("Pagamento realizado com sucesso!");

      setPagamentoRealizado(true);

      setValorPagamento({ pagamento: 0 });

      dispatch(await loadconta({}));

      dispatch(await consultarTransacoes(contaId));
    }
  };

  const [body, setBody] = useState(inicial());

  const handleInputChangePagamento = (event, valorTotal) => {
    setMensagemValidacao("");
    event.persist();
    setValorPagamento(valorTotal);
  };

  const ValidaBoleto = async () => {
    const [valorAValidar] = Object.values(valor);

    if (valorAValidar) {
      let boletoTamanhoValido;

      if (valorAValidar) {
        boletoTamanhoValido = valorAValidar.length != 47;
      }

      if (boletoTamanhoValido) {
        setMensagemValidacao(
          "Boleto com o tamanho incorreto, deve ter 47 digitos."
        );
      } else {
        let boletoTemValor = false;
        let ValorAPagar = 0;

        if (valorAValidar) {
          const valorBoleto = valorAValidar.slice(-10);

          ValorAPagar = Number(valorBoleto);

          boletoTemValor = ValorAPagar && ValorAPagar > 0;
        }

        if (boletoTemValor) {
          {
            registraBoleto(ValorAPagar);
          }
        } else {
          setMensagemValidacao("");

          setBody(
            <CurrencyInput
              className="input-valor"
              type="number"
              placeholder="0.00"
              min="0.01"
              onChange={handleInputChangePagamento}
            />
          );
        }
      }
      if (valorPagamento > 0) {
        {
          registraBoleto(valorPagamento);
        }
      }
    }
  };

  return (
    <div>
      <Button className="operacao" onClick={() => setModalShow(true)}>
        Pagamento
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
            <span className="ver-mais"> Digite o número do boleto</span>
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
              setModalShow(false);
              setMensagemValidacao("");
              setPagamentoRealizado(false);
              setBody(inicial());
            }}
          >
            Fechar
          </Button>

          {pagamentoRealizado === false ? (
            <Button
              className="modal-butom"
              onClick={async () => {
                ValidaBoleto();
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

ModalPgamento.propTypes = {
  contaId: PropTypes.string,
};

export default ModalPgamento;
