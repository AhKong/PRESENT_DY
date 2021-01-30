import React from 'react';
import { Form, Input, InputNumber, Button,Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import '../css/message.css';

const MessagePage = () => {

    const { TextArea } = Input;
    const data = [
        {

            author: '박지훈',
            content: (
                <p>
                    도연아 졸업축하해^^
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
        {

            author: 'Han Solo',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
        {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                </Tooltip>
            ),
        }
    ];

    const Editor = ({ onChange, onSubmit, submitting, value }) => (
        <>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                    Add Comment
                </Button>
            </Form.Item>
        </>
    );

    const handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    };

    const handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    const onFinish = (values) => {
        console.log(values);
    };

    return (

        <div className="content-warp">
            <div className="message-title">
                <h1> 💌 도연이의 졸업을 축하하는 메세지를 작성해주세요 💌</h1>
            </div>

            <div className="avatar">
                <img  className="myImg" src="https://mblogthumb-phinf.pstatic.net/MjAxNzA2MjFfODgg/MDAxNDk3OTczODQ4MDcy.l55AQYzWAAPozeai4V1nXo94JOZomrEF50yH-Q3MiIsg.z1sRir8Tici9RonKsZ6vp6NNp08S6ScKZr4Ob6eIls0g.GIF.milkaruu/IMG_2891.GIF?type=w800"/>

            </div>

            <div className="input-comment">

                <Form  name="nest-messages" onFinish={onFinish}     >
                    <Form.Item label="작성자">
                   <input />
                    </Form.Item>
                    <Form.Item label="메시지">
                        <TextArea  rows={3}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 22 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <List
                className="comment-list"
                header={`${data.length} 개의 축하메세지`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <li>
                        <Comment

                            author={item.author}
                            content={item.content}

                        />
                        {localStorage.getItem("isMe") === true ?<Button>삭제</Button>:null    }
                    </li>
                )}
            />
        </div>




    )
}

export default MessagePage;