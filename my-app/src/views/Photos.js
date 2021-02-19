/**Imported components */
import React from "react";
import Photo from "../components/Photo";
import NotFound from "../components/NotFound";
import { useLocation, useParams, useHistory } from "react-router-dom";

const PhotoContainer = ({ apiKey, search }) => {
  let location = useLocation();
  let { searchInput } = useParams();
  let [photos, setPhotos] = React.useState(null);
  let [userInput, setUserInput] = React.useState(false);

  React.useEffect(() => {
    getPhotos();
  }, [search]);
  /**This function calls the API flickr */
  const getPhotos = async () => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        let photoArray = data.photos.photo;
        setPhotos(photoArray);
        console.log(photoArray);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="photo-container">
      <h2>Results for {search}</h2>
      <ul>
        {}
        {photos && photos.length ? (
          photos.map((photo, index) => {
            return <Photo key={index} src={photo} />;
          })
        ) : (
          <NotFound />
        )}
      </ul>
    </div>
  );
};

export default PhotoContainer;
