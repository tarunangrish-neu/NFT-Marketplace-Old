// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/NFTMarketplace.sol";

contract NFTMarketplaceTest is Test {
    NFTMarketplace marketplace;
    address testUser = address(0x123);

    function setUp() public {
        // Deploy the marketplace contract before each test
        marketplace = new NFTMarketplace();
    }

    function testCreateToken() public {
        // Assuming `createToken` function is payable and requires the list price to be sent along
        uint256 listPrice = marketplace.getListPrice();
        string memory tokenURI = "ipfs://example";

        // Simulate calling `createToken` from `testUser` and sending the list price
        vm.prank(testUser);
        uint256 tokenId = marketplace.createToken{value: listPrice}(tokenURI, 1 ether);

        // Assert the token was created with the correct URI and owner
        assertEq(marketplace.tokenURI(tokenId), tokenURI);
        assertEq(marketplace.ownerOf(tokenId), testUser);
    }

    

}
