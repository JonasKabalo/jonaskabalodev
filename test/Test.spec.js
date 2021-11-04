import { mount } from '@vue/test-utils'
import Spec from '@/components/Spec.vue'

describe('Test', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Spec)
    expect(wrapper.vm).toBeTruthy()
  })
})
