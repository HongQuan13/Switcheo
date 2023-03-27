pragma solidity >=0.4.25 <0.9.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenBalance {
    function getBalances(address _wallet, address[] memory _tokens) public view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](_tokens.length);

        for (uint256 i = 0; i < _tokens.length; i++) {
            IERC20 token = IERC20(_tokens[i]);
            balances[i] = token.balanceOf(_wallet);
        }

        return balances;
    }
}
