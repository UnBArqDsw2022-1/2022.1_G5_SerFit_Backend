const factory = {
    createExerciseCategory: function(name, thumbnail) {
        return {
            name: name,
            thumbnailUrl: thumbnail,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null
        };
    },

    createExercise: function(name, description, thumbnail, video, gif, category) {
        return {
            name: name,
            description: description,
            thumbnailUrl: thumbnail,
            videoUrl: video,
            gifUrl: gif,
            category: category,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null
        }
    }
}

module.exports = factory;