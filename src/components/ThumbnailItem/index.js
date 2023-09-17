// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {each, getFilteredImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = each
  const onSelectImage = () => {
    getFilteredImage(id)
  }
  return (
    <li className="list-con">
      <button type="button" className="list-button-con" onClick={onSelectImage}>
        <img
          className="list-image-con"
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
