// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Avatar is ERC721, ERC721URIStorage {
    address deployer = address(0);
    address public trustedRelayer = address(0);

    uint256 _tokenIdCounter;
    mapping(address => uint256) public avatars;

    constructor() ERC721("Avatar", "AVT") {
        deployer = msg.sender; 
    }

    modifier onlyRelayer() {
        require(msg.sender == trustedRelayer, "Only trusted relayer is allowed");
        _;
    }

    function _update(
        address to, 
        uint256 tokenId, 
        address auth
    ) internal override returns (address) {
        address from = _ownerOf(tokenId);
        require(from == address(0), "Token not transferable");
        return super._update(to, tokenId, auth);
    }

    function setRelayer(address _relayer) external {
        require(msg.sender == deployer);
        trustedRelayer = _relayer;
    }

    function setAvatar(
        string memory avatar
    ) external {
        require(avatars[msg.sender] == 0, "Avatar already minted"); 
        _tokenIdCounter += 1;
        avatars[msg.sender] = _tokenIdCounter;
        _safeMint(msg.sender, _tokenIdCounter);
        _setTokenURI(_tokenIdCounter, avatar);
    }

    function updateAvatar(
        address player,
        string memory avatar
    ) external onlyRelayer {
        uint256 tokenId = avatars[player];
        _setTokenURI(tokenId, avatar);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) 
    public 
    view 
    override(ERC721, ERC721URIStorage)
    returns(bool) {
        return super.supportsInterface(interfaceId);
    }

}