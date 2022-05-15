<script setup>
import TableHeader from './TableHeader.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';

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
  const result = await axios.get(url);
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
  <TableHeader />
  <table v-if="!isLoading">
    <thead>
      <tr>
        <th>NOTA FISCAL</th>
        <th>SACADO</th>
        <th>CEDENTE</th>
        <th>EMISSÃO</th>
        <th>VALOR</th>
        <th>STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders">
        <td v-for="info in order">
          {{ info }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>

</style>