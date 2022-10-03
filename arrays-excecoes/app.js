try{
    const ListaDeProdutosDisponiveis =[
        "pao",
        "leite",
        "cafe",
        "laranja",
        "macarrao",
        "sabonete",
        "detergente"
    ];

    const ListaDeArgumentos = process.argv.slice(2);

    const ListaDeprodutosSolicitadosDisponiveis = ListaDeProdutosDisponiveis.filter(produto => {
        return ListaDeArgumentos.find(argumento => argumento === produto);
    });
    ListaDeprodutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));

    const ListaDeprodutosSolicitadosNaoDisponiveis = ListaDeArgumentos.filter(argumento => { 
        return !ListaDeProdutosDisponiveis.find(produto => produto === argumento);
    });
    ListaDeprodutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produtos nao temos: ${argumento}`));  
    
    ListaDeProdutosDisponiveis.sort();
    ListaDeProdutosDisponiveis.forEach(produto => console.log(`Este produtos esta disponivel: ${produto}`));
}catch(e){
    console.log('Nao foi possivel excutar pedido de compra');
}        