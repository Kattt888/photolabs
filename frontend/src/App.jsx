import React, { useState } from 'react';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import './App.scss';

const App = () => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  return (
  <div className="App">
    <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
    <PhotoList />
  </div>
  );
};


export default App;
