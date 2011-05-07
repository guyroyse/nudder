When /^I connect to Nudder$/ do
	@client.connect
end

Then /^I see the login prompt$/ do
	@client.contains('User:').should be_true
end

Given /^I have connected to Nudder$/ do
  pending # express the regexp above with the code you wish you had
end

When /^I enter a valid user name$/ do
  pending # express the regexp above with the code you wish you had
end

Then /^I see the password prompt$/ do
  pending # express the regexp above with the code you wish you had
end

When /^I enter a valid password$/ do
  pending # express the regexp above with the code you wish you had
end

Then /^I see the welcome message$/ do
  pending # express the regexp above with the code you wish you had
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

