// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract HelloWorld {
    
    //struct of suggestion
    struct Suggestion {
        string author;
        string department;
        string course;
        string topic;
        string suggestion;
    }

    // string public created = "created";
    Suggestion[] public allSuggestions;

    mapping(address => Suggestion) public suggestions;
    uint public suggestCount; 

    // a function to create suggestions
    function createSuggest(
        string memory _author,
        string memory _department, 
        string memory _course, 
        string memory _topic, 
        string memory _suggestion
        ) public returns(bool) {
        Suggestion memory mySuggest;

        mySuggest.author = _author;
        mySuggest.department = _department;
        mySuggest.course = _course;
        mySuggest.topic = _topic;
        mySuggest.suggestion = _suggestion;

        suggestions[msg.sender] = mySuggest;
        allSuggestions.push(Suggestion(_author, _department, _course, _topic, _suggestion));
        suggestCount++;
        return true;

    }
    // a function to read suggestions

    function readSuggest(address _address) public view returns(string memory) {
        return suggestions[_address].author;
    }

    // Read all suggestions made by users

    function getAllSuggest() public view returns(Suggestion[] memory){
        Suggestion[] memory ret = new Suggestion[](suggestCount);
        for (uint i = 0; i < suggestCount; i++) {
            ret[i] = allSuggestions[i];
        }
        return ret;
    }
}