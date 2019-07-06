<template>
    <q-page class="row items-center justify-center bg-grey-4" padding>
        <div class="col-10 q-gutter-y-md">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Espaço métrico, servidores e requisições</div>
                </q-card-section>

                <q-card-section class="q-gutter-y-md">
                    <div class="row justify-between">
                        <div class="col-12">
                            <q-input
                                outlined
                                v-model="pontos_em_m"
                                label="Pontos no espaço. Ex.: a b c d e"
                            />
                        </div>
                    </div>
                    <div class="row justify-between">
                        <div class="col-6 q-pr-sm">
                            <q-input
                                outlined
                                v-model="configuracao_inicial"
                                label="Configuração inicial. Ex.: a b c"
                            />
                        </div>
                        <div class="col-6">
                            <q-input
                                outlined
                                v-model="requisicoes"
                                label="Requisições. Ex.: e c a b a b d"
                            />
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>
                    <div class="text-h6">Custos</div>
                </q-card-section>
                <q-card-section>
                    <div class="row q-gutter-md">
                        <div v-for="custo in custos" :key="custo.x+custo.y">
                            <q-input
                                dense
                                outlined
                                v-model.number="custo.d"
                                :label="'Custo ('+custo.x+','+custo.y+')'"
                                type="number"
                                style="width: 100px"
                            />
                        </div>
                    </div>
                </q-card-section>
                <q-separator dark />
                <q-card-actions vertical align="center">
                    <q-btn @click="calcular" color="secondary" full-width>Calcular</q-btn>
                </q-card-actions>
            </q-card>
            <q-card>
                <q-card-section>
                    <div class="text-h6">Matriz de custo</div>
                </q-card-section>
                <q-card-section>
                    <q-markup-table v-if="matriz.length > 0" separator="cell" flat bordered>
                        <thead>
                            <tr style="background-color: rgb(70,124,185); color: rgb(255,255,255);">
                                <th class="text-center light-blue-1">Requisição</th>
                                <th class="text-center">i</th>
                                <th v-for="config in matriz[0].configuracoes" :key="config.configuracao" class="text-center">{{ config.configuracao }}</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="m in matriz" :key="m.i" :class="m.i%2==0?'b1':'b2'">
                                <td class="text-center">{{ m.i == 0 ? '∅' : m.requisicao }}</td>
                                <td class="text-center">{{ m.i == 0 ? '-' : m.i }}</td>
                                <td v-for="config in m.configuracoes" :key="m.i+'_'+m.requisicao+'_'+(config.configuracao.split(' ').join('.'))" class="text-center">{{ config.distancia+(config.servidor?' ('+config.servidor+')' : '') }}</td>
                            </tr>

                            <!-- <tr style="background-color: rgb(204,214,229);">
                                <td class="text-center">∅</td>
                                <td class="text-center">-</td>
                                <td class="text-center">2(a)</td>
                                <td class="text-center">3(e)</td>
                                <td class="text-center">2(d)</td>
                                <td class="text-center">4(a)</td>
                                <td class="text-center">4(c)</td>
                                <td class="text-center">5(a)</td>
                            </tr> -->
                            <!-- <tr style="background-color: rgb(230,233,241);">
                                <td class="text-center">∅</td>
                                <td class="text-center">-</td>
                                <td class="text-center">2(a)</td>
                                <td class="text-center">3(e)</td>
                                <td class="text-center">2(d)</td>
                                <td class="text-center">4(a)</td>
                                <td class="text-center">4(c)</td>
                                <td class="text-center">5(a)</td>
                            </tr> -->
                        </tbody>
                    </q-markup-table>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<style>
</style>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from 'vue-property-decorator'
import { matriz } from './wfa';

@Component 
export default class Wfa extends Vue {
    text = "a";
    pontos_em_m = "";
    configuracao_inicial = "";
    custos = new Array();
    requisicoes = "";
    matriz = new Array();

    @Watch('pontos_em_m')
    onPontos(val: string) {
        if (this.matriz.length > 0)
            this.matriz = new Array();
        if (val)
            this.genCustos(val.trim().split(' '));
    }

    genCustos(m: Array<string>) {
        this.custos = [];
        for (let i = 0; i < m.length-1; i++) {
            for (let j = i+1; j < m.length; j++) {
                this.custos.push({
                    x: m[i],
                    y: m[j],
                    d: 0
                });
            }
        }
    }

    calcular() {
        let pontos = this.pontos_em_m.trim().split(" ");
        let config = this.configuracao_inicial.trim().split(" ");
        let req = this.requisicoes.trim().split(" ");

        let erros = "";
        if (pontos.length < 2)
            erros += "\r\nÉ necessário informar os pontos no espaço métrico.";
        if (config.length < 2)
            erros += "\r\nÉ necessário informar a configuração inicial dos servidores.";
        if (req.length < 2)
            erros += "\r\nÉ necessário configurar informar a sequência de requisições.";
        if (this.custos.some((e: { d: any }) => isNaN(e.d) || e.d === undefined || e.d === "" || e.d === null))
            erros += "\r\nTodos os custos devem ser números.";

        if (erros !== "")
            alert('Atenção:\r\n\r\n'+erros);

        this.matriz = matriz(pontos, config, this.custos, [0, ...req]);
        // console.log('configuracao inicial: ',pontos,this.pontos_em_m);
        // console.log(this.matriz);
    }
}
</script>
<style scoped>
.b1 {
    background-color: rgb(204,214,229);
}
.b2 {
    background-color: rgb(230,233,241);
}
</style>

