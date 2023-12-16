import { computed } from 'vue'

export function useModifierType(props: { type?: string }) {
  const typeEnum = ['primary', 'success', 'info', 'warning', 'danger']
  return computed(() => {
    let type = 'default'
    if (!props.type) {
      return type
    }
    for (let i = 0; i < typeEnum.length; i++) {
      if (props.type === typeEnum[i]) {
        type = typeEnum[i]
      }
    }
    return type
  })
}
