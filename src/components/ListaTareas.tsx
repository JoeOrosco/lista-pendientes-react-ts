import { Tarea } from "./Tarea"

interface ListaTareas {
  listaTareas: string[]
  borrarTarea: (index: number) => void
}

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareas) => {
  return (
    <div className="taskList">
      {
        listaTareas.map((tarea, index) => (
          <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)} />
        ))
      }
    </div>
  )
}
