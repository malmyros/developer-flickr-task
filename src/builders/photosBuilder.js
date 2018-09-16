class PhotosBuilder {
  constructor(build) {
    this.photos = build.photos;
  }

  static get Builder() {
    class Builder {
      withPhotos(photos) {
        this.photos = photos;
        return this;
      }

      build() {
        return new PhotosBuilder(this);
      }
    }
    return Builder;
  }
}

export default PhotosBuilder;
