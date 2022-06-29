json.extract! user, :id, :username, :email, :tag
if user.user_url == nil 
      json.user_url ""
else 
      json.user_url user.user_url
end

json.servers user.servers.map(&:id)