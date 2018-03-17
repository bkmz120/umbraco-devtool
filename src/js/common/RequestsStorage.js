'use strict';
export default class RequestsStorage {
    constructor() {
        this._storage = [];
    }

    pushGETRequest(GETRequest) {
        GETRequest.responseBody = this._parseResponseBody(GETRequest.responseBody);
        if (GETRequest.responseBody!==null) {
            this._storage.push(GETRequest);
        }
    }

    findRelated(POSTRequest) {
        POSTRequest.responseBody = this._parseResponseBody(POSTRequest.responseBody);
        let relatedRequest = null;
        if (POSTRequest.responseBody!==null && POSTRequest.responseBody.key!==undefined && POSTRequest.responseBody.id!==undefined) {
            for (var i=0;i<this._storage.length;i++) {
                if (this._storage[i].responseBody.key === POSTRequest.responseBody.key) {
                    //here we foun releated GET request for POST request
                    relatedRequest = this._storage[i];
                    // this._storage.splice(i,1);
                }
            }
        }
        return relatedRequest;
    }

    _parseResponseBody(responseBody) {
        if (typeof responseBody !== "string" ) return null;

        if (responseBody.indexOf(")]}',")===0) {
            responseBody = responseBody.substring(5).trim();
        }
        let responseObject;
        try {
           responseObject = JSON.parse(responseBody);
           if (typeof responseObject === null || typeof responseObject !== "object" ) {
            responseObject = null;
           }
        }
        catch(e) {
            responseObject = null;
        }
        return responseObject;
    }
}