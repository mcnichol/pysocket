import socket

socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket.bind(('localhost',5434))

while 1:
	socket.listen(1)
	print("Listening...")
	connection, address = socket.accept()
	print(connection)
	print(address)

	while 1: 
		data = connection.recv(1024)
		#Returns 0 when connection is closed or is closing
		if len(data) == 0:
			print("Disconnected...")
			break;
		else:
			try:	
				print(data)
			except:
				connection.close()
connection.close()
