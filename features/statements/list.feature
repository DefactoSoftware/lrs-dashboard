Feature: Statements List
  Background:
    When I open the site "/statements/list"

  Scenario: Requires authentication
    Then I expect that the path is "/login"
