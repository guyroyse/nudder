class LoginScreen
	attr_reader :user_prompt, :password_prompt, :login_response
	def initialize(client)
		@client = client
		@client.connect
		@user_prompt = @client.text
	end
	def user=(user)
		@client.enter user
		@password_prompt = @client.text
	end
	def password=(password)
		@client.enter password
		@login_response = @client.text
	end
end
