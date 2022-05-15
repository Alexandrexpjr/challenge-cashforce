<script setup>
</script>

<template>
  <aside class="sider-fornecedor">
    <img src="./images/cashforceIcon.svg" alt="cashforce icon" />
    <ul>
      <li>
        <img src="./images/handsicon.svg" alt="shaking hands icon" class="hands" />
        Notas fiscais
      </li>
    </ul>
  </aside>
</template>

<style scoped>
  .sider-fornecedor {
    max-width: 20%;
    height: 1000px;
    float: left;
    background-color: rgb(245, 245, 245);
  }
  .sider-fornecedor img {
    margin: 25px 25px;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 25px 25px;
  }

  ul li { 
    text-align: center;
    color: rgb(0,173,140);
    font-weight: bold;
    font-size: 14px;
  }

  .hands {
    margin: 0 !important;
  }

</style>
