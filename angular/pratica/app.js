angular.module("cardapio", []);
angular.module("cardapio").controller("cardapioCtrl", function ($scope) {
	$scope.app = "Cardapio";
	//Alterar os produtos mas manter a formação
	$scope.produtos = [
		{nome: "Yakisoba Carne", valor: "20", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Frango", valor: "20", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Salmão", valor: "23", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Camarão", valor: "23", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Carne de Porco", valor: "20", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Carne & Frango", valor: "22", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Camarão & Salmão", valor: "26", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Carne , Frango e Carne de Porco", valor: "25", categoria: "Yakisoba"},
		// Sushi
		{nome: "Sushi de Omelete", valor: "15", categoria: "Sushi"}, 
		{nome: "Sushi de Legume", valor: "14", categoria: "Sushi"}, 
		{nome: "Sushi de Atum", valor: "15", categoria: "Sushi"}, 
		{nome: "Sushi de Kani", valor: "16", categoria: "Sushi"}, 
		{nome: "Sushi de Salmão", valor: "18", categoria: "Sushi"}, 
		{nome: "Sushi de Camarão", valor: "18", categoria: "Sushi"}, 
		// Uramaki
		{nome: "Uramaki Legumes", valor: "15", categoria: "Urumaki"}, 
		{nome: "Uramaki Atum", valor: "16", categoria: "Urumaki"}, 
		{nome: "Uramaki de Kani", valor: "17", categoria: "Urumaki"}, 
		{nome: "Uramaki de Salmão Coberto", valor: "27", categoria: "Urumaki"}, 
		{nome: "Uramaki de Salmão", valor: "19", categoria: "Urumaki"}, 
		{nome: "Uramaki de Camarão", valor: "19", categoria: "Urumaki"},
                {nome: "Uramaki de Omelete", valor: "16", categoria: "Urumaki"}, 
		//Temaki
		{nome: "Temaki Atum", valor: "17", categoria: "Temaki"}, 
		{nome: "Temaki Kani", valor: "18", categoria: "Temaki"}, 
		{nome: "Temaki Salmão", valor: "20", categoria: "Temaki"}, 
		{nome: "Temaki Camarão", valor: "20", categoria: "Temaki"}, 
		{nome: "Temaki Salmão & Camarão", valor: "22", categoria: "Temaki"}, 
		{nome: "Temaki Frito Atum", valor: "23", categoria: "Temaki Hot"},
                {nome: "Temaki Frito Kani", valor: "23", categoria: "Temaki Hot"},
                {nome: "Temaki Frito Salmão", valor: "23", categoria: "Temaki Hot"},
                {nome: "Temaki Frito Camarão", valor: "23", categoria: "Temaki Hot"},
                {nome: "Temaki Frito Salmão & Camarão", valor: "23", categoria: "Temaki Hot"},
                //Hot Roll
		{nome: "Hot Roll de Legumes", valor: "15", categoria: "Hot Roll"}, 
		{nome: "Hot Roll Omelete", valor: "16", categoria: "Hot Roll"}, 
		{nome: "Hot Roll Kani", valor: "17", categoria: "Hot Roll"}, 
		{nome: "Hot Roll Camarão", valor: "20", categoria: "Hot Roll"}, 
		{nome: "Hot Roll Salmão", valor: "20", categoria: "Hot Roll"}, 
		//Niguiri
		{nome: "Niguiri de Frango", valor: "16", categoria: "Niguiri"}, 
		{nome: "Niguiri Salmão", valor: "22", categoria: "Niguiri"}, 
		{nome: "Niguiri de Kani", valor: "17", categoria: "Niguiri"}, 
		//Sashimi
		{nome: "Sashimi com Cream Cheese", valor: "28", categoria: "Sashimi"}, 
		{nome: "Sashimi", valor: "24", categoria: "Sashimi"}, 
		//Rolinho Primavera
		{nome: "Rolinho Primavera de Salmão", valor: "6", categoria: "Rolinho Primavera"}, 
		{nome: "Rolinho Primavera de Camarão", valor: "6", categoria: "Rolinho Primavera"}, 
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
		{nome: "15 - Hot Roll Legumes", valor: "30", categoria: "Porções de 15 Unidades"},
		{nome: "15 - Sushi e Joy", valor: "45", categoria: "Porções de 15 Unidades"},
                {nome: "15 - Super Joy", valor: "56", categoria: "Porções de 15 Unidades"},
		//Bento
                {nome: "Teishoku", valor: "32", categoria: "Bento"},
                {nome: "Combinado Pratico", valor: "35", categoria: "Bento"},
                {nome: "Combinado Hot Master", valor: "55", categoria: "Bento"},
                {nome: "Combinado Executivo", valor: "55", categoria: "Bento"},
		];
	/*Alterar abaixo o valor sendo que tem quer ser no padrão (3.00)
	Alterar abaixo ativo com sim ou não (para promoção)*/
	$scope.entrega = {valor: 3.00, ativo: "nao"};

/*-------------------------------------------------------------------------------------------------------------*/

	//Não Aterar abaixo.
	$scope.pedidos = [
	];
	$scope.endereco = '';
	$scope.pgtos = [
	{forma: "Dinheiro"},
	{forma: "Cartão"},
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