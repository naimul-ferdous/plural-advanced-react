class StateAPI {
    constructor(rawData) {
        this.data= {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors)
        };
    }
    mapIntoObject(arr) {
        return arr.reduce((acc, cur)=> {
            acc[cur.id]= cur;
            return acc;
        }, {})
    }
    lookUpAuthor (authorId) {
        return this.data.authors[authorId];
    }
    getState () {
        return this.data;
    }
}

module.exports = StateAPI;