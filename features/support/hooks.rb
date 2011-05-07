Before do
  @client = Client.new
end

After do
  @client.disconnect
end
