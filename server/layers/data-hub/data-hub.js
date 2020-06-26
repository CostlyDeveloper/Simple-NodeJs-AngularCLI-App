const messaging = require('../../layers/messaging');

class Response {

    Response = null;
    Message  = new messaging();

    setResponse(_Response) {
        this.Response = _Response;
    }

} // class DataHub


// const dataHub = new DataHub();
module.exports = Response;
