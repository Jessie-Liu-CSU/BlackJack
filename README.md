# BlackJack
1. 修改了 https://github.com/EdgelessCasino/Smart-Contracts 里的代码，生成了所有的contracts。并且all contracts已经通过了编译。（Edgeless的源代码是2018年写的，支持的solidity是version 0.4.10，所以我修改成了0.5.1以上的）
2. contract里有stand function，但是没有hit。我们需要自己写。（我还没有写）
3. 现在正在测试stand有没有问题。
4. Event
    1)NewGame
    2)Result
    3)Error
5. Function
    1)initGame
    2)stand
    3)standAndRebet
    4)setSigner
    5)setMinBet
    6)setMaxBet
    7)withdraw
