import React ,{useEffect,useState} from 'react';
import { Form, Input, InputNumber, Button,Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import '../css/message.css';
import axios from "axios";

const MessagePage = () => {

    const [listArr,setListArr] = useState([]);

    useEffect( () =>{
        loadCommentList()
    },[])
    const { TextArea } = Input;

    const loadCommentList = () => {
        let tempArray = new Array();
        axios.get('http://localhost:8080/comment-list')
            .then(res =>{
                console.log(res.data[0].created_at)
                for(let i = 0; i<res.data.length;i++){
                    const dateTime = res.data[0].created_at;
                    const obj = {
                        author : res.data[i].username,
                        content: (
                            <p>
                                { res.data[i].comment}
                            </p>
                        ),
                        datetime: (
                                <span>{dateTime}</span>

                        ),
                    }
                    tempArray.push(obj);
                    if(i === (res.data.length -1)){
                        setListArr(tempArray);
                    }

                }
            }).catch(err => {
            console.log(err);
        })
    }

    const handleSubmit = () => {
        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;
        console.log(username,comment)
        const sendObj = {
            username,comment
        }
        axios.post("http://localhost:8080/comment",sendObj)
            .then(res=> {
                console.log(res);
                loadCommentList()
            })
    }

    return (

        <div className="content-warp">
            <div className="message-title">
                <h1> 💌 도연이의 졸업을 축하하는 메세지를 작성해주세요 💌</h1>
            </div>

            <div className="avatar">
                <img  className="myImg" src="https://mblogthumb-phinf.pstatic.net/MjAxNzA2MjFfODgg/MDAxNDk3OTczODQ4MDcy.l55AQYzWAAPozeai4V1nXo94JOZomrEF50yH-Q3MiIsg.z1sRir8Tici9RonKsZ6vp6NNp08S6ScKZr4Ob6eIls0g.GIF.milkaruu/IMG_2891.GIF?type=w800"/>

            </div>

            <div className="input-comment">

                <Form  name="nest-messages"  >
                    <Form.Item label="작성자">
                   <input id="username" />
                    </Form.Item>
                    <Form.Item label="메시지">
                        <TextArea  id="comment" rows={3}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 22 }}>
                        <Button type="primary" onClick ={handleSubmit}>작성</Button>
                    </Form.Item>
                </Form>
            </div>
            <List
                className="comment-list"
                header={`${listArr.length} 개의 축하메세지`}
                itemLayout="horizontal"
                dataSource={listArr}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                renderItem={item => (
                    <li>
                        <Comment

                            author={item.author}
                            content={item.content}
                            datetime={item.datetime}

                        />
                        {localStorage.getItem("isMe") === true ?<Button>삭제</Button>:null    }
                    </li>
                )}
            />
        </div>




    )
}

export default MessagePage;