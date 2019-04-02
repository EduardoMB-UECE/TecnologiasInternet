/**
 * 
 */

function incrementarQtd(elemento) {
	var qtd = elemento.parentNode.getElementsByTagName('span')
	qtd[0].innerHTML = Number(qtd[0].innerHTML) + 1
}

function decrementarQtd(elemento) {
	var qtd = elemento.parentNode.getElementsByTagName('span')
	if (qtd[0].innerHTML > 1) {
		qtd[0].innerHTML = Number(qtd[0].innerHTML) - 1
	}
}

function deletarLinha(botao) {
	console.log(botao)
	console.log(botao.parentNode)
	console.log(botao.parentNode.parentNode)
	var linha = botao.parentNode.parentNode;
	linha.parentNode.removeChild(linha);

	ajustarTabelas()
}

function adicionarCarrinho(botao) {
	var linha = botao.parentNode.parentNode;
	var valores = linha.getElementsByTagName('td')
	var tabela = document.getElementById('tabelaCarrinho')
	var novaLinha = tabela.insertRow(tabela.rows.length)
	novaLinha.insertCell(0).appendChild(
			document.createTextNode(valores[0].innerHTML))
	novaLinha.insertCell(1).appendChild(
			document.createTextNode(valores[1].innerHTML))
	novaLinha.insertCell(2).appendChild(
			document.createTextNode(valores[2].innerHTML))

	/* Cria a celula para a quantidade e os botoes para aumentar/diminuir */
	var span = document.createElement('span')
	span.innerHTML = 1
	novaLinha.insertCell(3).appendChild(span)

	var botao = document.createElement('button')
	botao.setAttribute("type", "button")
	botao.setAttribute("class", "btn btn-sm")
	botao.setAttribute("data-toggle", "modal")
	botao.setAttribute("onclick", "incrementarQtd(this)")
	botao.innerHTML = '<img src="arrow-up.png" />'
	novaLinha.cells[3].appendChild(botao)

	botao = document.createElement('button')
	botao.setAttribute("type", "button")
	botao.setAttribute("class", "btn btn-sm")
	botao.setAttribute("data-toggle", "modal")
	botao.setAttribute("onclick", "decrementarQtd(this)")
	botao.innerHTML = '<img src="arrow-down.png" />'
	novaLinha.cells[3].appendChild(botao)

	td = document.createElement('td')
	td.parentNode = novaLinha

	botao = document.createElement('button')

	td.appendChild(botao)
	botao.parentNode = td

	botao.setAttribute("type", "button")
	botao.setAttribute("class", "btn btn-sm")
	botao.setAttribute("data-toggle", "modal")
	botao.setAttribute("data-target", "#modalEditar")
	botao.setAttribute("onclick", "deletarLinha(this)")
	botao.innerHTML = '<img src="delete.png" />'

	novaLinha.insertCell(4).appendChild(botao)

	ajustarTabelas()
}

function deletarLinha(botao) {
	var linha = botao.parentNode.parentNode;
	linha.parentNode.removeChild(linha);
	ajustarTabelas();
}

function editarLinha(botao) {
	var valores = botao.parentNode.parentNode.getElementsByTagName('td');
	var elemento = document.getElementById('m_descricao');
	elemento.value = valores[0].innerHTML;
	elemento = document.getElementById('m_codigo');
	elemento.value = valores[1].innerHTML;
	elemento = document.getElementById('m_valor');
	elemento.value = valores[2].innerHTML;
	elemento = document.getElementById('m_qtd');
	elemento.value = valores[3].innerHTML;
	elemento = document.getElementById('m_fabricacao');
	data = valores[4].innerHTML.split(' / ');
	elemento.value = data[2] + '-' + data[1] + '-' + data[0];
	elemento = document.getElementById('m_vencimento');
	data = valores[5].innerHTML.split(' / ');
	elemento.value = data[2] + '-' + data[1] + '-' + data[0];
}

function ajustarTabelas() {
	var tabelas = document.getElementsByTagName('table')
	for (j = 0; j < tabelas.length; j++) {
		var linhas = tabelas[j].getElementsByTagName('tr')
		for (i = 1; i < linhas.length; i++) {
			if (i % 2 == 0) {
				linhas[i].classList.add('linhaCinzaTabela')
			} else {
				linhas[i].classList.remove('linhaCinzaTabela')
			}
		}
	}
}

function limparCamposModal() {
	document.getElementById('m_descricao').value = '';
	document.getElementById('m_codigo').value = '';
	document.getElementById('m_valor').value = '';
	document.getElementById('m_qtd').value = '';
	document.getElementById('m_fabricacao').value = '';
	document.getElementById('m_vencimento').value = '';
}

ajustarTabelas()
