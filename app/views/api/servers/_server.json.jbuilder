json.extract! server, :id, :server_name, :is_public, :owner_id
# json.users server.users.map(&:id);

json.channels do 
  server.channels.each do |channel|
    json.set! channel.id do
      json.partial! "api/channels/channel", channel: channel
    end
  end
end

json.users do 
  server.users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.currentUser do 
  json.partial! "api/users/user", user: current_user
end