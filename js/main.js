var phrases = [
				"O erro da ditadura foi torturar e não matar",
				"Pela memória do coronel Carlos Alberto Brilhante Ustra, o pavor de Dilma Rousseff... O meu voto é sim!",
				"Ele merecia isso: pau-de-arara. Funciona. Eu sou favorável à tortura. Tu sabe disso. E o povo é favorável a isso também.",
				"Através do voto você não vai mudar nada nesse país, nada, absolutamente nada! Só vai mudar, infelizmente, se um dia nós partirmos para uma guerra civil aqui dentro, e fazendo o trabalho que o regime militar não fez: matando uns 30 mil, começando com o FHC, não deixar para fora não, matando! Se vai morrer alguns inocentes, tudo bem, tudo quanto é guerra morre inocente.",
				"Vamos fuzilar a petralhada aqui do Acre. Vou botar esses picaretas para correr do Acre. Já que gosta tanto da Venezuela, essa turma tem que ir para lá.",
				"Essa turma, se quiser ficar aqui, vai ter que se colocar sob a lei de todos nós. Ou vão para fora ou vão para a cadeia. Esses marginais vermelhos serão banidos de nossa pátria.",
				"[O policial] entra, resolve o problema e, se matar 10, 15 ou 20, com 10 ou 30 tiros cada um, ele tem que ser condecorado, e não processado.",
				"Morreram poucos. A PM tinha que ter matado mil.",
				"Somos um país cristão. Não existe essa historinha de Estado laico, não. O Estado é cristão. Vamos fazer o Brasil para as maiorias. As minorias têm que se curvar às maiorias. As minorias se adequam ou simplesmente desaparecem.",
				"Eu jamais ia estuprar você porque você não merece.",
				"Foram quatro homens. A quinta eu dei uma fraquejada, e veio uma mulher.",
				"Para mim é a morte. Digo mais: prefiro que morra num acidente do que apareça com um bigodudo por aí. Para mim ele vai ter morrido mesmo.",
				"O filho começa a ficar assim meio gayzinho, leva um couro, ele muda o comportamento dele. Tá certo?",
				"90% desses meninos adotados [por um casal gay] vão ser homossexuais e vão ser garotos de programa com toda certeza.",
				"Não existe homofobia no Brasil. A maioria dos que morrem, 90% dos homossexuais que morrem, morre em locais de consumo de drogas, em local de prostituição, ou executado pelo próprio parceiro.",
				"Ele devia ir comer um capim ali fora para manter as suas origens.",
				"Fui num quilombola [sic] em Eldorado Paulista. O afrodescendente mais leve lá pesava sete arrobas. Não fazem nada! Acho que nem para procriadores servem mais.",
				"Quem usa cota, no meu entender, está assinando embaixo que é incompetente. Eu não entraria num avião pilotado por um cotista. Nem aceitaria ser operado por um médico cotista.",
				"Isso não pode continuar existindo. Tudo é coitadismo. Coitado do negro, coitado da mulher, coitado do gay, coitado do nordestino, coitado do piauiense. Vamos acabar com isso.",
				"A escória do mundo está chegando ao Brasil como se nós não tivéssemos problema demais para resolver.",
				"Se eu chegar lá, não vai ter dinheiro para ONG. Esses inúteis vão ter que trabalhar.",
				"Como eu estava solteiro na época, esse dinheiro do auxílio-moradia eu usava para comer gente.",
				"Vai acabar tudo isso daí, Talquêi?!.",
				"Não se aprende nada na escola, é filme de menino se beijando, filme de menina se acariciando. Eles distribuem esse \'kit gay\' para destruir nossas famílias.",
				"Canalhas!"
			  ];

var numberOfPhrases = 5;

var generateLoremIpsum = function() {
	$(document).ready(function(){
	    $("#btGenerator").click(function(){
		   	var bolsoSpeech = "";
	    	for(var x = 1; x <= $("#inParagraphs").val(); x++) {
		    	var listNumber = [];
		    	for (var i = 0; i < numberOfPhrases; ) {
		    		var num = Math.floor((Math.random() * 24));
		    		if (listNumber.indexOf(num) == -1) {
		    			listNumber.push(num);
		    			bolsoSpeech += phrases[num] + " ";
		    			i++;
		    		}
		    	}
		    	bolsoSpeech += "\n\n";
	    	}
	        $("#txBolsoPhrase textarea").text(bolsoSpeech);
	    });
	});	
}

generateLoremIpsum();
