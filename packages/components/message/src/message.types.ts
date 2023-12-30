type Itype = 'success' | 'info' | 'warning' | 'danger'
export interface ImessageOptions {
  id?: number
  message?: string
  duration?: number
  type?: Itype
}

export type Imessage = ImessageOptions | string
