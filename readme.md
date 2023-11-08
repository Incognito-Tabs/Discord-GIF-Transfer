## How to Transfer GIFs Between Accounts

### Requirements:
- Ensure you have [Node.js](https://nodejs.org/en/) installed on your computer.
- Basic English

### Instructions:

1. **Access the Source Account**
   - Log in to the account from which you want to take the GIFs from.

2. **Open Developer Tools**
   - Press `Ctrl + Shift + I` (or `Cmd + Option + I` on Mac) to open the Developer Tools in your web browser.

3. **Navigate to the Network Tab**
   - Click on the "Network" tab in the Developer Tools.

4. **Favorite or Unfavorite a GIF**
   - Perform an action such as favoriting or unfavoriting a GIF on the source account.

5. **Identify the Network Request**
   - Look for a network request that appears as "2" in the list of requests. This request contains the information you need.

6. **Copy the Encoded "Settings"**
   - Within the request, locate the "settings" parameter and copy the entire encoded string.

7. **Edit the Config.JSON File**
   - Open the `Config.JSON` file with a text editor.
   - Add the copied string inside the "Collection" parameter. For example:

      ```json 
      {
         "Token": "", 
         "Collection": "CopiedStringHere"
      }
      ```

8. **Access the Destination Account**
   - Log in to the account where you want to transfer the GIFs to.

9. **Get the Token for the Destination Account**
   - Obtain the token for the destination account by following a YouTube tutorial.

10. **Update the Config.JSON File for the Destination Account**
    - Open the `Config.JSON` file again.
    - Replace the "Token" parameter with the token you obtained for the destination account. For example:

      ```json 
      {
         "Token": "DestinationTokenHere", 
         "Collection": "CopiedStringHere"
      }
      ```

11. **Run the Transfer Script**
    - Run the provided `Runner.bat` file. Make sure you have Node.js installed on your computer.

By following these steps, you should be able to successfully transfer GIFs between the source and destination accounts using the provided script.

### Why I Made This
I got tired of no method available on how to transfer GIFs other than the outdated 2021 method of 'LOCAL STORAGE,' which no longer works because Discord sucks. Your motivation for creating a method to transfer GIFs between accounts is understandable, especially if you found existing methods to be outdated or no longer functional. Discord's policies and features can change over time, making it necessary for users to adapt and find new solutions.