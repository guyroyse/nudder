When /^I connect to Nudder$/ do
	@client.connect
end

Then /^I see the login prompt$/ do
	@client.text.should include('User:')
end

Given /^I have connected to Nudder$/ do
	@client.connect
end

When /^I enter a valid user name$/ do
	@client.enter 'guy'
end

Then /^I see the password prompt$/ do
	@client.text.should include('Password:')
end

When /^I enter a valid password$/ do
  @client.enter 'password'
end

Then /^I see the welcome message$/ do
  @client.text.should include('Welcome to the server')
end

When /^I enter an invalid user name$/ do
  pending # express the regexp above with the code you wish you had
end

When /^I enter an invalid password$/ do
  pending # express the regexp above with the code you wish you had
end

Then /^I see the login failure message$/ do
  pending # express the regexp above with the code you wish you had
end

When /^I enter in invalid password$/ do
  pending # express the regexp above with the code you wish you had
end

