// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Coin is Ownable {
    using SafeMath for uint256;

    uint256 public payPercentage = 90;
    uint256 public maxBet = 10 ether;
    uint256 public minBet = 100000;
    uint256 public totalFlips = 0;

    event Status (
        string _msg,
        address indexed player,
        uint amount,
        bool winner,
        bool heads,
        bool choice
    );

    function Play(bool _playerChoice) public payable {
        require(msg.value <= maxBet, "Bet amount exceeds maximum limit");
        require(msg.value >= minBet, "Bet amount is below minimum limit");
        
        bool isHeads = flipCoin();
        bool isWinner = isHeads == _playerChoice;
        uint256 prizeAmount = 0;
        string memory resultMessage;

        if (isWinner) {
            resultMessage = "Congrats, you chose correctly.";
            prizeAmount = msg.value.mul(100 + payPercentage).div(100);
            require(address(this).balance.sub(msg.value) >= prizeAmount, "Contract does not have enough funds to pay out");
        } else {
            resultMessage = "Tough luck, you chose incorrectly.";
        }

        // Interactions: External calls
        if (isWinner) {
            payable(msg.sender).transfer(prizeAmount);
        }

        totalFlips = totalFlips.add(1); // Increment the totalFlips counter

        emit Status(resultMessage, msg.sender, msg.value, isWinner, isHeads, _playerChoice);
    }

    function flipCoin() private view returns(bool) {
        uint256 flip = uint256(keccak256(abi.encodePacked(blockhash(block.number-1), msg.sender)));
        return flip % 2 == 0;
    }

    function setBetLimits(uint256 _maxBet, uint256 _minBet, uint32 _payPercentage) public onlyOwner {
        maxBet = _maxBet;
        minBet = _minBet;
        payPercentage = _payPercentage;
    }

    function getContractBalance() public view returns(uint256) {
        return address(this).balance;
    }

    receive() external payable{}
}
