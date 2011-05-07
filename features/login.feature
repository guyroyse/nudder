Feature: User login

Scenario: User can connect to Nudder
	When I connect to Nudder
	Then I see the login prompt

Scenario: User can successfully login
	Given I have connected to Nudder
	When I enter a valid user name
	Then I see the password prompt
	When I enter a valid password
	Then I see the welcome message

Scenario: User is given an error when login fails
	Given I have connected to Nudder
	When I enter an invalid user name
		And I enter an invalid password
	Then I see the login failure message
		And I see the login prompt
	When I enter a valid user name
		And I enter an invalid password
	Then I see the login failure message
		And I see the login prompt
