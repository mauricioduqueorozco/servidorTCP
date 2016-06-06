var net = require('net');
var data = [];

// var net = require('net');

var client3 = new net.Socket();
var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);

	client3.connect(2000, '172.30.236.15', function() {
		console.log('Connected');

		socket.on('data', function(data){
			// console.log('client said: '+data)
				client3.write(data);

		})
	});
});

server.listen(2001, '172.31.68.14');

// var client3 = new net.Socket();
// client3.connect(2000, '172.30.236.15', function() {
// 	console.log('Connected');
// 	setInterval(function updateRandom() {
//             var y = Math.random() * 10 - 5;
//         	client3.write('S2 ' + y)
//     	}, 700);
// 	client3.write('Hello, server! Love, Client3.');
// });
//
// client3.on('data', function(data) {
// 	console.log('Received3: ' + data);
// 	//client3.destroy(); // kill client3 after server's response
// });
