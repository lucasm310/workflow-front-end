angular.module("cardapio", []);
angular.module("cardapio").controller("cardapioCtrl", function ($scope) {
	$scope.app = "Cardapio";
	//Alterar os produtos mas manter a formação
	$scope.produtos = [
		{nome: "Yakisoba Carne", valor: "18", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Frango", valor: "18", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Salmão", valor: "20", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Camarão", valor: "20", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Carne de Porco", valor: "18", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Carne & Frango", valor: "20", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Camarão & Salmão", valor: "22", categoria: "Yakisoba"}, 
		{nome: "Yakisoba Carne , Frango e Carne de Porco", valor: "23", categoria: "Yakisoba"},
		// Sushi
		{nome: "Sushi de Omelete", valor: "14", categoria: "Sushi"}, 
		{nome: "Sushi de Legume", valor: "13", categoria: "Sushi"}, 
		{nome: "Sushi de Atum", valor: "14", categoria: "Sushi"}, 
		{nome: "Sushi de Kani", valor: "15", categoria: "Sushi"}, 
		{nome: "Sushi de Salmão", valor: "17", categoria: "Sushi"}, 
		{nome: "Sushi de Camarão", valor: "17", categoria: "Sushi"}, 
		// Uramaki
		{nome: "Uramaki Legumes", valor: "13", categoria: "Urumaki"}, 
		{nome: "Uramaki Atum", valor: "13", categoria: "Urumaki"}, 
		{nome: "Uramaki de Kani", valor: "16", categoria: "Urumaki"}, 
		{nome: "Uramaki de Salmão Coberto", valor: "24", categoria: "Urumaki"}, 
		{nome: "Uramaki de Salmão", valor: "17", categoria: "Urumaki"}, 
		{nome: "Uramaki de Camarão", valor: "17", categoria: "Urumaki"}, 
		//Temaki
		{nome: "Temaki Atum", valor: "16", categoria: "Temaki"}, 
		{nome: "Temaki Kani", valor: "16", categoria: "Temaki"}, 
		{nome: "Temaki Salmão", valor: "18", categoria: "Temaki"}, 
		{nome: "Temaki Camarão", valor: "18", categoria: "Temaki"}, 
		{nome: "Temaki Salmão & Camarão", valor: "20", categoria: "Temaki"}, 
		{nome: "Temaki Frito – Qualquer sabor", valor: "20", categoria: "Temaki"}, 
		//Hot Roll
		{nome: "Hot Roll de Legumes", valor: "14", categoria: "Hot Roll"}, 
		{nome: "Hot Roll Omelete", valor: "14", categoria: "Hot Roll"}, 
		{nome: "Hot Roll Kani", valor: "16", categoria: "Hot Roll"}, 
		{nome: "Hot Roll Atum", valor: "16", categoria: "Hot Roll"}, 
		{nome: "Hot Roll Estrogonofe Carne", valor: "16", categoria: "Hot Roll"}, 
		{nome: "Hot Roll Camarão", valor: "17", categoria: "Hot Roll"}, 
		{nome: "Hot Roll Salmão", valor: "17", categoria: "Hot Roll"}, 
		//Niguiri
		{nome: "Niguiri de Frango", valor: "14", categoria: "Niguiri"}, 
		{nome: "Niguiri Salmão", valor: "20", categoria: "Niguiri"}, 
		{nome: "Niguiri de Kani", valor: "16", categoria: "Niguiri"}, 
		//Sashimi
		{nome: "Sashimi com Cream Cheese", valor: "25", categoria: "Sashimi"}, 
		{nome: "Sashimi", valor: "22", categoria: "Sashimi"}, 
		//Rolinho Primavera
		{nome: "Rolinho Primavera de Salmão", valor: "6", categoria: "Rolinho Primavera"}, 
		{nome: "Rolinho Primavera de Camarão", valor: "6", categoria: "Rolinho Primavera"}, 
		//"Frango Xadrez
		{nome: "Frango Xadrez", valor: "20", categoria: "Frango Xadrez"}, 
		//Katsu Don
		{nome: "Katsu Don", valor: "18", categoria: "Katsu Don"}, 
		//KIT
		{nome: "KIT A", valor: "80", categoria: "KIT"}, 
		{nome: "KIT B", valor: "140", categoria: "KIT"}, 
		{nome: "KIT C", valor: "230", categoria: "KIT"}, 
		{nome: "KIT OURO", valor: "200", categoria: "KIT"}, 
		{nome: "KIT PRATA", valor: "110", categoria: "KIT"}, 
		{nome: "KIT BRONZE", valor: "70", categoria: "KIT"}, 
		//Barca
		{nome: "Barca 1", valor: "80", categoria: "Barca"}, 
		{nome: "Barca 2", valor: "85", categoria: "Barca"}, 
		{nome: "Barca 3", valor: "105", categoria: "Barca"}, 
		{nome: "Barca 4", valor: "115", categoria: "Barca"}, 
		{nome: "Barca 5", valor: "150", categoria: "Barca"}, 
		{nome: "Barca 6", valor: "120", categoria: "Barca"}, 
		{nome: "Barca 7", valor: "105", categoria: "Barca"}, 
		{nome: "Barca 8", valor: "75", categoria: "Barca"}, 
		//Bandeija
		{nome: "Bandeija SushiJoe", valor: "40", categoria: "Bandeija"}
		];
	/*Alterar abaixo o valor sendo que tem quer ser no padrão (3.00)
	Alterar abaixo ativo com sim ou não (para promoção)*/
	$scope.entrega = {valor: 3.40, ativo: "sim"};

/*-------------------------------------------------------------------------------------------------------------*/

	//Não Aterar abaixo.
	$scope.pedidos = [
	];
	$scope.endereco = '';
	$scope.pgtos = [
	{forma: "Dinheiro"},
	{forma: "Cartão"},
	];
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