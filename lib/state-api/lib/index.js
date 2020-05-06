class StateAPI {
    constructor(rawData) {
        this.data= {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors),
            searchTerm: ''
        };
        this.subscriptions= {};
        this.lastSubscritpionId= 0;
    }
    mapIntoObject(arr) {
        return arr.reduce((acc, cur)=> {
            acc[cur.id]= cur;
            return acc;
        }, {})
    }
    lookUpAuthor= (authorId)=> {
        return this.data.authors[authorId];
    }
    getState= ()=> {
        return this.data;
    }
    subscribe= (cb)=> {
        this.lastSubscritpionId++;
        this.subscriptions[this.lastSubscritpionId]= cb;
        return this.lastSubscritpionId;

    }
    unsubscribe= (subscriptionId)=> {
        delete this.subscriptions[subscriptionId]
    }
    notifySubscribers= ()=> {
        Object.values(this.subscriptions).forEach((cb)=> cb());
    }

    mergeWithState= (stateChange) => {
        this.data= {
            ...this.data,
            ...stateChange
        }
        this.notifySubscribers()
    }

    setSearchTerm= (searchTerm)=> {
        this.mergeWithState({
            searchTerm
        })
    }
}

export default StateAPI;