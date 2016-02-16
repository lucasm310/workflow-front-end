angular.module("cardapio", ["ngclipboard", "ng-currency"]);
angular.module("cardapio").controller("cardapioCtrl", function ($scope) {
	$scope.app = "Cardapio";
	//Alterar os produtos mas manter a formaÃ§Ã£o
	$scope.produtos = [
		{nome: "Yakisoba Carne", valor: "20", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Frango", valor: "20", categoria: "Yakisoba"}, 
		{nome: "Yakisoba SalmÃ£o", valor: "23", categoria: "Yakisoba"}, 
		{nome: "Yakisoba CamarÃ£o", valor: "23", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Carne de Porco", valor: "20", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Carne & Frango", valor: "22", categoria: "Yakisoba"}, 
		{nome: "Yakisoba CamarÃ£o & SalmÃ£o", valor: "26", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Carne , Frango e Carne de Porco", valor: "25", categoria: "Yakisoba"},
		// Sushi
		{nome: "Sushi de Omelete", valor: "15", categoria: "Sushi - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Sushi de Legume", valor: "14", categoria: "Sushi - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Sushi de Atum", valor: "15", categoria: "Sushi - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Sushi de Kani", valor: "16", categoria: "Sushi - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Sushi de SalmÃ£o", valor: "18", categoria: "Sushi - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Sushi de CamarÃ£o", valor: "18", categoria: "Sushi - 8 Unidades por PorÃ§Ã£o"}, 
		// Uramaki
		{nome: "Uramaki Legumes", valor: "15", categoria: "Uramaki - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Uramaki Atum", valor: "16", categoria: "Uramaki - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Uramaki de Kani", valor: "17", categoria: "Uramaki - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Uramaki de SalmÃ£o Coberto", valor: "27", categoria: "Uramaki - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Uramaki de SalmÃ£o", valor: "19", categoria: "Uramaki - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Uramaki de CamarÃ£o", valor: "19", categoria: "Uramaki - 8 Unidades por PorÃ§Ã£o"},
                {nome: "Uramaki de Omelete", valor: "16", categoria: "Uramaki - 8 Unidades por PorÃ§Ã£o"}, 
		//Temaki
		{nome: "Temaki Atum", valor: "17", categoria: "Temaki"}, 
		{nome: "Temaki Kani", valor: "18", categoria: "Temaki"}, 
		{nome: "Temaki SalmÃ£o", valor: "20", categoria: "Temaki"}, 
		{nome: "Temaki CamarÃ£o", valor: "20", categoria: "Temaki"}, 
		{nome: "Temaki SalmÃ£o & CamarÃ£o", valor: "22", categoria: "Temaki"}, 
		{nome: "Temaki Frito Atum", valor: "23", categoria: "Temaki Hot"},
                {nome: "Temaki Frito Kani", valor: "23", categoria: "Temaki Hot"},
                {nome: "Temaki Frito SalmÃ£o", valor: "23", categoria: "Temaki Hot"},
                {nome: "Temaki Frito CamarÃ£o", valor: "23", categoria: "Temaki Hot"},
                {nome: "Temaki Frito SalmÃ£o & CamarÃ£o", valor: "23", categoria: "Temaki Hot"},
                //Hot Roll
		{nome: "Hot Roll de Legumes", valor: "15", categoria: "Hot Roll - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Hot Roll Omelete", valor: "16", categoria: "Hot Roll - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Hot Roll Kani", valor: "17", categoria: "Hot Roll - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Hot Roll CamarÃ£o", valor: "20", categoria: "Hot Roll - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Hot Roll SalmÃ£o", valor: "20", categoria: "Hot Roll - 8 Unidades por PorÃ§Ã£o"}, 
		//Niguiri
		{nome: "Niguiri de Frango", valor: "16", categoria: "Niguiri - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Niguiri SalmÃ£o", valor: "22", categoria: "Niguiri - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Niguiri de Kani", valor: "17", categoria: "Niguiri - 8 Unidades por PorÃ§Ã£o"}, 
		//Sashimi
		{nome: "Sashimi com Cream Cheese", valor: "28", categoria: "Sashimi - 8 Unidades por PorÃ§Ã£o"}, 
		{nome: "Sashimi", valor: "24", categoria: "Sashimi - 8 Unidades por PorÃ§Ã£o"}, 
		//Rolinho Primavera
		{nome: "Rolinho Primavera de SalmÃ£o", valor: "6", categoria: "Rolinho Primavera"}, 
		{nome: "Rolinho Primavera de CamarÃ£o", valor: "6", categoria: "Rolinho Primavera"}, 
		//Arroz Shop Suey
                {nome: "Arroz Shop Suey", valor: "22", categoria: "Arroz Shop Suey"},
                //"Frango Xadrez
		{nome: "Frango Xadrez", valor: "22", categoria: "Frango Xadrez"}, 
		//Katsu Don
		{nome: "Katsu Don", valor: "20", categoria: "Katsu Don"}, 
		//Barca
		{nome: "Barca 1", valor: "88", categoria: "Barca"}, 
		{nome: "Barca 2", valor: "94", categoria: "Barca"}, 
		{nome: "Barca 3", valor: "105", categoria: "Barca"}, 
		{nome: "Barca 4", valor: "125", categoria: "Barca"}, 
		{nome: "Barca 5", valor: "165", categoria: "Barca"}, 
		{nome: "Barca 6", valor: "132", categoria: "Barca"}, 
		{nome: "Barca 7", valor: "125", categoria: "Barca"}, 
		{nome: "Barca 8", valor: "83", categoria: "Barca"}, 
		//Porcoes 15 unidades
		{nome: "15 - Hot Roll Legumes", valor: "30", categoria: "PorÃ§Ãµes de 15 Unidades"},
		{nome: "15 - Sushi e Joy", valor: "45", categoria: "PorÃ§Ãµes de 15 Unidades"},
                {nome: "15 - Super Joy", valor: "56", categoria: "PorÃ§Ãµes de 15 Unidades"},
		//Bento
                {nome: "Teishoku", valor: "32", categoria: "Bento"},
                {nome: "Combinado Pratico", valor: "35", categoria: "Bento"},
                {nome: "Combinado Hot Master", valor: "55", categoria: "Bento"},
                {nome: "Combinado Executivo", valor: "55", categoria: "Bento"},
		];
	/*Alterar abaixo o valor sendo que tem quer ser no padrÃ£o (3.00)
	Alterar abaixo ativo com sim ou nÃ£o (para promoÃ§Ã£o)*/
	$scope.entrega = {valor: 3.00, ativo: "sim"};

/*-------------------------------------------------------------------------------------------------------------*/

	//NÃ£o Aterar abaixo.
	$scope.pedidos = [
	];
	$scope.endereco = '';
	$scope.pgtos = [
	{forma: "Dinheiro"},
	{forma: "CartÃ£o"},
	];
	$scope.troco = '';
	$scope.adicionarProduto = function (pedido) {
				$scope.pedidos.push(angular.copy(pedido));
				delete $scope.pedido;
			};
	
	$scope.invoiceCount = 0;
    $scope.invoiceTotal = 0;
    if ($scope.entrega.ativo == 'sim') {
    	$scope.invoiceTotal += $scope.entrega.valor;
    }

    $scope.setTotals = function(pedido){
        if (pedido){
            pedido.total = pedido.qtd * pedido.produto.valor;
            $scope.invoiceCount += pedido.qtd;
            $scope.invoiceTotal += pedido.total;
        };
    };
    $scope.apagarPedidos = function (pedidos) {
		$scope.pedidos = pedidos.filter(function (pedido) {
			if (!pedido.selecionado) return pedido;
			$scope.invoiceTotal -= pedido.total;
		});
	};
	$scope.isPedidoSelecionado = function (pedidos) {
		return pedidos.some(function (pedido) {

			return pedido.selecionado;
		});
	};

});