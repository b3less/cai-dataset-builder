# cai-dataset-builder
<a href="https://github.com/b3less/cai-dataset-builder/blob/main/LICENSE.md">
  <img src="https://img.shields.io/badge/license-%2Bnigger-brightgreen"
    alt="license"></a>

a userscript for constructing text datasets using character.ai

## goals
currently the script only has a download button, i'd like to add a simple ui that can:  
  1. load a list of prompts from a text file
  2. specify the number of replys to generate
  3. specify how often to refresh the page

prompts should be seperated by line breaks, the script should:
  1. send the prompt as a message to the character
  2. generate the requested number of replys
  3. download outputs as `{char}_{prompt}.txt` and  `{char}_{prompt}_filtered.txt`
  4. repeate until there are no more prompts in the list
  
## credits
  * [autoscroll script](https://greasyfork.org/en/scripts/458400-reload-autoscroll-buttons-at-character-ai)  
  * [hear your waifu](https://greasyfork.org/en/scripts/456393-hearyourwaifu-hyw)  
  * [cai-decode](https://perberos.me/roleplai/tools/cai-decode.html)
  
### notice
idk what i'm doing so much of the code was written by [chatgpt](https://chat.openai.com).  
