<template>
  <div class="master">
      <div class="titulo">
          {{nomeEstagio}}
      </div>
      <div class="databas">
        <div id="botoes">
          <input type="button" value="Aguardando Chegar" class="btn1" v-on:click="aguardandoChegar"/>
          <input type="button" value="Aguardando Vistoria" class="btn2" v-on:click="aguardandoVistoria" />
          <input type="button" value="Aguardando Aprovação" class="btn1" v-on:click="aguardandoAprovacao"/>
          <input type="button" value="Aprovado" class="btn2" v-on:click="Aprovado"/>
          <input type="button" value="Em Manutenção" class="btn1" v-on:click="emManutencao"/>
          <input type="button" value="Manutenção Concluida" class="btn2" v-on:click="manutencaoConcluida" />
          <input type="button" value="Reprovado" class="btn1" v-on:click="reprovado" />
          <input type="button" value="Finalizado" class="btn2" v-on:click="finalizado"/>
        </div>
        <div id="tabela">
          <md-table
            v-model="coletores"
            md-sort="name"
            md-sort-order="asc"
            md-card
            md-fixed-header
          >
            <md-table-toolbar>
              <div class="md-toolbar-section-start" >
                <h1 class="md-title">Equipamentos</h1>
              </div>

              <md-field md-clearable class="md-toolbar-section-end">
                <md-input
                  placeholder="Search by name..."
                  v-model="search"
                  @input="searchOnTable"
                />
              </md-field>
            </md-table-toolbar> 

            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="OS" md-sort-by="OS" md-numeric>{{
                item.OS
              }}</md-table-cell>
              <md-table-cell md-label="Data" md-sort-by="Data">{{
                item.Data
              }}</md-table-cell>
              <md-table-cell md-label="Cliente" md-sort-by="Cliente">{{
                item.Cliente
              }}</md-table-cell>
              <md-table-cell md-label="Equipamento" md-sort-by="Equipamento">{{
                item.Equipamento
              }}</md-table-cell>
              <md-table-cell md-label="NS" md-sort-by="NS">{{
                item.NS
              }}</md-table-cell>
              <md-table-cell md-label="Data Movimento" md-sort-by="Data_move">{{
                item.Data_Move
              }}</md-table-cell>
            </md-table-row>
          </md-table>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
const toLower = (text) => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter((item) => toLower(item.OS).includes(toLower(term)));
  }

  return items;
};

export default {
  name: "TableSearch",
  data: () => ({
    search: null,
    coletores: [],
    nomeEstagio: "Bem Vindo!!",
  }),
  methods: {
    newUser() {
      window.alert("Noop");
    },
    searchOnTable() {
      this.coletores = searchByName(this.coletores, this.search);
    },
    aguardandoChegar() {
         axios.get("http://localhost:5000/coletores/1").then((response) => {
      this.coletores = response.data;
    });
        this.nomeEstagio = "Aguardando Chegar na Zhaz";
    },
    aguardandoVistoria() {
         axios.get("http://localhost:5000/coletores/3").then((response) => {
      this.coletores = response.data;
    });
        this.nomeEstagio = "Aguardando Vistoria";
    },
    aguardandoAprovacao() {
         axios.get("http://localhost:5000/coletores/6").then((response) => {
      this.coletores = response.data;
    });
        this.nomeEstagio = "Aguardando Aprovação";
    },
    Aprovado() {
         axios.get("http://localhost:5000/coletores/8").then((response) => {
      this.coletores = response.data;
    });
        this.nomeEstagio = "Aprovado !!!";
    },
    emManutencao() {
         axios.get("http://localhost:5000/coletores/9").then((response) => {
      this.coletores = response.data;
    });
        this.nomeEstagio = "Em Manutenção";
    },
    manutencaoConcluida() {
         axios.get("http://localhost:5000/coletores/11").then((response) => {
      this.coletores = response.data;
    });
        this.nomeEstagio = "Manutenção Concluida";
    },
    reprovado() {
         axios.get("http://localhost:5000/coletores/17").then((response) => {
      this.coletores = response.data;
    });
        this.nomeEstagio = "Reprovado :(";
    },
    finalizado() {
         axios.get("http://localhost:5000/coletores/15").then((response) => {
      this.coletores = response.data;
    });
        this.nomeEstagio = "Finalizado";
    },
  },
};
</script>

<style>
.titulo{
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 30px;
    color: white;
    font-weight: bold;
    font-family: 'Times New Roman';

    margin-bottom: 10px;
    margin-top: 0px;

    border: 5px #4caf50 solid;
    border-radius: 10px;
    height: 50px;

    background-color: #4caf50;
    
}
#botoes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#tabela {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.btn1 {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.master {   
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
}
.databas{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.btn2 {
  background-color: #0c4cd6;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.md-field {
  max-width: 300px;
}

</style>