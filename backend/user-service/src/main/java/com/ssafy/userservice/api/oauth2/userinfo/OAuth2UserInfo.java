package com.ssafy.userservice.api.oauth2.userinfo;

public interface OAuth2UserInfo {
    String getProviderId(); //공급자 아이디 ex) google, facebook
    String getProvider(); //공급자 ex) google, facebook
    String getName(); //사용자 이름 ex) 홍길동
    String getEmail(); //사용자 이메일 ex) gildong@gmail.com
    String getProfileUrl();
    String getGender();
    int getAgeRange();
    String getNickName();
}