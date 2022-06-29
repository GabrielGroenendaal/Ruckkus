export const createConversationParticipation = conversationParticipation => {
      return $.ajax({
            url: `/api/conversation_participants`,
            method: 'POST',
            data: { conversationParticipation }
      })
};

export const deleteConversationParticipation = conversationParticipation => {
      return $.ajax({
            url: `api/conversation_participants/${conversationParticipation.id}`,
            method: 'DELETE',
            data: { conversationParticipation }
      })
};