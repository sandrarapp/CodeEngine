module.exports.main = main = async (args) => {
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
    const doSomething = () => {
        const data = await response.json();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve(data);
             }, 100000);
        });
    };
    // const data = await response.json();
    const data = await doSomething();

    return {
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: response.status,
        body: data
    };
};
