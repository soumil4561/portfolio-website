const sendMessage = async (name: string, email: string, message: string) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  });

  if (response.ok) {
    alert('Message sent!');
  } else {
    alert('Failed to send message');
  }
};

module.exports = {
    sendMessage
}