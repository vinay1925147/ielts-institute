import './Title.css'
function Title({subtitle,title}) {
  return (
    <div className='Title container'>
        <p>{title}</p>
        <h2>{subtitle}</h2>
    </div>
  )
}

export default Title;