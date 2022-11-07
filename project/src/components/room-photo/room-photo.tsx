type RoomPhotoProps = {
  photo: string;
}

function RoomPhoto({ photo }: RoomPhotoProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={photo} alt="Photo_studio" />
    </div>
  );
}

export default RoomPhoto;
