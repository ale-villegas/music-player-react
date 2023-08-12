/* eslint-disable react/prop-types */


const BoxHeader = ({field1, field2= null}) => {
  return (
    <div className="description-head">
    <strong>{field1}</strong>
    <span>{field2}</span>
    <p>PlayCount</p>
    </div>
  )
}

export default BoxHeader