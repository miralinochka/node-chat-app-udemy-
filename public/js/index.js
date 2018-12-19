const socket = io();

socket.on('connect', function() {
  console.log('connected to server')

  socket.emit('createMessage', {
    from: 'artem',
    text: 'Hey, this is alina'
  });
});

socket.on('disconnect', function() {
  console.log('disconnected from server')
});

socket.on('newMessage', function(message) {
  console.log('new message: ', message)
})