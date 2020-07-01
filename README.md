## Sobre

Esta aplicação foi desenvolvida para o teste do recrutamento da Compasso. É uma aplicação singlepage que consulta a API do The New York Times e apresenta para o usuário artigos das categorias Ciência e Tecnologia. O usuário pode visualizar de forma agrupada ou categorizada.

O projeto não usa nenhuma biblioteca de UI devido a baixa complexidade visual e de suas features. Foi criado com o Create React App, testado com RTL e faz uso do redux para controle de estado.

Para garantir uma melhor performance de carregamento, só são exibidas imagens de artigos em que a API retorna a o formato thumbnail (75x75), imagens maiores não serão exibidas.

Tudo foi feito de forma responsiva para atender dispositivos mobile e desktop.

## Comandos disponíveis

No diretório do projeto, você pode executar:

### `npm install`

Instala as dependências do projeto.

### `npm start`

Executa a aplicação em modo de desenvolvimento.<br />
Abra http://localhost:3000 para visualizar no navegador.

### `npm test -- --coverage`

Executa os teste e apresenta cobertura.<br />

### `npm run build`

Gera os arquivos para produção na pasta build.<br />