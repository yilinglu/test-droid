module.exports = function() => {
    return {
        pong: function(request, response) {
            return response.text('Pong!');
        },
        echo: function(request, response) {
            const message = request.params.message
            return response.text(`Sending echo ${message}`);
        }
    };
}
