const SingleTarot = ({ url, reverse }) => {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <img src={!clicked ? reverse : url} />
    </>
  )
}

export default SingleTarot
