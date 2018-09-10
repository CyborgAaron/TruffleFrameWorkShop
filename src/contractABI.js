var abi =
[
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Houses",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "houseId",
          "type": "uint256"
        }
      ],
      "name": "renting",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getHouse",
      "outputs": [
        {
          "name": "",
          "type": "address[16]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],