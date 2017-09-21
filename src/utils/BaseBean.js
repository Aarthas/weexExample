class BaseBean {


    constructor(resp) {
        this.resp = resp;
    }


    isSuccess() {
        return this.resp.data.code == 1;
    }

    getData() {
        return this.resp.data.data;
    };

    getMessage() {
        return this.resp.data.codeMessage;
    }

    getCode() {
        return this.resp.data.code;
    }

    showMessage() {

        console.log("this.getMessage()=" + this.getMessage())

    }


    isOK() {
        return this.resp.status == 200;
    }

    is401() {
        return this.resp.status == 401;
    }

    getSessionId() {

        return this.getData().sessionId;
    }

    isListEmpty() {

        let data = this.getData();
        if (data == null || data.list == null || data.list.length == 0) {
            return true;
        }
        return false;
    }

}

module.exports = BaseBean;
