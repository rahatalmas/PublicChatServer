var socket = io.connect("http://localhost:8080/");

var handle = document.getElementById('handle-name');
var text = document.getElementById('message');
var btn = document.getElementById('send-text');
var output = document.getElementById('all-text');
var feedback = document.getElementById('feedback');
btn.addEventListener('click',()=>{
    socket.emit('chat',{
        handle:handle.value,
        text:text.value
    });
});

text.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value);
});

socket.on('chat',(data)=>{
   output.innerHTML+= '<p>' + data.handle + ': '+data.text + '</p>';
})

