import React, { useState } from 'react'

function AboutPage() {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState({})

  function handleSearch() {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => setEndereco(data))
      .catch(error => console.log(error))
  }

  return (
    <div className="iphone-xs">
      <div className="header">
        <h1 className="title">Sobre mim</h1>
      </div>
      <div className="content">
        <div className="form-group">
          <label htmlFor="cep">Meu CEP:</label>
          <input
            type="text"
            id="cep"
            placeholder="Digite o CEP aqui"
            value={cep}
            onChange={event => setCep(event.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
        {endereco.logradouro && (
          <div className="endereco">
            <p>
              <strong>Endereço:</strong> {endereco.logradouro}
            </p>
            <p>
              <strong>Bairro:</strong> {endereco.bairro}
            </p>
            <p>
              <strong>Cidade:</strong> {endereco.localidade} - {endereco.uf}
            </p>
          </div>
        )}
        {endereco.erro && (
          <div className="erro">
            <p>
              O CEP informado não foi encontrado. Por favor, verifique se o CEP
              está correto e tente novamente.
            </p>
          </div>
        )}
        {!endereco.logradouro && !endereco.erro && (
          <div className="instrucoes">
            <p>
              Digite o seu CEP acima para descobrir o seu endereço completo.
            </p>
          </div>
        )}
      </div>
      <div className="footer">
        <p>
          Desenvolvido por <a href="https://example.com">Seu nome aqui</a> -
          Todos os direitos reservados © 2023
        </p>
      </div>
    </div>
  )
}

export default AboutPage
