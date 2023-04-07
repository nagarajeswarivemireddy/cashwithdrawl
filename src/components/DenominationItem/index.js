// Write your code here
const DenominationItem = props => {
  const {denominationItem, deductValue} = props
  const {value, id} = denominationItem

  const changeValue = () => {
    deductValue(id)
  }

  return (
    <li>
      <button className="button" type="button" onClick={changeValue}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
