import { computed } from 'vue'

export function useModifierSize(props: { size?: string }) {
  const sizeEnum = ['large', 'small']
  return computed(() => {
    let size = ''
    if (!props.size) {
      return size
    }
    for (let i = 0; i < sizeEnum.length; i++) {
      if (props.size === sizeEnum[i]) {
        size = sizeEnum[i]
      }
    }
    return size
  })
}
