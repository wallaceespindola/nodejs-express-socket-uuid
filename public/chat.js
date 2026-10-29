const socket = io();
const list = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');
const time = new Intl.DateTimeFormat(undefined, { timeStyle: 'short' });
let me;

const add = (text, className, id) => {
  const li = document.createElement('li');
  li.textContent = text;
  li.className = className;
  if (id) li.title = id;
  list.append(li);
  list.scrollTop = list.scrollHeight;
};

const name = prompt('Enter your username:');
if (name) socket.emit('join', name);

socket.on('joined', (user) => {
  me = user;
  add(`You entered the chat as ${user.name}`, 'info', user.id);
});
socket.on('user joined', ({ user }) => {
  if (user.id !== me?.id) add(`${user.name} has entered the chat`, 'info', user.id);
});
socket.on('chat message', (msg) => {
  const own = msg.user.id === me?.id;
  add(
    `${msg.user.name} (${time.format(new Date(msg.timestamp))}): ${msg.text}`,
    own ? 'mine' : 'theirs',
    msg.id,
  );
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!input.value.trim()) return;
  socket.emit('chat message', input.value);
  input.value = '';
});
