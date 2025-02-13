import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

function App() {
const photos = [
{
  id: "1",
  username: "Joe Example",
  location: { city: "Montreal", country: "Canada" },
  imageSource: "/Image-1-Regular.jpeg",
  profile: "/profile-1.jpg",
},
{
  id: "2",
  username: "Kevin Costner",
  location: { city: "Toronto", country: "Canada" },
  imageSource: "/Image-1-Regular.jpeg",
  profile: "/profile-1.jpg",
},
{
  id: "3",
  username: "Eartha Kitt",
  location: { city: "Alabama", country: "USA" },
  imageSource: "/Image-1-Regular.jpeg",
  profile: "/profile-1.jpg",
}
];

return (
    <div className="photo-list">
    {photos.map((photo) => (
      <PhotoListItem
      key={photo.id}
      photo={photo}
      />
     ))}
    </div>
  );
}

export default App;
