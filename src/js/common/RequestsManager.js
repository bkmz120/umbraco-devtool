'use strict';
import RequestsStorage from './RequestsStorage.js';
import {diff} from 'deep-diff';

export default class RequestsManager {
    constructor(document) {
        this.logCallback = ()=>{};

        this._requestsStorage = new RequestsStorage();

        var self = this;
        document.addEventListener("RequestIntercepted",function(e){
            if (e.detail!==null) {
                self._processRequest(e.detail);
            }
        });
    }

    onLog(callback) {
        this.logCallback = callback;
    }

    _processRequest(request) {
        if (request.method == "GET") {
            this._requestsStorage.pushGETRequest(request);
        }
        else if (request.method == "POST") {
            let GETRequest = this._requestsStorage.findRelated(request);
            if (GETRequest!==null) {
                this._diffRequests(GETRequest,request);
            }
        }
    }

    _diffRequests(GETRequest,POSTRequest) {
        var differences = diff(GETRequest.responseBody, POSTRequest.responseBody);
        var logResult = {
            GETRequest:GETRequest,
            POSTRequest:POSTRequest,
            differences:differences,
        }
        this.logCallback(logResult);
    }
}