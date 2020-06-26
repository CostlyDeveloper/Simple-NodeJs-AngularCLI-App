const validation = require('../../layers/validation');

class Email {
    Email   = null;
    Message = null;

    isValid() {
        return validation.invalidMembersFinder(this, this.Email, this.Message).length === 0;
    }

    getInvalidFields() {
        return validation.invalidMembersFinder(this, this.Email, this.Message);
    }

    valueSetter(_Data) {
        this.Email   = validation.emailValidation(_Data.Email) ? _Data.Email : this.Email;
        this.Message = validation.messageValidation(_Data.Message) ? _Data.Message : this.Message;
    }
} // class Email

module.exports = Email;
