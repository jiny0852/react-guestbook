//import 라이브러리

import React from 'react';
import { Link } from 'react-router-dom';

const DeleteForm = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/

    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    return (

        <>

            <form action="" method="get">
                <table>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" name="password" /></td>
                        
                        <input type="hidden" name="no" value="${personVo.no}" />
                        <input type="hidden" name="action" value="delete" />
                        
                        <td><button type="submit">삭제</button></td>
                    </tr>
                </table>
            </form>
        
            <br /><br />
        
            <Link to="/list" rel="noreferrer noopener">메인으로 돌아가기</Link>

        </>

    );

}

export default DeleteForm;