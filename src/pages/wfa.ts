let pontos_em_m = new Array();
let configuracao_inicial = new Array();
let custos_x_y: Array<{x:string; y: string; d: number}> = new Array();

let requisicoes = new Array();

let M = new Array();

let configuracoes = new Array();
let configuracoesAux = new Array(configuracao_inicial.length);

function combinar(entrada: Array<string>, len: number, start: number) {
    if (len === 0)
        return configuracoes.push(configuracoesAux.join(" "));

    for (var i = start; i <= entrada.length - len; i++) {
        configuracoesAux[configuracoesAux.length - len] = entrada[i];
        combinar(entrada, len - 1, i + 1);
    }
}



function getCustoMatriz(i: number, configuracao: Array<string>) {
    return M[i].configuracoes.filter((e: { configuracao: string; }) => {
        if (e.configuracao.split(' ').every(t => configuracao.includes(t)))
            return e;
    })[0];
}

function d(x: string, y: string) {
    let o = custos_x_y.filter(e => (e.x == x && e.y == y) || (e.x == y && e.y == x))
    return o.length == 0 ? 0 : o[0].d;
}
function w0(from: string | Array<string>, to: string | Array<string>) {
    let t = Array.isArray(to) ? to : to.split(' ');
    let f = Array.isArray(from) ? from : from.split(' ');
    if (t.length != f.length)
        return console.error('Erro: a configuração de origem deve ter a mesma quantidade de servidores da configuração de destino.');

    let servidores_mantidos = t.filter(e => {
        if (f.indexOf(e) !== -1)
            return e;
    });

    let servidores_diff_origem = f.filter(e => servidores_mantidos.indexOf(e) === -1);
    let servidores_diff_destino = t.filter(e => servidores_mantidos.indexOf(e) === -1);

    let distancia = 0;
    for (let i = 0; i < servidores_diff_origem.length; i++) {
        let menorDistancia = Number.POSITIVE_INFINITY;
        for (let j = 0; j < servidores_diff_destino.length; j++) {
            let distanciaTemp = d(servidores_diff_origem[i], servidores_diff_destino[j]);
            if (distanciaTemp < menorDistancia) {
                menorDistancia = distanciaTemp;                
                servidores_diff_destino.splice(j, 1);
            }
        }
        distancia += menorDistancia;
    }
    return distancia;
}
function w(i: number, configuracao: string) {
    let menor_distancia = 0;
    let servidor_de_melhor_escolha = '';
    let matrixified = configuracao.split(' ');

    if (matrixified.some(e => e == requisicoes[i])) {
        menor_distancia = getCustoMatriz(i-1, matrixified).distancia;
        servidor_de_melhor_escolha = <string>requisicoes[i];
    } else {
        let menor_distancia_temp = Number.POSITIVE_INFINITY;
        
        for (let x = 0; x < matrixified.length; x++) {
            let configuracao_temp = [...matrixified];        
            let servidor_substituido = configuracao_temp.splice(x, 1, <string> requisicoes[i])[0];
            let custo = getCustoMatriz(i-1, configuracao_temp);
            let distancia_requisicao_servidor_substituido = d(servidor_substituido, <string> requisicoes[i]);
            let soma_wf_distancia = custo.distancia + distancia_requisicao_servidor_substituido;
            
            if (soma_wf_distancia < menor_distancia_temp) {
                menor_distancia_temp = soma_wf_distancia;
                servidor_de_melhor_escolha = servidor_substituido;
            }
        }
        menor_distancia = menor_distancia_temp;                    
    }
    return { menor_distancia, servidor_de_melhor_escolha }
}
export function matriz(pontos: Array<string>, configInicial: Array<string>, custos: Array<{ x: string; y: string; d: number }>, req: Array<string|number>) {
    pontos_em_m = pontos;
    configuracao_inicial = configInicial;
    custos_x_y = custos;

    requisicoes = req;
    
    configuracoes = new Array();
    configuracoesAux = new Array(configuracao_inicial.length);

    M = new Array();

    combinar(pontos_em_m, configuracoesAux.length, 0);

    for (let i = 0; i < requisicoes.length; i++) {
        if (i == 0) {
            M[0] = {
                i: 0,
                requisicao: null,
                configuracoes: new Array()
            }
            for (let j = 0; j < configuracoes.length; j++) {
                let distancia = w0(configuracao_inicial, configuracoes[j]);
                M[0].configuracoes.push({
                    configuracao: configuracoes[j],
                    distancia: distancia
                });
            }
        } else {
            M[i] = {
                i: i,
                requisicao: requisicoes[i],
                configuracoes: new Array()
            }
            for (let j = 0; j < configuracoes.length; j++) {
                let work_function = w(i, configuracoes[j]);
                M[i].configuracoes.push({
                    configuracao: configuracoes[j],
                    distancia: work_function.menor_distancia,
                    servidor: work_function.servidor_de_melhor_escolha
                });
                // console.log('Requisição:',requisicoes[i],'Config:', configuracoes[j], 'Melhor servidor:', work_function.servidor_de_melhor_escolha, 'Menor distância: ', work_function.menor_distancia);
            }
        }        
    }
    return M;
}