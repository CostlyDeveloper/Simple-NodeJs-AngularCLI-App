class Validation {

    static  EmailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    emailValidation(_Input) {
        let lassie = false;
        if (typeof _Input === 'string') {
            lassie = Validation.EmailRegex.test(_Input);
        }
        return lassie;
    }

    messageValidation(_Input) {
        let lassie = false;
        if (typeof _Input === 'string') {
            lassie = _Input.length > 30
        }
        return lassie;
    }

    invalidMembersFinder(_Object, ..._PropertiesForValidation){
        const invalidPropertyList = [];
        Object.keys(_Object).forEach(key => {
            if(_Object[key] === null){
                if(_PropertiesForValidation.includes(_Object[key])){
                    invalidPropertyList.push(key)
                }
            }
        });
        return invalidPropertyList;
    }


} // class Validation

const invalidMembersFinder   = new Validation().invalidMembersFinder;
const emailValidation   = new Validation().emailValidation;
const messageValidation = new Validation().messageValidation;
module.exports          = {emailValidation, messageValidation, invalidMembersFinder};
