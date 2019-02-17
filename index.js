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
        echo: function(request, response) {
            const message = request.params.message
            const name = request.params.name
            return response.text(`Sending echo ${message} ${name}`).send();
        },
        secret: function(request, response) {
            return response.text('Some dirty secret').send();
        }
    };
}
