'use strict';
import {applyXHRPatch} from './common/injecter.js';
import RequestsManager from './common/RequestsManager.js';
import PrettyDifferences from './common/PrettyDifferences.js';

applyXHRPatch();


let requestsManager = new RequestsManager(document);
requestsManager.onLog(function(data){
    console.log("");
    console.log("********************* DIFFS FOUNDED ********************* ");
    console.log("GETRequest",data.GETRequest);
    console.log("POSTRequest",data.POSTRequest);
    PrettyDifferences.consoleLog(data.differences);
});