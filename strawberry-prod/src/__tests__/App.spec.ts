// tests/App.spec.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

const mockRouter = { push: vi.fn() }
vi.mock('vue-router', () => ({
  useRouter: () => mockRouter
}))

describe('App.vue – 20 testes (inclui mocks de navegação)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renderiza o título "Strawberry Tracker"', () => {
    const wrapper = mount(App)
    expect(wrapper.find('h1.title').text()).toContain('Strawberry Tracker')
  })

  it('renderiza o emoji 🍓', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('🍓')
  })

  it('renderiza o cabeçalho "Bem-vindo!"', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Bem-vindo!')
  })

  it('renderiza a descrição da aplicação', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Aplicação web para produtores de morango registrarem e gerenciarem suas produções diárias de caixas.')
  })

  it('renderiza o texto de instrução para registrar ou acessar painel', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Comece registrando sua produção diária ou acesse o painel de controle.')
  })

  it('possui botão "Registrar Produção" com classe .register', () => {
    const wrapper = mount(App)
    const btn = wrapper.find('button.register')
    expect(btn.exists()).toBe(true)
    expect(btn.classes()).toContain('register')
  })

  it('possui botão "Acessar Painel" com classe .access', () => {
    const wrapper = mount(App)
    const btn = wrapper.find('button.access')
    expect(btn.exists()).toBe(true)
    expect(btn.classes()).toContain('access')
  })

  it('header possui classe shadow-md', () => {
    const wrapper = mount(App)
    expect(wrapper.find('header').classes()).toContain('shadow-md')
  })

  it('main possui classe justify-center', () => {
    const wrapper = mount(App)
    expect(wrapper.find('main').classes()).toContain('justify-center')
  })

  it('não chama router.push antes de qualquer interação', () => {
    mount(App)
    expect(mockRouter.push).not.toHaveBeenCalled()
  })

  it('ao clicar em "Registrar Produção" chama router.push("/register")', async () => {
    const wrapper = mount(App)
    await wrapper.find('button.register').trigger('click')
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/register')
  })

  it('três cliques em "Registrar Produção" chamam router.push três vezes', async () => {
    const wrapper = mount(App)
    const btn = wrapper.find('button.register')
    await btn.trigger('click')
    await btn.trigger('click')
    await btn.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledTimes(3)
    expect(mockRouter.push).toHaveBeenLastCalledWith('/register')
  })

  it('ao clicar em "Acessar Painel" chama router.push("/dashboard")', async () => {
    const wrapper = mount(App)
    await wrapper.find('button.access').trigger('click')
    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/dashboard')
  })

  it('botão .register possui o texto "Registrar Produção"', () => {
    const wrapper = mount(App)
    expect(wrapper.find('button.register').text()).toBe('Registrar Produção')
  })

  it('botão .access possui o texto "Acessar Painel"', () => {
    const wrapper = mount(App)
    expect(wrapper.find('button.access').text()).toBe('Acessar Painel')
  })

  it('card principal possui exatamente dois botões', () => {
    const wrapper = mount(App)
    const card = wrapper.find('.bg-white')
    const buttons = card.findAll('button')
    expect(buttons.length).toBe(2)
  })

  it('emoji possui aria-label "Morango!"', () => {
    const wrapper = mount(App)
    const emoji = wrapper.find('h1.title .text-3xl')
    expect(emoji.attributes('aria-label')).toBe('Morango!')
  })

  it('h1.title contém exatamente dois spans (título e emoji)', () => {
    const wrapper = mount(App)
    const spans = wrapper.find('h1.title').findAll('span')
    expect(spans.length).toBe(2)
    expect(spans[0].text()).toContain('Strawberry Tracker')
    expect(spans[1].text()).toContain('🍓')
  })

  it('não existe button.inexistente', () => {
    const wrapper = mount(App)
    expect(wrapper.find('button.inexistente').exists()).toBe(false)
  })

  it('não renderiza o texto "Logout"', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).not.toContain('Logout')
  })
})