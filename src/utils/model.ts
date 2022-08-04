export interface ToDo {
  id: number
  todo: string
  isDone: boolean
}

export interface Props {
  toDo: string
  setToDo: React.Dispatch<React.SetStateAction<string>>
  handleAddToDos: (e: React.FormEvent) => void
}
