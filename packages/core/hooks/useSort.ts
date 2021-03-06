import { Column, Direction } from '../constants'
import { useStorage } from './useStorage'

export function useSort() {
  const [column, setColumn] = useStorage('sortColumn', Column.TOTAL)
  const [direction, setDirection] = useStorage('sortDirection', Direction.DESC)

  function sortBy(type: Column) {
    if (type === column) {
      setDirection(
        direction === Direction.DESC ? Direction.ASC : Direction.DESC
      )
    } else {
      setColumn(type)
    }
  }
  function sortByTotal() {
    sortBy(Column.TOTAL)
  }
  function sortByName() {
    sortBy(Column.NAME)
  }

  return { column, direction, sortByTotal, sortByName }
}
