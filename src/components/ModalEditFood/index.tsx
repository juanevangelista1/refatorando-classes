import { useRef } from 'react'
import { FiCheckSquare } from 'react-icons/fi'

import { Form } from './styles'
import Modal from '../Modal'
import { Input } from '../Input'
import { FormHandles } from '@unform/core'

type OrderFoodProps = {
  id: number
  name: string
  description: string
  price: number
  available: boolean
  image: string
}

type ModalEditFoodProps = {
  isOpen: boolean
  setIsOpen: () => void
  editingFood: {
    id: number
    name: string
    description: string
    price: number
    available: boolean
    image: string
  }
  handleUpdateFood: (food: OrderFoodProps) => void
}

export function ModalEditFood({
  handleUpdateFood,
  isOpen,
  setIsOpen,
  editingFood
}: ModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit = async (data: OrderFoodProps) => {
    handleUpdateFood(data)
    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}
