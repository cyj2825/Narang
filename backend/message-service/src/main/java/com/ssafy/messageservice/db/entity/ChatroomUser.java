package com.ssafy.messageservice.db.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@Table(name="ChatroomUser")
@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChatroomUser {
    @Id
    @Column(length = 50)
    // 임의로 pk 추가
    private String id = UUID.randomUUID().toString();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chatroomId", referencedColumnName = "chatroomId")
    private Chatroom chatroom;

    @Column(length = 50)
    private String userId;
//    @EmbeddedId
//    private ChatroomUserTableKey id;
}