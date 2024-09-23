//import 라이브러리

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const AddList = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [personList, setPersonList] = useState([]);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [content, setContent] = useState('');




    /*---일반 변수--------------------------------*/
    const navigate = useNavigate();
    



    /*---일반 메소드 -----------------------------*/
    const getPersonList = ()=>{
        axios({

            method: 'get',
            url: 'http://localhost:9000/api/persons',

            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response.data); //수신데이타
            
            setPersonList(response.data);

            

        }).catch(error => {
            console.log(error);

        });


    }




    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    useEffect( ()=>{

        console.log("마운트 온");

        //서버에서 데이터 가져오기 와서 그리기
        getPersonList();

        //html과 섞어서 출력


    }, [] );

    //이름
    const handleName = (e)=>{
        console.log("이름입력");
        setName(e.target.value);
    };

    //핸드폰
    const handlePassword = (e)=>{
        console.log("비번 입력");
        setPassword(e.target.value);
    };

    //회사번호
    const handleContent = (e)=>{
        console.log("내용 입력");
        setContent(e.target.value);
    };


    const handleAdd = (e)=>{
        e.preventDefault();
        console.log("전송");

        const personVo = {
            name: name,
            password: password,
            content: content
        }
        console.log(personVo);

        //서버에 전송
        axios({

            method: 'post',
            url: 'http://localhost:9000/api/persons',

            headers: { "Content-Type": "application/json; charset=utf-8" }, //post put

            data: personVo, // put, post, JSON(자동변환됨)

            responseType: 'json' //수신타입

        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            if (response.data.result === 'success') {
                //리다이렉트
                //navigate("/list");
                getPersonList();
            } else {
                alert("등록실패");
            }
            

        }).catch(error => {
            console.log(error);

        });


        

    };






    return (

        <>

            <form action="" method="get" onSubmit={handleAdd}>
                
                <table border="1" width="540px">
                    <tbody>

                        <tr>
                            <td>이름</td>
                            <td><input type="text" name="name" value={name} onChange={handleName} /></td>
                            <td>비밀번호</td>
                            <td><input type="password" name="password" value={password} onChange={handlePassword} /></td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <textarea cols="72" rows="5" name="content" value={content} onChange={handleContent} ></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan="4"><button type="submit">등록</button></td>
                        </tr>

                    </tbody>

                </table>
            </form>
            <br />



            { personList.map ( ( personVo )=>(

                <div key={personVo.personId}>

                    <table border="1" width="540px">
                        <tbody>
                            <tr>
                                <td>[{personVo.no}]</td>
                                <td>{personVo.name}</td>
                                <td>{personVo.regDate}</td>
                                <td><Link to={`/delete/${personVo.personId}`} rel="noreferrer noopener">삭제</Link></td>
                            </tr>
                            <tr>
                                <td colSpan="4">{personVo.content}</td>
                            </tr>
                            <br />
                        </tbody >
                    </table>

                </div>
                    


            ) )}


        </>

    );

}

export default AddList;