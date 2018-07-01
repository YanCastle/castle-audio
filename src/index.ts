const audioDom = document.createElement('audio')
audioDom.onended=()=>{
            if(audioState.list.length>0){
                play(audioState.list.shift())
            }
        }
audioDom.onplaying=()=>{
    audioState.playing=true;
}
audioDom.autoplay=true;
const audioState={
    playing:false,
    list:[],
    token:''
}
export function text2audio(t: string) {
    try {
        if(audioState.playing){
            audioState.list.push(t)
        }else{
            play(t)
        }
    } catch (e) {

    }
}
export function set_token(tok:string){
    audioState.token=tok;
}
function play(t:string){
    audioDom.setAttribute('src', `http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=abcdxxx&tok=${audioState.token}&tex=${t}&vol=9&per=0&spd=5&pit=5`);
    audioDom.play();
}