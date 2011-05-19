Feature: Room

Scenario: User can see a basic room
	Given I have logged into Nudder
	When I look at the room
	Then I see a room name of Lobby
		And I see a room description containing "The lobby is ornately detailed"
