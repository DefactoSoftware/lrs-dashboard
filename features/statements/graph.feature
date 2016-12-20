Feature: Statements Graph
  Background:
    When I open the site "/statements/graph"

  Scenario: Requires authentication
    Then I expect that the path is "/login"
