var socket = function(io) {

	io.on('connect', function(socket) {
		console.log('Client connected');
	});
};

module.exports = socket;
