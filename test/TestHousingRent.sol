pragma solidity ^0.4.24;
//adoption = rented adopt = renting

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/HousingRent.sol";

contract TestHousingRent {

    HousingRent rented = HousingRent(DeployedAddresses.HousingRent());

    function testUserCanRentHouse() public {
        uint returnedId = rented.renting(8);

        uint expected = 8;

        Assert.equal(returnedId, expected, "House of of the rented ID will be shown as ID value 8");
    }

    function testGetHouseAddressByHouseId() public {

        address expected = this;

        address House = rented.Houses(8);

        Assert.equal(House, expected, "Whomever Owns House of ID 8 sall claim thee recorded");
    }

    function testGetHouseAddressByHouseIdinArray() public {

        address expected = this;


        //store the house in memory instead of the contract memory.
        address[16] memory House = rented.getHouse();

        Assert.equal(House[8], expected, "recorded ID value 8");

    }



}