module.exports.main = main = async (args) => {
    // refernce external module 
    const LoremIpsum = require("lorem-ipsum").LoremIpsum;
    
    // create a default text generator. 
    const lorem = new LoremIpsum();
    
    let url = 'https://httpbin.org/';
    requestData = {}
    if (args["__ce_method"] == "POST") {
        url = url + "post"
        requestData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(args)
        }
    } else {
        url = url + "get"
        requestData = {
            method: 'GET'
        }
    }

    const response = await fetch(url, requestData);
    const data = await response.json();

    return {
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: response.status,
        body: data
    };
};
