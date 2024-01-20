// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@aave/core-v3/contracts/interfaces/IPool.sol";
import "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LazyGhost {
	IPoolAddressesProvider public provider;
	IPool public lendingPool;

	constructor(address _provider) {
		provider = IPoolAddressesProvider(_provider);
		lendingPool = IPool(provider.getPool());
	}

	function PayLater(
		address asset,
		uint256 amount,
		address receiver
	) external {
		IERC20(asset).approve(address(lendingPool), amount);
		lendingPool.borrow(asset, amount, 2, 0, address(this));
		IERC20(asset).transfer(receiver, amount);
	}
}