export interface UserContainerInterfece {
  item: any
  handelDelete: any
  onOpenModal: any
}

export interface ModalInterfece {
  isOpen: boolean
  onClose: any
  onContinue: any
  value: string
}

export interface useOutsideClickInterfece {
  isOpen: any
  ref: any
  action: any
}

export interface actionInterfece {
  type: string
  payload?: any
}

export interface initialStateInterfece {
  list: any[]
  status: string
  error: any
}
