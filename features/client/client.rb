require 'socket'

class Client
	attr_accessor :text
	def connect
		@socket = Socket.tcp 'localhost', 8124
		@text = @socket.recv(1024)
	end
	def enter(string)
		@socket.sendmsg string
		@text = @socket.recv(1024)
	end
	def disconnect
		@socket.close unless @socket.nil?
	end
end
