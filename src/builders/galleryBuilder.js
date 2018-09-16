class GalleryBuilder {
  constructor(build) {
    this.id = build.id;
    this.title = build.title;
    this.description = build.description;
    this.count_total = build.count_total;
    this.count_views = build.count_views;
    this.count_comments = build.count_comments;
  }

  static get Builder() {
    class Builder {
      constructor(id) {
        this.id = id;
      }

      withTitle(title) {
        this.title = title;
        return this;
      }

      withDescription(description) {
        this.description = description;
        return this;
      }

      withCountTotal(countTotal) {
        this.count_total = countTotal;
        return this;
      }

      withCountViews(countViews) {
        this.count_views = countViews;
        return this;
      }

      withCountComments(countComments) {
        this.count_comments = countComments;
        return this;
      }

      build() {
        return new GalleryBuilder(this);
      }
    }
    return Builder;
  }
}

export default GalleryBuilder;
