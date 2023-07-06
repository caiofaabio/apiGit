# Projeto de Consumo de API com Axios

![Captura de tela 2023-07-06 182138](https://github.com/caiofaabio/apiGit/assets/109986771/b81f9094-ddbb-4b17-aab6-a97d812fe312)


Este é um projeto desenvolvido em React que utiliza a biblioteca Axios para consumir uma API e exibir os projetos de um usuário no GitHub. O objetivo é permitir que os usuários pesquisem um nome de usuário e obtenham uma lista dos projetos associados a esse usuário.
Recursos Utilizados

# O projeto utiliza os seguintes recursos:

    react-icons/hi2: Importa o ícone HiMiniMagnifyingGlass da biblioteca react-icons, que é utilizado para exibir um ícone de lupa no botão de busca.

    UseHook: Importa o hook personalizado UseHook do arquivo useHook.js, que contém a lógica para lidar com a busca do usuário, a chamada à API e o 
    gerenciamento do estado dos projetos.

    App.css: Importa o arquivo CSS App.css, que contém estilos personalizados para a aplicação.

# Componente App

## O componente App é a raiz da aplicação e é responsável por renderizar a interface do usuário. Ele contém os seguintes elementos:

    h2: Exibe o título "Consumindo Api com Axios".

    input: Permite que o usuário digite o nome do usuário do GitHub que deseja pesquisar.

    button: Ao ser clicado, dispara a função fetchRepos que realiza a chamada à API para buscar os projetos do usuário.

    h4: Exibe o texto "Todos os projetos no GitHub:".

    Condicional de renderização:

        loading: Se a variável loading for verdadeira, exibe o texto "Loading..." para indicar que a busca está em andamento.

        notFound: Se a variável notFound for verdadeira, exibe o texto "Usuário não encontrado!" para indicar que o usuário pesquisado não foi encontrado.

        showProjects > 0: Se a variável showProjects for maior que zero, ou seja, se foram encontrados projetos para o usuário pesquisado, exibe a lista de projetos. 
        Caso contrário, não exibe nada.

    div com a classe projetos: Contém a lista de projetos obtidos da API.

    repos.map: Itera sobre a lista de projetos (repos) e renderiza um elemento div para cada projeto encontrado. Cada elemento possui as seguintes informações:
        h5: Exibe o nome do projeto.
        p: Exibe a data de criação do projeto.
        a: Cria um link para o repositório do projeto no GitHub, que é aberto em uma nova aba.

# Conclusão

Esse projeto é um exemplo simples de como consumir uma API utilizando a biblioteca Axios no React. Ele permite que os usuários pesquisem um nome de usuário do 
GitHub e obtenham uma lista dos projetos associados a esse usuário. Através desse exemplo, você pode aprender como fazer chamadas assíncronas a APIs e como exibir os 
resultados obtidos na interface do usuário.
