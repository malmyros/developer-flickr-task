const apiBaseUrl = 'https://api.flickr.com';
const apiKey = 'e53bbd0a05d8d19159c5275bb8e8bb29';
const galleryId = '72157671261543617';

module.exports = {
  apiBaseUrl,
  getPhotos: `${apiBaseUrl}/services/rest/?method=flickr.galleries.getPhotos&api_key=${apiKey}&gallery_id=${galleryId}&get_gallery_info=${galleryId}&format=json&nojsoncallback=1`,
  getPhoto: photoId => `${apiBaseUrl}/services/rest/?method=flickr.photos.getInfo&api_key=${apiKey}&photo_id=${photoId}&format=json&nojsoncallback=1`,
};
