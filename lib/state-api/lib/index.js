class DataAPI {
    constructor(rawData) {
        this.rawData= rawData;
    }
    mapIntoObject(arr) {
        return arr.reduce((acc, cur)=> {
            acc[cur.id]= cur;
            return acc;
        }, {})
    }
    getArticles() {
        return this.mapIntoObject(this.rawData.articles);
    }

    getAuthors() {
        return this.mapIntoObject(this.rawData.authors);
    }
}

module.exports = DataAPI;