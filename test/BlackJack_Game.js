//const utils = require("./helpers/utils");
//const { time } = require("@openzeppelin/test-helpers");
const { expect } = require('chai');
//const waffle = require('ethereum-waffle');
const { waffle } = require("hardhat");
const { deployContract } = waffle;
const provider = waffle.provider;


// `describe` is a Mocha function that allows you to organize your test. It's
// not actually needed, but having your test organized makes debugging them
// easier. All Mocha functions are available in the global scope.

// `describe` receives the name of a section of your test suite, and a callback.
// The callback must define the test of that section. This callback can't be
// an async function.


describe("BlackJack_Game", function () {
    // Mocha has four functions that let you hook into the the test runner's
    // lifecyle. These are: `before`, `beforeEach`, `after`, `afterEach`.

    // They're very useful to setup the environment for test, and to clean it
    // up after they run.

    // A common pattern is to declare some variables, and assign them in the
    // `before` and `beforeEach` callbacks.

    const zombieNames = ["Zombie 1", "Zombie 2"];
    let CZ;
    let CZInstance;
    let alice;
    let bob;

    const deck = [11, 8, 2];
    const gameId = '0xC2f4dAAD4C142678f1cA5707f22262Fcd2d89DA4';
    let seed = 2;
    let numCards = 3;
    let v;
    let r;
    let s;



    // `beforeEach` will run before each test, re-deploying the contract every
    // time. It receives a callback, which can be async.

    beforeEach(async function () {
        [alice, bob] = await ethers.getSigners();
        CZ = await ethers.getContractFactory("BlackJack_Game");
        CZInstance = await CZ.deploy();
    });

    // You can nest describe calls to create subsections.
    describe("BlackJack Stand Function", function () {
        it("Should be able to stand", async () => {
            await expect(CZInstance.stand(deck, gameId, seed, numCards, v, r, s))
                .to.emit(CZInstance, 'Result')
            //.withArgs(0, zombieNames[0], 8229335091878300);
            const x = await CZInstance.zombies(0);
            //console.log(x);
            expect(x.name).to.equal(zombieNames[0]);
        })
    });

})
