Feature: Post a question to SellerCrowd
  Posting a question has aditional options like
  (chanel, button, sorting) which are
  also included in this Feature test.

  Background:
    Given SellerCrowd website is opened

  Scenario: Submit a too short question
    When user types in only one letter
    And clicks "Post" button
    Then warning message is displayed

  Scenario: Submit a question by pressing ENTER
    When user types in a question
    And press ENTER key
    Then posts should not be updated

  Scenario: Submit a question without chanel selection
    When user types in a question
    And clicks "Post" button
    Then Mandatory chanel selection warning is displayed

  Scenario: Submit a question on particular chanel
    When user types in a question
    And open chanel selector
    And user picks "OOH" chanel
    And clicks "Post" button
    Then posts are updated correctly
