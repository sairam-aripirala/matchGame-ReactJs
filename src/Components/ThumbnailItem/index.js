import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onCheckThumbnail} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const checkThumbnail = () => {
    onCheckThumbnail(id)
  }

  return (
    <li>
      <button className="thumbnail-btn" type="button" onClick={checkThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
