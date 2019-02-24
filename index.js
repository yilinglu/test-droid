module.exports = function() {
    return {
        pong: function(request, response) {
            return response.text('Pong!').send();
        },
        dmNotAllowedPong: function(request, response) {
            return response.text('Pong!').send();
        },
        dmPong: function(request, response) {
            return response.text('Pong!').send();
        },
        explicitPing: function(request, response) {
            return response.text('Pong!').send();
        },
        noExplicitPing: function(request, response) {
            return response.text('No explicit pong!').send();
        },
        personalPing: function(request, response) {
            return response.text('Personal pong!').send();
        },
        noPersonalPing: function(request, response) {
            return response.text('No personal pong!').send();
        },
        echo: function(request, response) {
            const message = request.params.message
            const name = request.params.name
            return response.text(`Sending echo ${message} ${name}`).send();
        },
        directMessage: function(request, response) {
            const target = request.params.name;
            return response.text('hello from test', target).send();
        },
        secret: function(request, response) {
            return response.text('Some dirty secret').send();
        },
        sendFile: function(request, response) {
            const fileName = request.params.name;
            const content = request.params.content;
            return response.upload(fileName, content).send();
        },
        sendAttachment: function(request, response) {
            const attachments = [
                {
                    fallback: 'ReferenceError - UI is notdefine: https://honeybadger.io/path/to/event/',
                    text: '<https://honeybadger.io/path/to/event/|ReferenceError> - UI is not defined',
                    fields: [
                        {
                            title: 'Project',
                            value: 'Awesome Project',
                            short: true
                        },
                        {
                            title: 'Environment',
                            value: 'production',
                            short: true
                        }
                    ],
                    color: '#F35A00'
                }
            ];
            return response.attachment('my attachment', attachments).send();
        }
    };
}
