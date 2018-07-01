import axios from 'axios'
declare let document:any;
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
export function get_token(APIKey:string,SecretKey:string){
    axios.get(`https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=${APIKey}&client_secret=${SecretKey}`).then(r=>{return r.data}).then(r=>{
        if(r.access_token){
            set_token(r.access_token)
        }
    })
}
function play(t:string){
    audioDom.setAttribute('src', `http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=abcdxxx&tok=${audioState.token}&tex=${t}&vol=9&per=0&spd=5&pit=5`);
    audioDom.play();
}