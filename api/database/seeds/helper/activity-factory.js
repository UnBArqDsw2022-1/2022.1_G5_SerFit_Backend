const factory = {
    createActivity: function(name, description, thumbnailUrl, videoUrl, gifUrl) {
        return {
            name: name,
            description: description,
            thumbnailUrl: thumbnailUrl,
            videoUrl: videoUrl,
            gifUrl: gifUrl,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null
        };
    },

    createGym: function(name, thumbnailUrl) {
        return {
            name: name,
            thumbnailUrl: thumbnailUrl,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null
        };
    },

    createActivityGym: function(days, times, teacher, activityId, gymId) {
        return {
            days: days,
            times: times,
            teacher: teacher,
            activityId: activityId,
            gymId: gymId,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null
        };
    }
}

module.exports = factory;