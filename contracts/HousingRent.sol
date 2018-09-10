pragma solidity ^0.4.24;

contract HousingRent {

    //House = adopters, houseId = petId

    address[16] public Houses;

    function renting(uint houseId) public returns (uint) 
    {

        require(houseId >= 0 && houseId <= 15);

        Houses[houseId] = msg.sender;

        return houseId;

    }

    function getHouse() public view returns (address[16]) 
    {
        return Houses;
    }

}