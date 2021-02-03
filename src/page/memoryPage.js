import React ,{useEffect} from "react";
import '../css/memory.css';
import { Carousel ,List, Avatar, Space} from 'antd';
import  photo1 from '../resource/photo1.jpeg';
import  photo2 from '../resource/photo2.jpeg';
import  photo3 from '../resource/photo3.jpeg';
import  photo4 from '../resource/photo4.jpeg';
import  photo5 from '../resource/photo5.jpeg';
import  photo6 from '../resource/photo6.jpeg';


const MemoryPage = () =>{
    const listData = [];


        listData.push({
            title: '급 번개로 떠난 여수 🐠 🏖 🐠 🏖',
            content:
                '갑자기 떠난 급번개 여수 개인적인 생각으론 우리의 코어가 여기서 단단해진 느낌이야 다들 공감하지? ㅋㅋㅋㅋㅋㅋ원래 셋이서는 잘 안친했는데 김아름 덕질 하게 된 순간 셋이서 아주 똘똘 뭉치게 된거 ㅇㅈ???',
            photo : photo1,
        });

        listData.push({
            title: '환상의 나라 에버랜드 🎸🎡🎢',
            content:
                '에버랜드 에서의 아찔한 1박2일 에버랜드 특유의 분위기에 취해 댄스 파티를 벌이던 그 떄가 넘 그리울뿐 코잠 될때까지 다들 댄스댄스 연습해서 에버랜드 아마존 가서 댄스 실력 뽐내자! 자신 없는 사람은 더더욱 열심히 연습해오도록',
            photo : photo2
        });

        listData.push({
            title: '잊지 못해 연말 파아티 🎊 😎 🌈 ',
            content:
                'ㅇㅣ때 진짜 운명처럼 콘서트 날짜가 겹쳐서 연말파티 한 거 아직도 못잊어 이때가 마지막 콘서트 일 줄 누가 알았겠냐고요!!!!!! 저때 진짜 하나도 소중하지 않았던 순간이 없을 정도로 나는 가장 기억에 남는 순간이야 ' +
                '얼른 상황이 나아져서 슬픔의 케이팝 파티 가자링',
            photo : photo3
        });

        listData.push({
            title: 'MBTI BEST COUPLE 💖💛💚  ',
            content:
                '성격 유형 검사만하면 영혼의 단짝으로 나오는 도연과 민정 그 사이에 낀 외로운 T 김아름 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋmbti 과몰입녀들 영원하자 다음 나의 프로젝트는 우리들의 과몰입을 증명하는' +
                'mbti 테스터 주제로 정했어 다들 mbti에 대해 더 공부해서 나에게 정보를 줘 미리 고마워~',
            photo : photo4
        });
        listData.push({
            title: '도연이의 미소가 곧 밝은 미래',
            content:
                '저 심상치 않은 웃음과 포즈에서 느낄수 있는 젤라또의 기운,,,,,결국 우리가 셋이서 잘 논다는게 다들 젤라또 기질이 있기 때문이야 근데 그 중 단연 최고가 너야 하여간 도연아 더 할말은 없고 ' +
                '앞으로 너의 인생에서 저렇게 밝고 행복하게 웃을 수 있는 일만 가득하길 바랄게 그러니 너도 언니랑 내 인생에 좋은일만 있길 바라렴 아 너무 과하겐 하지마 오히려 독이 된다고 했잖아 명심 또 명심~~',

            photo : photo5
        });
        listData.push({
            title: '맞아, 나 이제 좀 귀찮아',
            content:
                '원래 졸업식을 했으면 이런거 안했는데 너까지 졸업식이 취소 되니까 뭔가 기억에 남는 졸업이 되었으면 하는 마음에 준비했는데 생각보다 일이 커졌어 그래서 나 좀 곤란해 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ' +
                '그리고 저런 눈빛은 함부로 발사하지 않는게 좋겠어 넘 위험하고 매혹적인 눈빛이니까 후 이제 할말 없어 어때 감동이지? 우리같은 친구가 어딨냐 도연아 부럽다 부러워!!!!!',
            photo : photo6
        });

    listData.push({
        title: '마지막으로 지훈이는 윙깅이야',
        content:
            '사실상 이게 본론이라고 할 수 있지. 우리의 끝없는 논쟁 오늘로써 종결한다. 반박 안받습니다. 반박 안받고 그냥 졸업 축하드려요1!!!' +
            '졸업 후 니가 하는 모든 일을 우리는 응원해 말 안해도 알지 그러니까 돈 많이 벌어서 우리 호강시켜줘 언니랑 나 기대하고 있을게 우리는 널 너무너무 사랑해 ~~~~~' ,
        photo : 'http://img1.daumcdn.net/thumb/R1024x0/?fname=http://i1.daumcdn.net/cfile282/image/2432A83C5948DCF91A0684'
    });

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
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            extra={
                                <img
                                    width="250"
                                    height="200"
                                    alt="logo"
                                    src={item.photo}
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<p className="list-title">{item.title} </p>}></List.Item.Meta>
                            <h4>{item.content}</h4>
                        </List.Item>
                    )}
                />
            </div>

        </div>
    )
}

export  default MemoryPage;