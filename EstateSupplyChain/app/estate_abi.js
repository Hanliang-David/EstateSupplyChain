//数据存储查询合约ABI
var estate_abi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "estate_id",
          "type": "uint256"
        },
        {
          "name": "raw_material_id",
          "type": "uint256"
        },
        {
          "name": "suppiler_name",
          "type": "bytes32"
        },
        {
          "name": "raw_material_name",
          "type": "bytes32"
        }
      ],
      "name": "setSupplier",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "estate_id",
          "type": "uint256"
        }
      ],
      "name": "getSupplier",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "bytes32"
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
          "name": "estate_id",
          "type": "uint256"
        },
        {
          "name": "seller_name",
          "type": "bytes32"
        },
        {
          "name": "estate_name",
          "type": "bytes32"
        },
        {
          "name": "estate_location",
          "type": "bytes32"
        },
        {
          "name": "estate_sellprice",
          "type": "uint256"
        }
      ],
      "name": "setSeller",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "estate_id",
          "type": "uint256"
        }
      ],
      "name": "getSeller",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "uint256"
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
          "name": "estate_id",
          "type": "uint256"
        },
        {
          "name": "customer_iphone",
          "type": "uint256"
        },
        {
          "name": "customer_name",
          "type": "bytes32"
        },
        {
          "name": "customer_address",
          "type": "bytes32"
        }
      ],
      "name": "setCustomer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "estate_id",
          "type": "uint256"
        }
      ],
      "name": "getCustomer",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]