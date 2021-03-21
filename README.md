<h1>Marvel Characters</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=Vercel&message=deploy&color=blue&style=for-the-badge&logo=vercel"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=JavaScript&message=ok&color=gren&style=for-the-badge&logo=javaScript"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>


### Tópicos 

:small_blue_diamond: [Descrição da aplicação](#descrição-do-aplicação)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-rocket)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)



## Descrição da aplicação

Uma aplicação Web que consome a [API Marvel](https://developer.marvel.com/) e lista seus personagens e quadrinhos.  


## Funcionalidades

:heavy_check_mark: Navegação na lista de personagens.

:heavy_check_mark: Quadrinhos onde o personagem aparece.

:heavy_check_mark: Quais personagens estão no quadrinho.  

:heavy_check_mark: Descrição de personagens e Quadrinhos.  

## Deploy da aplicação :rocket:

- [Demo](https://marvel-characters-two.vercel.app/pages/1)


## Como rodar a aplicação

Primeiro crie uma conta na [API Marvel](https://developer.marvel.com/) para obter sua chave publica e privada.

No terminal

```
# Para instalar dependencias 

  yarn
  # ou se vc estiver usando NPM 
  npm install

# Criando a variavel de ambiente.
  
  Crie um arquivo .env na raiz do projeto com as seguintes linhas.

  REACT_APP_PUBLIC_KEY='SuaChavePublica'
  REACT_APP_PRIVATE_KEY='SuaChavePrivada'

# Para rodar a aplicação 

  yarn start
  # ou com NPM
  npm run start
```
**A aplicação deve abrir no "http://localhost:3000" 🎉🎉🎉**

## Dependencias utilizadas :books:

- [ReactJS](https://pt-br.reactjs.org/{:target="_blank"}) - Biblioteca UI
- [@Fortawesome](https://fontawesome.com/) -  Icons
- [Axios](https://github.com/axios/axios{:target="_blank"}) - Http requests
- [Crypto-js](https://www.npmjs.com/package/crypto-js) - MD5 para fazer a função do Hash
- [React-loader-spinner](https://github.com/mhnpd/react-loader-spinner) - Animação de Loading da pagina
- [React-router-dom](https://reactrouter.com/web/guides/quick-start) - Navegação de paginas
- [Styled-components](https://styled-components.com/) - CSS na biblioteca JS

## Desenvolvedor

Responsável pelo desenvolvimento do projeto

[<img src="https://avatars.githubusercontent.com/u/71423080?s=460&u=a5c60b93356615006839056572a3cca064879b7b&v=4" width=115><br><sub>Roberto</sub>](https://github.com/robertorsjr) 

