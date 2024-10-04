Feature: WebdriverUniversity login page

Scenario: Login using valid credentials
    Given I access the WebdriverUniversity Login Portal page
    When I enter a username werbdriver
    And I enter the password webdriver123
    And I click on login button
    Then I should be present with following message validation succeeded

Scenario Outline: Login using valid credentials
    Given I access the WebdriverUniversity Login Portal page
    When I enter a username <username>
    And I enter the password <password>
    And I click on login button
    Then I should be present with following message <message>

    Examples:
        | username | password | message |
        | werbdriver  | webdriver123  | validation succeeded  |
        | werbdriver1  | webdriver1233  | validation failed  |