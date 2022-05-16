import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Table from '../Table.vue';
import Aside from '../Aside.vue';

describe('Table', () => {
  it('renders properly', () => {
    const wrapper = mount(Table);
    expect(wrapper.text()).toContain("Notas Fiscais");
    expect(wrapper.text()).toContain("Visualize as notas fiscais que você tem");
    expect(wrapper.classes('main-content')).toBe(true);
  });
});

describe('Aside', () => {
  it('renders properly', () => {
    const wrapper = mount(Aside);
    expect(wrapper.text()).toContain("Notas fiscais");
    expect(wrapper.classes('sider-fornecedor')).toBe(true);
  });
});