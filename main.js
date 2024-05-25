/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
nftList = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, owner, value) {
   let nftObj = {
      id: nftList.length + 1,
      name: name,
      owner: owner,
      value: value
   };
   nftList.push(nftObj);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for (let i = 0; i < nftList.length; i++) {
      let msg = "ID: " + nftList[i].id + "\nName: " + nftList[i].name + "\nOwner: " + nftList[i].owner + "\nValue: " + nftList[i].value + "\n";
      console.log(msg);
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total NFTs minted: " + nftList.length);
   return nftList.length;
}

// call your functions below this line
mintNFT("The Swaggy Monkey", "Nitin", 900);
mintNFT("The Sickly Dog", "Williams", 300000);
mintNFT("The Deadly Whale", "Steffan", 50000);
mintNFT("The Shy Possum", "Clarrisa", 7);

listNFTs();

getTotalSupply();