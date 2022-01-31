const HelloWorld = artifacts.require('HelloWorld');

contract('Suggestion', async (accounts) => {

    it("should check if the suggestion was created by a specific author", async () => {
        const helloWorldInstance = await HelloWorld.deployed();
        const createSuggest = await helloWorldInstance.createSuggest("Thomas", "Economics", "Economics", "Money", "A video describing how money works will be great", { from: accounts[0] });
        // const result = await helloWorldInstance.suggestions.call(accounts[0]);
        const author = await helloWorldInstance.readSuggest(accounts[0]);
        // console.log(department);
        assert.equal(author, "Thomas");
        // assert.equal(department[1], "Money");
    });

    it("should check if array was populated", async () => {
        const helloWorldInstance = await HelloWorld.deployed();
        const createSuggest = await helloWorldInstance.createSuggest("Erasmus", "Economics", "Economics", "The Permanent Income Hypothesis", "Can someone explain this to me", { from: accounts[1] });
        // const result = await helloWorldInstance.suggestions.call(accounts[1]);
        const author = await helloWorldInstance.allSuggestions.call(1);
        // console.log(department);
        assert.equal(author[0], "Erasmus");
    });

    it("should check to see if all suggestion made by users are displayed", async () => {
        const helloWorldInstance = await HelloWorld.deployed();
        const createSuggest = await helloWorldInstance.createSuggest("Josephine", "Mathematics", "Mathematics", "Caculus", "How do I differentiate a square root", { from: accounts[2] });
        const createSuggest1 = await helloWorldInstance.createSuggest("Wendy", "Electrical engineering", "Electrical Engineering", "Circuit Theory", "A video describing how circuits works will be great", { from: accounts[3] });
        // const result = await helloWorldInstance.suggestions.call(accounts[0]);
        const department = await helloWorldInstance.getAllSuggest.call();
        console.log(department);
        // assert.equal(department[0], "Economics");
    });

});