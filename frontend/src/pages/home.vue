<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >    
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>home</md-icon>
          </template>

          <template slot="content">
            <h3 class="category">Aguardando Chegar</h3>
            <h1 class="title">{{ aguardandoChegar }}</h1>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>content_paste</md-icon>
          </template>

          <template slot="content">
            <h3 class="category">Aguardando Vistoria</h3>
            <h1 class="title">
              {{ aguardandoVistoria }}
            </h1>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <h3 class="category">Aguardando Aprovação</h3>
            <h1 class="title">{{ aguardandoAprovacao }}</h1>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>content_copy</md-icon>
          </template>

          <template slot="content">
            <h3 class="category">Aprovado</h3>
            <h6>.</h6>
            <h1 class="title">{{ aprovado }}</h1>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <h3 class="category">Em Manutenção</h3>
            <h1 class="title">{{ emManutencao }}</h1>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <md-icon>content_copy</md-icon>
          </template>

          <template slot="content">
            <h3 class="category">Manutenção Concluída</h3>
            <h1 class="title">
              {{ manutencaoConcluida }}
            </h1>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <h3 class="category">Reprovado</h3>
            <h6>.</h6>
            <h1 class="title">75</h1>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>check</md-icon>
          </template>

          <template slot="content">
            <h3 class="category">Finalizados</h3>
            <h6>.</h6>
            <h1 class="title">{{ finalizados }}</h1>
          </template>
        </stats-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard
} from "@/components";

import axios, { AxiosError } from "axios";

export default {
  components: {
    StatsCard
  },
  data () {
    return {
      aguardandoChegar: [],
      aguardandoVistoria: [],
      aguardandoAprovacao: [],
      aprovado: [],
      emManutencao: [],
      manutencaoConcluida: [],
      reprovado: [],
      finalizados: [],
    }
  },
  mounted () {
    //aguardando chegar
    axios.get("http://localhost:5000/home/1").then(response => {
      this.aguardandoChegar = response.data;
    });
    //aguardando vistoria
    axios.get("http://localhost:5000/home/3").then(response => {
      this.aguardandoVistoria = response.data;
    });
    //aguardando aprovação
    axios.get("http://localhost:5000/home/6").then(response => {
      this.aguardandoAprovacao = response.data;
    });
    //aprovado
    axios.get("http://localhost:5000/home/8").then(response => {
      this.aprovado = response.data;
    });
    //em manutenção
    axios.get("http://localhost:5000/home/9").then(response => {
      this.emManutencao = response.data;
    });
    //manutenção concluida
    axios.get("http://localhost:5000/home/11").then(response => {
      this.manutencaoConcluida = response.data;
    });
    //reprovado
    axios.get("http://localhost:5000/home/17").then(response => {
      this.reprovado = response.data;
    });
    //finalizados
    axios.get("http://localhost:5000/home/15").then(response => {
      this.finalizados = response.data;
    });
  },
};
</script>
