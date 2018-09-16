class PhotoBuilder {
  constructor(build) {
    this.id = build.id;
    this.farm = build.farm;
    this.title = build.title;
    this.server = build.server;
    this.secret = build.secret;
  }

  static get Builder() {
    class Builder {
      constructor(id) {
        this.id = id;
      }

      withFarm(farm) {
        this.farm = farm;
        return this;
      }

      withTitle(title) {
        this.title = title;
        return this;
      }

      withServer(server) {
        this.server = server;
        return this;
      }

      withSecret(secret) {
        this.secret = secret;
        return this;
      }

      build() {
        return new PhotoBuilder(this);
      }
    }
    return Builder;
  }
}

export default PhotoBuilder;
