Feature: The site should work
  Background:
    When I open the site "/"

  Scenario: The title should be "Learning Record Store"
    Then I expect that the title is "Learning Record Store"
