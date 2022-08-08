class StoreBuilder {

    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.deletedAt = new Date();
    }
    
    setName(name) {
        this.name = name;
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    setThumbnailUrl(thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
        return this;
    }

    setWebsiteUrl(websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }

    build() {
        return {
            name: this.name,
            description: this.description,
            thumbnailUrl: this.thumbnailUrl,
            websiteUrl: this.websiteUrl,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt
        }
    }
}

module.exports = StoreBuilder;