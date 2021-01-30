import React from "react";
import '../css/memory.css';
import { Carousel ,List, Avatar, Space} from 'antd';
const MemoryPage = () =>{
    const listData = [];
    for (let i = 0; i < 3; i++) {
        listData.push({
            href: 'https://ant.design',
            title: `ant design part ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',

            content:
                '잠와',
        });
    }



    return (
        <div className="memory-warp">
            <div className="memoryTitle">
                <h1>남서울대 최고의 아웃풋 === 이도연</h1>
            </div>
            <div>
                <Carousel autoplay>
                    <div>
                        <img className="carouselImg" src="https://cdnweb01.wikitree.co.kr/webdata/editor/201710/15/img_20171015122006_4a43f846.jpg"/>
                    </div>
                    <div>
                        <img className="carouselImg" src="https://cdnweb01.wikitree.co.kr/webdata/editor/201710/15/img_20171015122006_4a43f846.jpg"/>
                    </div>
                    <div>
                        <img className="carouselImg" src="https://cdnweb01.wikitree.co.kr/webdata/editor/201710/15/img_20171015122006_4a43f846.jpg"/>
                    </div>
                </Carousel>
            </div>
            <div className="imgList">
                <List
                    itemLayout="vertical"
                    size="small"
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            extra={
                                <img
                                    width="300"
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                            />
                            <h4>{item.content}</h4>
                        </List.Item>
                    )}
                />
            </div>

        </div>
    )
}

export  default MemoryPage;