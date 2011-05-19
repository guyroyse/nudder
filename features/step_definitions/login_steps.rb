When /^I connect to Nudder$/ do
	@screen = LoginScreen.new @client
end

Then /^I see the login prompt$/ do
	@screen.user_prompt.should include('User:')
end

Given /^I have connected to Nudder$/ do
	Given "I connect to Nudder" 
end

When /^I enter a valid user name$/ do
	@screen.user = 'guy'
end

Then /^I see the password prompt$/ do
	@screen.password_prompt.should include('Password:')
end

When /^I enter a valid password$/ do
	@screen.password = 'password'
end

Then /^I see the welcome message$/ do
	@screen.login_response.should include('Welcome to the server')
end

When /^I enter an invalid user name$/ do
	@screen.user = 'yug'
end

When /^I enter an invalid password$/ do
  @screen.password = 'drowssap'
end

Then /^I see the login failure message$/ do
  @screen.login_response.should include('Invalid login')
end

