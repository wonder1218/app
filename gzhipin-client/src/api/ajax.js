
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    if(type==='GET'){
        let paramStr=''
        Object.keys(data).forEach(key=>{
            paramStr+=key+'='+data[key]+'&'
        })
        if(paramStr){
           paramStr= paramStr.substr(0,paramStr.length-1)
        }
    //使用axios发get请求
        return  axios.get(url+'?'+paramStr);
    }else {
        return axios.post(url,data)
    }


}