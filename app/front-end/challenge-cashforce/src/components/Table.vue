<script setup>
import TableHeader from './TableHeader.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import 'dotenv/config';

const url = "https://alexandre-pimentel-cashforce.herokuapp.com/order"
const orders = ref([]);
const isLoading = ref(true);

const STATUS = ['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado']; // Status enviados no email

function formatDate(date) {
  const dateArray = date.split('-');
  const [year, month, rest] = dateArray;
  const day = rest.split(' ')[0];
  return [year, month, day].join('/');
}

function formatValue(value) {
  return "R$" + value + ',00'
}

// ideia para solução abaixo encontrada em : https://stackoverflow.com/questions/64117116/how-can-i-use-async-await-in-the-vue-3-0-setup-function-using-typescript

onMounted(async () => {
  const result = await axios.get(process.env.URL || 'localhost:3005/order');
  const { data } = result;
  const newData = Array.from(data).map(({ buyer, provider, orderStatusBuyer, emissionDate, value }) => {
    return {
      notaFiscal: '1234',
      buyer: buyer.name,
      provider: provider.name,
      emissionDate: formatDate(emissionDate),
      value: formatValue(value),
      status: STATUS[orderStatusBuyer]
    }
  })
  console.log(newData);
  orders.value = newData;
  isLoading.value = false;
})
</script>

<template>
  <div class="main-content">
    <TableHeader />
    <table v-if="!isLoading">
      <thead>
        <tr class="table-headers">
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" class="table-data">
          <td v-for="info in order">
            {{ info }}
          </td>
          <td>
            <button type="button">Dados do cedente</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
  .main-content {
    margin: 20px;
    float: left;
  }

  table {
    margin-top: 50px;
    border-collapse: collapse;
  }

  tr td {
    padding: 10px 20px;
    font-size: 14px;
  }

  .table-data {
    border-radius: 5%;
    border: 1px solid #ddd;
  }

  .table-headers th {
    padding: 10px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.3)
  }

  tr button {
    padding: 7px 15px;
    border-radius:20px;
    color: rgba(0, 0, 0, 0.8);
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  tr td:nth-child(5), tr td:nth-child(6)  {
    color: rgb(0,173,140);
  }

</style>