<template>
    <q-page class="row items-center justify-center bg-grey-4" padding>
        <div class="col-10 q-gutter-y-md">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Espaço métrico / Servidores</div>
                </q-card-section>

                <q-card-section class="q-gutter-y-md">
                    <div class="row justify-between">
                        <div class="col-12">
                            <q-input
                                outlined
                                v-model="text"
                                label="Pontos no espaço. Ex.: a b c d e"
                            />
                        </div>                       
                    </div>
                    <div class="row justify-between">
                        <div class="col-6 q-pr-sm">
                            <q-input
                                outlined
                                v-model="text"
                                label="Configuração inicial. Ex.: a b c"
                            />
                        </div>
                        <div class="col-6">
                            <q-input
                                outlined
                                v-model="text"
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
                        <div v-for="d in 6" :key="d">
                            <q-input
                                dense
                                outlined
                                v-model="text"
                                label="Custo"
                                style="width: 80px"
                            />
                        </div>
                    </div>
                </q-card-section>
            </q-card>
            <q-card>
                <q-card-section>
                    <div class="text-h6">Matriz de memória de custo</div>
                </q-card-section>
                <q-card-section>
                    
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<style>
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "PageIndex"
});
</script>
