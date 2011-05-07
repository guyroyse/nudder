require 'socket'

class Client
	def connect
		@socket = Socket.tcp 'localhost', 8124
		@text = @socket.recv(1024)
	end
	def contains(string)
		@text.include? string
	end
	def disconnect
		@socket.close
	end
end
