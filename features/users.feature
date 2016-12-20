Feature: Users overview
  Background:
    When I open the site "/users"

  Scenario: Requires authentication
    Then I expect that the path is not "/users"
    And I expect that the path is "/login"
