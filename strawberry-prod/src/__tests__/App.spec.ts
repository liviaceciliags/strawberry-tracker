import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App.vue', () => {
    it('renderiza o título corretamente', () => {
        const wrapper = mount(App)
        expect(wrapper.text()).toContain('Strawberry Tracker')
    })

    it('renderiza o emoji de morango', () => {
        const wrapper = mount(App)
        expect(wrapper.html()).toContain('🍓')
    })

    it('renderiza o card de boas-vindas', () => {
        const wrapper = mount(App)
        expect(wrapper.text()).toContain('Bem-vindo!')
    })

    it('renderiza o botão Registrar Produção', () => {
        const wrapper = mount(App)
        expect(wrapper.find('button.register').exists()).toBe(true)
    })

    it('renderiza o botão Acessar Painel', () => {
        const wrapper = mount(App)
        expect(wrapper.find('button.access').exists()).toBe(true)
    })

    it('tem a classe correta no botão Registrar Produção', () => {
        const wrapper = mount(App)
        expect(wrapper.find('button.register').classes()).toContain('register')
    })

    it('tem a classe correta no botão Acessar Painel', () => {
        const wrapper = mount(App)
        expect(wrapper.find('button.access').classes()).toContain('access')
    })

    it('renderiza o texto de instrução', () => {
        const wrapper = mount(App)
        expect(wrapper.text()).toContain('Comece registrando sua produção diária ou acesse o painel de controle.')
    })

    it('header possui sombra', () => {
        const wrapper = mount(App)
        expect(wrapper.find('header').classes()).toContain('shadow-md')
    })

    it('main está centralizado', () => {
        const wrapper = mount(App)
        expect(wrapper.find('main').classes()).toContain('justify-center')
    })

    // Casos negativos
    it('não renderiza botão com classe inexistente', () => {
        const wrapper = mount(App)
        expect(wrapper.find('button.inexistente').exists()).toBe(false)
    })

    it('não renderiza texto incorreto', () => {
        const wrapper = mount(App)
        expect(wrapper.text()).not.toContain('Texto Inexistente')
    })

    it('não renderiza outro emoji', () => {
        const wrapper = mount(App)
        expect(wrapper.html()).not.toContain('🍌')
    })

    it('não renderiza botão de logout', () => {
        const wrapper = mount(App)
        expect(wrapper.text()).not.toContain('Logout')
    })

    it('não renderiza campo de input', () => {
        const wrapper = mount(App)
        expect(wrapper.find('input').exists()).toBe(false)
    })

    it('não renderiza link de cadastro', () => {
        const wrapper = mount(App)
        expect(wrapper.text()).not.toContain('Cadastre-se')
    })

    it('não renderiza botão com classe errada', () => {
        const wrapper = mount(App)
        expect(wrapper.find('button.wrongclass').exists()).toBe(false)
    })

    it('não renderiza card com classe errada', () => {
        const wrapper = mount(App)
        expect(wrapper.find('.wrong-card').exists()).toBe(false)
    })

    it('não renderiza texto de erro', () => {
        const wrapper = mount(App)
        expect(wrapper.text()).not.toContain('Erro')
    })

    it('não renderiza botão de salvar', () => {
        const wrapper = mount(App)
        expect(wrapper.text()).not.toContain('Salvar')
    })
})
