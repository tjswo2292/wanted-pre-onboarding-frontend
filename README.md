# **원티드 프리온보딩 프론트엔드 사전과제**

## [배포링크](https://tjswo2292.github.io/wanted-pre-onboarding-frontend/)

</br>

## **프로젝트 실행방법**

    npm install
    npm start

## **개발스택**

---

### Front-End

- React
- React-router
- Styled-components
- Axios

## **디렉토리 구조**

---

<img width="209" alt="Screenshot 2023-02-09 at 11 10 52" src="https://user-images.githubusercontent.com/55657931/217699057-ff4183e2-0c7e-4ef7-a5af-7c4063147588.png">

## **주요기능**

---

### Auth

- 회원가입
- 로그인

### Todo

- todo crud

## **상세기능**

---

<details>
<summary>회원가입/로그인</summary>
<div markdown="1">
    <ul>
        <li>
            <h2>SignUp</h2>
            <img width="467" alt="Screenshot 2023-02-09 at 11 59 45" src="https://user-images.githubusercontent.com/55657931/217706690-2428acad-a732-431b-ba56-cee7c8882be6.png"> </br>
            <span>- email, password 유효성 검사</span> </br>
            <span>- 유효성 검사 통과 못할시에 회원가입 버튼 disabled</span> </br>
            <span>- 회원가입 성공시 로그인 페이지로 이동</span> </br>
        </li>
        </br>
        <li>
            <h2>Login</h2>
            <span>- email, password 유효성 검사</span> </br>
            <span>- 유효성 검사 통과 못하면 회원가입 버튼 disabled</span> </br>
            </br>
            <img width="997" alt="Screenshot 2023-02-09 at 12 03 57" src="https://user-images.githubusercontent.com/55657931/217707555-00df06db-2bcf-4337-92fb-9a33b9c33ddd.png"></>
            <span>- 로그인이 성공시 JWT 로컬 스토리지에 저장</span> </br>
            <span>- 로그인이 성공시 todo 페이지 이동</span> </br>
            <span>- 로그인 여부에 따른 리다이렉트 처리</span> </br>
        </li>
    </ul>
</div>
</details>

<details>
<summary>Todo</summary>
<div markdown="1">
<ul>
    <li>
            <h2>Todo</h2>
            <img width="322" alt="Screenshot 2023-02-09 at 12 07 34" src="https://user-images.githubusercontent.com/55657931/217707768-52b6e1fe-d258-4f99-a834-db35932a7d8a.png"></br>
            <span>- 사용자에 맞게 Todo 목록 보여주기</span> </br>
            <span>- Todo input에 입력한 todo 추가하기</span> </br>
            </br>
            <img width="453" alt="Screenshot 2023-02-09 at 12 06 44" src="https://user-images.githubusercontent.com/55657931/217707669-d6e2fc1a-7be3-44d5-8856-31fdb4e8a98a.png"></br>
            <span>- Todo input에 빈값 입력시 경고창 띄우기</span> </br>
            </br>
            <img width="322" alt="Screenshot 2023-02-09 at 12 10 10" src="https://user-images.githubusercontent.com/55657931/217708104-5c3b8635-ffe9-4240-97df-0d10b98a1800.png"></br>
            <span>- 체크한 todo는 삭선 추가</span> </br>
            </br>
            <img width="322" alt="Screenshot 2023-02-09 at 12 11 20" src="https://user-images.githubusercontent.com/55657931/217708245-51046d4c-0a04-49a8-9286-cb8e58b74a7a.png"></br>
            <span>- "수정"버튼 클릭시 수정모드 활성화 </span> </br>
            <span>- 수정된 내용이 없고, "제출"버튼 클릭하면 기존내용 반영</span> </br>
            <span>- 수정모드에서 "취소" 버튼 클릭하면 수정모드 비활성화</span> </br>
            </br>
            <img width="322" alt="Screenshot 2023-02-09 at 12 12 53" src="https://user-images.githubusercontent.com/55657931/217708451-40c230a0-544a-47cb-943f-0804709a85a7.png"></br>
            <span>- 수정모드에서 todo 수정하고 제출버튼 클릭시 update</span> </br>
            </br>
            <img width="322" alt="Screenshot 2023-02-09 at 12 14 08" src="https://user-images.githubusercontent.com/55657931/217708634-6898f8e1-b2aa-43da-ba79-e00ea9533aa6.png"></br>
            <span>- todo "삭제"버튼 클릭시 삭제</span> </br>
        </li>
</ul>
</div>
</details>

---

## Commit Convention

| Tag Name | Description           |
| -------- | --------------------- |
| feat     | 새로운 기능 추가      |
| add      | 새로운 코드 라인 추가 |
| style    | 코드포맷 수정         |
| design   | UI style 변경         |
| refactor | 코드 리팩토링         |
| fix      | 에러, 버그 수정       |
| docs     | 문서수정              |

---

</br>

## 배포하고 해결하지 못한 Error

- github pages로 배포한 링크를 클릭하면 </br>
  요청한적 없지만
  https://tjswo2292.github.io/wanted-pre-onboarding-frontend/signin 404
  위의 경로로 api 요청이 된다. 로그인, 회원가입시에 "/auth/로그인 or 회원가입" 경로로 요청한건 있지만 "/signin" 경로를 설정하지도 요청을 보내지도 않았는데 error가 발생한다.
  아직은 이유를 모르겠다. </br>
  (이유를 찾아 블로그에 정리할 예정)
