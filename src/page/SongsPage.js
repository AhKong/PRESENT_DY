import React,{useEffect} from "react";
import '../css/songPage.css';
import song from '../resource/testsong.m4a';
import dongchung from '../resource/동충동충.m4a';
import {HeartFilled} from "@ant-design/icons";
import watermelon from '../resource/watermelon.png';

const SongsPage = () =>{
    useEffect(() =>{
        var filter = "win16|win32|win64|mac|macintel";
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
            alert('해당 페이지는 pc환경에 최적화 되었습니다. pc로 접속해 주세요!')
        }
    },[])
    return (
        <div className="body">
            <div className="warp-contents">
                <h1></h1>
                 <div className="imgDiv">
                     <img style={{width:"100px"}} src ={watermelon}/>
                     <span className="nickName">이도연</span>
                     <span className="mySpan">님 취향저격 Best4</span>
                 </div>
                <table>
                    <thead style={{textAlign:"center"}}>
                    <tr>
                        <th><input type="checkbox"/></th>
                        <th>제목</th>
                        <th>아티스트</th>
                        <th>좋아요</th>
                        <th>듣기</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td className="checkBoxTd"><input type="checkbox"/></td>
                        <td className="titleTd">도연이를 향한 세레나데 </td>
                        <td className ="artistTd">아티스트dlfma</td>
                        <td className ="likeTd"> 19970625 <HeartFilled /></td>
                        <td className ="songTd">
                            <audio controls>
                                <source src={song} type="audio/mp3"/>
                            </audio>
                        </td>
                    </tr>
                    <tr>
                        <td className="checkBoxTd" ><input type="checkbox"/></td>
                        <td className="titleTd">도연이를 향한 세레나데 </td>
                        <td className ="artistTd">아티스트</td>
                        <td className ="likeTd"> 19970625 <HeartFilled /></td>
                        <td className ="songTd">
                            <audio controls>
                                <source src={song} type="audio/mp3"/>
                            </audio>
                        </td>
                    </tr>
                    <tr>
                        <td className="checkBoxTd"><input type="checkbox"/></td>
                        <td className="titleTd">도연이를 향한 세레나데 </td>
                        <td className ="artistTd">아티스트</td>
                        <td className ="likeTd"> 19970625 <HeartFilled /></td>
                        <td className ="songTd">
                            <audio controls>
                                <source src={song} type="audio/mp3"/>
                            </audio>
                        </td>
                    </tr>
                    <tr>
                        <td className="checkBoxTd"><input type="checkbox"/></td>
                        <td className="titleTd">도연이를 향한 세레나데 </td>
                        <td className ="artistTd">아티스트</td>
                        <td className ="likeTd"> 19970625 <HeartFilled /></td>
                        <td className ="songTd">
                            <audio controls>
                                <source src={song} type="audio/mp3"/>
                            </audio>
                        </td>

                    </tr>

                    </tbody>
                </table>
            </div>

        </div>)
}

export default SongsPage;