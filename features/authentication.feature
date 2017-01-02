Feature: Authentication
  Background:
    When I open the site "/login"

  Scenario: When succesfully login
    Then I want the page to be accessible
    When I add "foo@bar.com" to the inputfield "input[placeholder='Email...']"
    And I add "hallo" to the inputfield "input[placeholder='Password...']"
    And I click on the button "input[value='Submit']"
    Then I expect that the path is "/"

  Scenario: When fail to login
    When I add "unknownuser" to the inputfield "input[placeholder='Email...']"
    And I add "wrongpassword" to the inputfield "input[placeholder='Password...']"
    And I click on the button "input[value='Submit']"
    Then I expect that the path is "/login"
