<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-yellow-50 flex flex-col items-center">
    <header class="w-full bg-white shadow-md py-6 mb-8 flex flex-col items-center">
      <h1 class="text-3xl font-bold text-pink-700 flex items-center gap-2">
        <span>Strawberry Tracker</span>
        <span aria-label="Morango" class="text-3xl">🍓</span>
      </h1>
      <p class="mt-2 text-gray-600 text-center max-w-xl">
        Aplicação web para produtores de morango registrarem e gerenciarem suas produções diárias de caixas.
        O sistema conta com tela de login, área de controle de produção, integração planejada com API em Python (FastAPI) e banco de dados MySQL.
      </p>
    </header>
    <!-- Conteúdo principal pode ser adicionado aqui -->
    <main class="flex-1 w-full flex justify-center items-center">
      <!-- Exemplo de card de boas-vindas -->
      <div class="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h2 class="text-xl font-semibold text-pink-600 mb-2">Bem-vindo!</h2>
        <p class="text-gray-500">Comece registrando sua produção diária ou acesse o painel de controle.</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Nenhum script por enquanto
</script>

<style scoped>
/* Personalização extra se necessário */
</style>
