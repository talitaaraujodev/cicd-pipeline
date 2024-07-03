<div align="center">

# Automatização de Pipelines com AWS EC2 + Nginx + GitHub Actions + Docker e Docker Hub

Este é um mini projeto de exemplo de como automatizar pipelines com as tecnologias acima e otimizar esse processo

</div>

## Como funcionam os Workflows da Aplicação? 👋

### Workflow CI

O primeiro workflow CI é executado quando uma Pull Request (PR) é aberta para a branch main e realiza as seguintes tarefas:

- Execução dos testes;
- Login no Docker Hub;
- Build da nova imagem;
- Push da imagem para a conta do Docker Hub;

### Workflow CD

O segundo workflow CD é executado quando o primeiro workflow é finalizado com sucesso e realiza as seguintes tarefas:

- Faz o pull da imagem Docker mais recente do Docker Hub;
- Garante que a porta 5001 esteja livre;
- Executa um novo contêiner na porta 5001 e espera o contêiner ficar estável;
- Testa o novo deploy temporário na porta 5001;
- Atualiza temporariamente o tráfego no Nginx para a porta 5001;
- Garante que a porta 5000 esteja livre;
- Remove o contêiner antigo, se existir;
- Executa o novo contêiner na porta 5000 e espera o contêiner ficar estável;
- Testa o novo deploy na porta 5000;
- Atualiza o Nginx para apontar de volta para a porta 5000;
- Remove o contêiner na porta 5001;

## Considerações ✨

### Estratégia Utilizada

Essa é uma estratégia de deploy azul-verde (blue-green deployment). Ele lança uma nova versão do aplicativo em um novo contêiner (porta 5001), testa-o, e, se estiver tudo funcionando corretamente, muda temporariamente o balanceador de carga (Nginx) para apontar para o novo contêiner. Em seguida, para e remove o contêiner antigo, lança a nova versão na porta original (5000), testa novamente, e finalmente atualiza o balanceador de carga para apontar para a nova versão.

### O que é Estratégia Azul-Verde (Blue-Green Deployment)?

**Como Funciona?**

- **Dois Ambientes Idênticos:** Mantenha dois ambientes de produção idênticos, denominados "azul" e "verde";
- **Novo Deploy no Ambiente Inativo:** A nova versão do aplicativo é implantada no ambiente inativo (por exemplo, ambiente verde) enquanto o ambiente ativo (por exemplo, ambiente azul) continua a servir o tráfego;
- **Testes no Novo Ambiente:** Realize testes no novo ambiente para garantir que ele funciona corretamente;
- Troca de Tráfego: Uma vez que a nova versão é validada, o tráfego é direcionado para o novo ambiente (verde), tornando-o ativo;
- **Rollback Fácil:** Em caso de problemas, o tráfego pode ser rapidamente revertido para o ambiente original (azul), garantindo um rollback rápido.

**Vantagens** ✅

- **Zero Downtime:** Minimiza o tempo de inatividade durante a implantação;
- **Rollback Rápido:** Fácil reversão para a versão anterior em caso de falhas;
- **Ambientes Idênticos:** Consistência entre os ambientes de produção;

**Desvantagens** ❎

- **Custo:** Manter dois ambientes de produção idênticos pode ser caro;
- **Complexidade:** Requer uma infraestrutura que suporte dois ambientes completos;

<br><br>

### 👩🏽‍💻 Desenvolvido por Talita Araujo

<div align="left">
  <a href = "mailto:talitacumi.araujo@gmail.com"><img src="https://img.shields.io/badge/-Gmail-db4a39?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/talitaaraujodev" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
</div>
