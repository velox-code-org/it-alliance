import CardTitle from './CardTitle'

const Card = ({children, title, className}) => {
  return (
    <div className={` card p-5 ${className}`}>
      {title && <CardTitle title={title} />}
      {children}
    </div>
  )
}

export default Card