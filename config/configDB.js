module.exports = {
    db: {
        host: process.env.MONGODB_ADDON_HOST || '127.0.0.1',
        port: process.env.MONGODB_ADDON_PORT || '27017',
        username: process.env.MONGODB_ADDON_USER || '',
        password: process.env.MONGODB_ADDON_PASSWORD || '',
        db_name: process.env.MONGODB_ADDON_DB || 'ai_skin'
    },
    baseURL: "https://api-soida.applamdep.com",
    linkChangePass: "https://id.applamdep.com/#/change/",
    linkAPI: "/api/update-status?id=",
}