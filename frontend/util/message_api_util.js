export const fetchMessage = messageId => {
      return $.ajax({
            method: 'GET',
            url: `api/messages/${messageId}`
      });
};

export const createMessage = (channelId, message) => {
      return $.ajax({
            method: 'POST',
            url: `api/channels/${channelId}/messages`,
            data: { message: message }
      });
};

export const updateMessage = message => {
      return $.ajax({
            method: 'PATCH',
            url: `api/messages/${message.id}`,
            data: { message: message }
      })
}

export const deleteMessage = messageId => {
      return $.ajax({
            method: 'DELETE',
            url: `api/messages/${messageId}`
      })
}