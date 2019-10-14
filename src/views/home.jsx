import React from "react";
import Sp from "../imgs/newsuper.jpg"
import Mr from "../imgs/octavia.jpg"
import Xr from "../imgs/2019raipd.jpg"
import Gt from "../imgs/GT.jpg"
import Kdyk from "../imgs/kdyk.jpg"
import Krk from "../imgs/krk.jpg"
import Kmk from "../imgs/kmk.jpg"
export default class Home extends React.Component{

    // state = {
    //     imgurls:[
    //         {imgurl:Sp,alt:"速派 给你看点实在的"},
    //         {imgurl:Mr,alt:"明锐智行款 生活总有惊喜"},
    //         {imgurl:Xr,alt:"昕锐 让美好相伴"},
    //         {imgurl:Gt,alt:"柯迪亚克GT 这就是轿跑SUV"},
    //         {imgurl:Kdyk,alt:"柯迪亚克 陪你去经历"},
    //         {imgurl:Krk,alt:"柯珞克 从心去出发"},
    //         {imgurl:Krk,alt:"柯米克 自有我可能"},
    //     ]
    // };
    state={
        imgurls:[
            {imgurl:"https://m.skoda.com.cn/c/public/uploadfiles/file/c35/a2f/c35a2f51624aa075925d7bb19a1259e1.jpg",alt:"速派 给你看点实在的"},
            {imgurl:"https://m.skoda.com.cn/c/public/uploadfiles/file/2a7/d54/2a7d54712590c006f454e6af94656af9.jpg",alt:"明锐智行款 生活总有惊喜"},
            {imgurl:"https://m.skoda.com.cn/c/public/uploadfiles/file/0f4/fe9/0f4fe9bc629c37378443d9c565b911c1.jpg",alt:"昕锐 让美好相伴"},
            {imgurl:"https://m.skoda.com.cn/c/public/uploadfiles/file/416/259/416259d294a11266092471b063a4b36b.jpg",alt:"柯迪亚克GT 这就是轿跑SUV"},
            {imgurl:"https://m.skoda.com.cn/c/public/uploadfiles/file/2da/367/2da36747a48580f9fe6db9c931834bc2.jpg",alt:"柯迪亚克 陪你去经历"},
            {imgurl:"https://m.skoda.com.cn/c/public/uploadfiles/file/74d/885/74d885e4b0c87292560031f49c12c831.jpg",alt:"柯珞克 从心去出发"},
            {imgurl:"https://m.skoda.com.cn/c/public/uploadfiles/file/f75/f26/f75f26088286f7a224d48f7628c865d7.jpg",alt:"柯米克 自有我可能"},
        ]
    }

    render(){
        
        return (
            <div>
                {
                    this.state.imgurls.map((imgurl)=><img  className={"img-responsive"}  src={imgurl.imgurl} key={imgurl.alt}></img>)
                }
                  
            </div>
        )
    }


}