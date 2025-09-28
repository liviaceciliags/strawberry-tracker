<template>
  <div class="home-page">
    <header class="introduction flex justify-center items-center flex-col shadow-md">      
      <h1 class="title">
        <span>Strawberry Tracker</span>
        <span aria-label="Morango!" class="text-3xl">🍓</span>
      </h1>
      <p class="description">
        Aplicação web para produtores de morango registrarem e gerenciarem suas produções diárias de caixas.<br>
        O sistema conta com tela de login, área de controle de produção, integração planejada com API em Python (FastAPI) e banco de dados MySQL.
      </p>
    </header>
    <main class="main justify-center">
      <div class="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h2 class="text-xl font-semibold text-pink-600 mb-2">Bem-vindo!</h2>
        <p class="text-gray-500">Comece registrando sua produção diária ou acesse o painel de controle.</p>
        <button class="register">Registrar Produção</button>
        <button class="access">Acessar Painel</button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Nenhum script por enquanto
</script>

<style scoped>

.register {
  background-color: #e23c3c; 
  font-family: Arial, Helvetica, sans-serif;
}
.access {
  background-color: #e23c3c; 
  font-family: Arial, Helvetica, sans-serif;
}

</style>