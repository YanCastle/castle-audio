# how to use this npm package

before you can use this package,you need a baidu aip project,this is the  website[https://ai.baidu.com/docs#/TTS-API/top]

first : you need install package for your node project use this code in command
```shell
npm i -S castle-audio
```
then : import the function 
```typescript
import {set_token} from 'castle-audio'
set_token('your baidu aip token here')
```
then : you can use the function text2audio to play a text audio
```typescript
import {text2audio} from 'castle-audio'
text2audio('hi,i am wiki')
text2audio('hi,i am wiki1')
```

