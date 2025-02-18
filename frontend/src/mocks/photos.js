const photos = [
  {
    id: "1",
    location: { city: "Montreal", country: "Canada" },
    urls: {
      full: "/Image-1-Full.jpeg",
      regular: "/Image-1-Regular.jpeg",
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "2",
    location: { city: "Toronto", country: "Canada" },
    urls: {
      full: "/Image-2-Full.jpeg",
      regular: "/Image-2-Regular.jpeg",
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "3",
    location: { city: "Ottawa", country: "Canada" },
    urls: {
      full: "/Image-3-Full.jpeg",
      regular: "/Image-3-Regular.jpeg",
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "4",
    location: { city: "Quebec", country: "Canada" },
    urls: {
      full: "/Image-4-Full.jpg",
      regular: "/Image-4-Regular.jpg",
    },
    user: {
      id: "4",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "5",
    location: { city: "Vancouver", country: "Canada" },
    urls: {
      full: "/Image-5-Full.jpg",
      regular: "/Image-5-Regular.jpg",
    },
    user: {
      id: "5",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "6",
    location: { city: "Montreal", country: "Canada" },
    urls: {
      full: "/Image-6-Full.jpg",
      regular: "/Image-6-Regular.jpg",
    },
    user: {
      id: "6",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "7",
    location: { city: "Calgary", country: "Canada" },
    urls: {
      full: "/Image-7-Full.jpg",
      regular: "/Image-7-Regular.jpg",
    },
    user: {
      id: "7",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "8",
    location: { city: "Ottawa", country: "Canada" },
    urls: {
      full: "/Image-8-Full.jpg",
      regular: "/Image-8-Regular.jpg",
    },
    user: {
      id: "8",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "9",
    location: { city: "Nova Scotia", country: "Canada" },
    urls: {
      full: "/Image-9-Full.jpg",
      regular: "/Image-9-Regular.jpg",
    },
    user: {
      id: "9",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: "10",
    location: { city: "Edmonton", country: "Canada" },
    urls: {
      full: "/Image-10-Full.jpg",
      regular: "/Image-10-Regular.jpg",
    },
    user: {
      id: "10",
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
];

//similar photos
photos.forEach((photo, index) => {
  photo.similar_photos = photos
  .filter((_, i) => i !== index)
  .slice(0, 4);
});

export default photos;